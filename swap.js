//import algosdk from 'algosdk'; //uncomment for testing in command line

var slippage = 0.05

var lsig = undefined;

var asset_name = "HDL"

var asset_name2 = "Algo"

const TESTNET_VALIDATOR_APP_ID = 21580889
const MAINNET_VALIDATOR_APP_ID = 350338509

const validator_app_id = MAINNET_VALIDATOR_APP_ID;

var liquidity_asset_id = 350338509

var asset_id = 0;

var asset_id2 = 31566704;

var user_address = "C5E5W3BERJALL2ZH4YB3TAP7ZSJH2PJUPDHLGF74YE6DBMQ62AA47IXGNQ"

var pool = "W3RTY34WM3WNAPESJX3NCHX6KP32O6V2RI5WNB3RBKKZE3RQAXYTLNUWCI"

var zerosIN = 1000000;
var zerosOut = 1000000;

var inputIsAlgo = true;
var amount = 1000000;
var asset_out_amount = 0;

const algodClient = new algosdk.Algodv2('', 'https://api.algoexplorer.io/', '');


async function is_opted_in() {
    let optedIn = false;
    try {
        let account_info = await algodClient.accountInformation(user_address).do();
        console.log(account_info);
        account_info['apps-local-state'].forEach(item => {
            if (item['id'] == validator_app_id) {
                optedIn = true;
            }
        })
    }
    catch (error) { console.log(error); return false }
    return optedIn;
}

is_opted_in().then(data => {
    if (!data) {
        console.log('Account not opted into app...')
    }
    else { console.log(user_address + " is opted in") }
})

async function getPoolInfo(paddress) {
    try {
        let account_info = await algodClient.accountInformation(paddress).do();
        console.log(account_info);
        let app_state = account_info['apps-local-state'][0]['key-value']
        console.log(app_state)

        let appObject = {};
        app_state.forEach(item => {
            let key = item.key;
            let value = item.value;
            appObject[key] = value;
        })

        console.log(appObject)
        let reserve1 = appObject["czE="].uint;
        let reserve2 = appObject["czI="].uint;
        if (inputIsAlgo === false) {
            let r1 = reserve1;
            reserve1 = reserve2;
            reserve2 = r1;
        }
        let quote = fixedInQuote(amount, reserve1, reserve2)
        console.log(quote)
        return quote
    }
    catch (error) {
        console.log(error);
    }
}

function fixedInQuote(asset_in_amount, output_supply, input_supply) {
    let amount_out = (asset_in_amount * 997 * output_supply) / ((input_supply * 1000) + (asset_in_amount * 997))
    asset_out_amount = amount_out;
    return amount_out
}

async function prepare_swap_transactions() {

    const SuggestedParams = await algodClient.getTransactionParams().do();
    console.log(SuggestedParams)
    console.log(user_address + " " + pool)

    let noAlgo = false;

    let appCallAssetArray = [asset_id, liquidity_asset_id];

    if (asset_id !== 0 && asset_id2 !== 0) {
        noAlgo = true;
        appCallAssetArray = [asset_id, asset_id2, liquidity_asset_id]
    }
    else appCallAssetArray = (asset_id === 0) ? [asset_id2, liquidity_asset_id] : [asset_id, liquidity_asset_id]

    let txns = [
        algosdk.makePaymentTxnWithSuggestedParams(
            user_address,
            pool,
            2000,
            undefined,
            toUintArray('fee'),
            SuggestedParams
        ),
        algosdk.makeApplicationNoOpTxn(
            pool,
            SuggestedParams,
            validator_app_id,
            app_args = [toUintArray('swap'), toUintArray('fi')],
            [user_address],
            undefined,
            appCallAssetArray,
        ),
        (!inputIsAlgo) ? algosdk.makeAssetTransferTxnWithSuggestedParams(
            user_address,
            pool,
            undefined,
            undefined,
            parseInt(amount + (amount * slippage)),
            undefined,
            asset_id,
            SuggestedParams,
        ) : algosdk.makePaymentTxnWithSuggestedParams(
            user_address,
            pool,
            parseInt(amount + (amount * slippage)),
            undefined,
            undefined,
            SuggestedParams,
        ),
        (inputIsAlgo || noAlgo) ? algosdk.makeAssetTransferTxnWithSuggestedParams(
            pool,
            user_address,
            undefined,
            undefined,
            parseInt(asset_out_amount - (asset_out_amount * slippage)),
            undefined,
            asset_id2,
            SuggestedParams,
        ) : algosdk.makePaymentTxnWithSuggestedParams(
            pool,
            user_address,
            parseInt(asset_out_amount - (asset_out_amount * slippage)),
            undefined,
            undefined,
            SuggestedParams,
        )
    ]

    txns = algosdk.assignGroupID(txns)

    console.log(txns)

    return txns
}

function toUintArray(input) {
    return Uint8Array.from(Array.from(input).map(letter => letter.charCodeAt(0)));
}

function prepareSig() {
    bytecode = get_pool_logicsig(350338509, asset_id, asset_id2);
    lsig = algosdk.makeLogicSig(bytecode);
}

function _base64ToArrayBuffer(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
    }
    return bytes;
}

async function getZeros(index, isInput) {
    let iamount = 1000000;
    if (index !== 0) {
        let url2 = "https://algoexplorerapi.io/idx2/v2/assets/" + index;
        console.log(url2);
        fetch(url2)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                let zeros = data.asset.params.decimals;
                let value = "1";
                for (var i = 0; i < zeros; i++) {
                    value = value + "0";
                }
                iamount = parseInt(value);
                if (isInput) {
                    asset_name = data.asset.params["unit-name"];
                    zerosIN = iamount;
                }
                else {
                    asset_name2 = data.asset.params["unit-name"]
                    zerosOut = iamount;
                }
            })
            .catch(function () {
                console.log("Error occured  " + url2);
            });
    } else {
        if (isInput) {
            asset_name = "Algo";
            zerosIN = 1000000;
        }
        else {
            asset_name2 = "Algo";
            zerosOut = 1000000;
        }
    }
}

function convertInput() {
    if (index !== 0) {
        if (window.details.input === true) { amount = amount * iamount }
        Object.assign(state, { stateAmount: amount / iamount });
        document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;
    } else {
        if (window.details.input === true) { amount = amount * 1000000 }
        Object.assign(state, { stateAmount: amount / 1000000 });
        document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

    }
}

getZeros(asset_id, true);
getZeros(asset_id2, false);
prepareSig();
handleChange();

var txid = ""

function changeAmount() {
    amount = parseInt(document.getElementById("amount").value * zerosIN);
    handleChange();
}
function swap() {
    prepareSig();
    txid = ""
    prepare_swap_transactions().then(txns => {
        let mySigned = [txns[0], txns[2]];
        myAlgoWallet.signTransaction(mySigned.map(txn => txn.toByte())).then(data => {
            txns[0] = data[0].blob;
            txns[2] = data[1].blob
            txns[1] = algosdk.signLogicSigTransaction(txns[1], lsig).blob
            txns[3] = algosdk.signLogicSigTransaction(txns[3], lsig).blob
            console.log(txns)
            try {
                algodClient.sendRawTransaction(txns).do().then(response => {
                    document.getElementById("sendscreen").style.display = "block";
                    document.getElementById("algoflex3").style.display = "block";
                    document.getElementById("tablevis").style.display = "none";
                    document.getElementById("algolink").href = "https://algoexplorer.io/tx/" + response.txId
                })
            }
            catch (error) { console.log(error) }
        });
    })
}
async function connect2() {
    myAlgoWallet.connect().then(data => {
        user_address = data[0].address
        document.getElementById("snoopy").innerText = user_address
    })
    //const addresses = accounts.map(account => account.address);
}

function handleChange() {
    document.getElementById("quote").innerText = null;
    asset_id = parseInt(document.getElementById("input").value);

    asset_id2 = parseInt(document.getElementById("output").value);

    pool = document.getElementById("pool").value;

    let slipPercent = document.getElementById("slip").value / 100

    slippage = slipPercent;

    document.getElementById("slipview").innerText = slipPercent

    if (asset_id === 0) { inputIsAlgo = true }
    else { inputIsAlgo = false }

    getZeros(asset_id, true).then(() => {
        getZeros(asset_id2, false).then(() => {
            getPoolInfo(pool).then(data => {
                let end = asset_name2;
                document.getElementById("quote").innerText = " " + ((data / zerosOut) * (1 - slippage)).toFixed(2) + " " + end;
            })
        })
    })
}

async function getPoolInfo(paddress) {
    try {
        let account_info = await algodClient.accountInformation(paddress).do();
        console.log(account_info);
        liquidity_asset_id = account_info["created-assets"][0].index
        let app_state = account_info['apps-local-state'][0]['key-value']
        console.log(app_state)

        let appObject = {};
        app_state.forEach(item => {
            let key = item.key;
            let value = item.value;
            appObject[key] = value;
        })

        console.log(appObject)
        let reserve1 = appObject["czE="].uint;
        let reserve2 = appObject["czI="].uint;
        if (inputIsAlgo === false) {
            let r1 = reserve1;
            reserve1 = reserve2;
            reserve2 = r1;
        }
        let quote = fixedInQuote(amount, reserve1, reserve2)
        console.log(quote)
        return quote
    }
    catch (error) {
        console.log(error);
    }
}