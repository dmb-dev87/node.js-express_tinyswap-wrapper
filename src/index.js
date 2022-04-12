import 'regenerator-runtime/runtime'
import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';

var assets = require("./assets.json");
assets = Object.values(assets);

//important! comment out bellow before npm publish!!!!!
window.swapDetails = {
  assetid: 0,
  assetid2: 137594422,
  pool: "4QDLMVQORYVMBABY2EXGIVK53TBJWURS4PH2OC2TMOGKSZVMTOA6XHHZE4"
}


var indexerURL = "https://algoexplorerapi.io/idx2/v2/accounts/";

const state = {
  update: false,
  asaIndVis: "none",
  myTransactions: ["1"],
  tableVis: false,
  balance: "",
  asaNumbVis: "none",
  asa: "Algorand",
  asaNumb: 0,
  txID: "",
  amount: 1,
  note: "",
  recipient: "",
  con_status_text: "Status: Not Connected",
  address: "",
  isOpen: false,
  completed: false,
  shhh: true,
  stateZeros: 1000000,
  stateAmount: 0,
  assetName: "Algo",
  hide: false,
  timer: 5,
  loading: true
};

function tick() {
  setInterval(() => {
    if (this.state.timer !== 0) {
      let time = this.state.timer;
      Object.assign({ timer: time - 1 });
    } else {
      Object.assign({ loading: false });
    }
  }, 1000);
}

function updateBalance() {
  let url2 = indexerURL + state.address;
  fetch(url2)
    .then((response) => response.json())
    .then((data) => {
      let myBalance =
        ". Balance: " +
        JSON.stringify(data.account.amount / 1000000) +
        " Algos";
      Object.assign(state, { balance: myBalance });
    })
    .catch(function () {
      console.log("Error occured  " + url2);
    });
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

function close() {
  Object.assign({ isOpen: false });
  document.getElementById("firstdiv").style.display = "none";
  document.getElementById("firstdiv").className = "modal fade";
  document.getElementById("sure").style.display = "block";
  document.getElementById("shhh").style.display = "block";
  document.getElementById("tablevis").style.display = "none";
  document.getElementById("sendscreen").style.display = "none";
}

async function connect() {
  await connect2().then(() => {
    document.getElementById("sure").style.display = "none";
    document.getElementById("shhh").style.display = "none";
    document.getElementById("tablevis").style.display = "block";
    document.getElementById("sendscreen").style.display = "block";
    document.getElementById("snoopy").innerText = "" + state.address.slice(0, 20) + "...";
  })
}

function send() {
  if (Pipeline.pipeConnector === "WalletConnect") {
    alert("Close this alert, then sign the transaction in your offical Algorand wallet app.")
  }
  Pipeline.send(
    recipient,
    amount,
    note,
    state.address,
    index
  ).then((data) => {
    if (data !== undefined) {
      Object.assign(state, { txID: data });
      document.getElementById("sendscreen").style.display = "none";
      document.getElementById("algoflex3").style.display = "block";
      document.getElementById("algolink").href = "https://algoexplorer.io/tx/" + state.txID;
    }
    else { alert("transaction cancelled") }
  });
}

function setOpen() {
  document.getElementById("firstdiv").style.display = "block";
  document.getElementById("firstdiv").className = "modal fade show";
}

function switchConnector(event) {
  Pipeline.pipeConnector = event.target.value
  console.log(Pipeline.pipeConnector)
}

document.getElementById("walletswitch").onchange = switchConnector
document.getElementById("algoswap-btn").onclick = setOpen;
document.getElementById("div-close").onclick = close;
document.getElementById("div-close-2").onclick = close;
document.getElementById("div-close-3").onclick = close;
document.getElementById("algobutton").onclick = connect;
document.getElementById("from-currency").onclick = () => showAssetList("from");
document.getElementById("to-currency").onclick = () => showAssetList("to");

function selectAsset(arrow, assetid) {
  document.getElementById("assetlist").style.display = "none";
  document.getElementById("sendscreen").style.display = "block";

  if (arrow === "from") {
    asset_id = parseInt(assetid);
  } else if (arrow === "to") {
    asset_id2 = parseInt(assetid);
  }

  handleChange();
}

function showAssetList(arrow) {
  var lists = '<ul class="list">';
  assets.forEach((asset) => {
    lists += `<li class="list-item asset-list-item"><div role="button" class="list-item__click-wrapper" id="asset-item-${asset.id}"><div class="is-vertically-centered has-space-between wrap-flex asset-list-item-detail"><div class="is-vertically-centered asset-name-with-logo-and-unit asset-list-item-detail__asset-name-with-logo-and-unit"><img class="asset-logo" src="${asset.logo.png}" alt="${asset.name}"></img><div class="asset-name-with-logo-and-unit__name-and-unit"><div class="is-vertically-centered asset-name"><div data-testid="AssetList.other-assets.item-0.AssetNameWithLogoAndUnit.AssetName.name" class="is-truncated-text typography--body is-bold-text is-truncated-text has-text-main-color">${asset.name}</div></div><p data-testid="AssetList.other-assets.item-0.AssetNameWithLogoAndUnit.asset-unit-and-id" class="typography--secondary-body has-text-gray-color">${asset.unit_name}</p></div></div></div></div></li>`;  
  })
  lists += '</ul>';
  
  document.getElementById("asset-list").innerHTML = lists;

  document.getElementById("sendscreen").style.display = "none";
  document.getElementById("assetlist").style.display = "block";

  assets.forEach((asset) => {
    document.getElementById(`asset-item-${asset.id}`).onclick = () => selectAsset(arrow, asset.id);
  })
}

function inputChanged() {
  amount = document.getElementById("amountInputter").value;
  convertInput();

}
function showDate() {
  let n = new Date();
  let y = n.getFullYear();
  let m = n.getMonth() + 1;
  let d = n.getDate();
  document.getElementById("date").innerText = m + "/" + d + "/" + y;
}

showDate();

const definition = {
  "bytecode": "BCAIAQCBgICAgICAgPABgICAgICAgIDwAQMEBQYlJA1EMQkyAxJEMRUyAxJEMSAyAxJEMgQiDUQzAQAxABJEMwEQIQcSRDMBGIGCgICAgICAgPABEkQzARkiEjMBGyEEEhA3ARoAgAlib290c3RyYXASEEAAXDMBGSMSRDMBG4ECEjcBGgCABHN3YXASEEACOzMBGyISRDcBGgCABG1pbnQSQAE7NwEaAIAEYnVybhJAAZg3ARoAgAZyZWRlZW0SQAJbNwEaAIAEZmVlcxJAAnkAIQYhBSQjEk0yBBJENwEaARclEjcBGgIXJBIQRDMCADEAEkQzAhAhBBJEMwIhIxJEMwIiIxwSRDMCIyEHEkQzAiQjEkQzAiWACFRNUE9PTDExEkQzAiZRAA+AD1RpbnltYW5Qb29sMS4xIBJEMwIngBNodHRwczovL3RpbnltYW4ub3JnEkQzAikyAxJEMwIqMgMSRDMCKzIDEkQzAiwyAxJEMwMAMQASRDMDECEFEkQzAxElEkQzAxQxABJEMwMSIxJEJCMTQAAQMwEBMwIBCDMDAQg1AUIBsTMEADEAEkQzBBAhBRJEMwQRJBJEMwQUMQASRDMEEiMSRDMBATMCAQgzAwEIMwQBCDUBQgF8MgQhBhJENwEcATEAE0Q3ARwBMwQUEkQzAgAxABNEMwIUMQASRDMDADMCABJEMwIRJRJEMwMUMwMHMwMQIhJNMQASRDMDESMzAxAiEk0kEkQzBAAxABJEMwQUMwIAEkQzAQEzBAEINQFCAREyBCEGEkQ3ARwBMQATRDcBHAEzAhQSRDMDFDMDBzMDECISTTcBHAESRDMCADEAEkQzAhQzBAASRDMCESUSRDMDADEAEkQzAxQzAwczAxAiEk0zBAASRDMDESMzAxAiEk0kEkQzBAAxABNEMwQUMQASRDMBATMCAQgzAwEINQFCAJAyBCEFEkQ3ARwBMQATRDMCADcBHAESRDMCADEAE0QzAwAxABJEMwIUMwIHMwIQIhJNMQASRDMDFDMDBzMDECISTTMCABJEMwEBMwMBCDUBQgA+MgQhBBJENwEcATEAE0QzAhQzAgczAhAiEk03ARwBEkQzAQEzAgEINQFCABIyBCEEEkQzAQEzAgEINQFCAAAzAAAxABNEMwAHMQASRDMACDQBD0M=",
  "address": "ABUKAXTANWR6K6ZYV75DWJEPVWWOU6SFUVRI6QHO44E4SIDLHBTD2CZ64A",
  "size": 881,
  "variables": [
    {
      "name": "TMPL_ASSET_ID_2",
      "type": "int",
      "index": 5,
      "length": 10
    },
    {
      "name": "TMPL_ASSET_ID_1",
      "type": "int",
      "index": 15,
      "length": 10
    },
    {
      "name": "TMPL_VALIDATOR_APP_ID",
      "type": "int",
      "index": 74,
      "length": 10
    }
  ],
  "source": "https://github.com/tinymanorg/tinyman-contracts-v1/tree/13acadd1a619d0fcafadd6f6c489a906bf347484/contracts/pool_logicsig.teal.tmpl"
}


function get_program(variables) {
  //Return a byte array to be used in LogicSig.

  let template = definition['bytecode']

  let template_bytes = [..._base64ToArrayBuffer(template)]

  let offset = 0
  let i = 2;
  definition['variables'].forEach(v => {
    let value = variables[i]
    let start = v['index'] - offset
    let value_encoded = encode_varint(value)
    let value_encoded_len = value_encoded.length
    let diff = v['length'] - value_encoded_len
    offset += diff
    template_bytes.splice(start, v['length'], ...value_encoded)
    i--
  })

  return template_bytes
}

function encode_varint(number) {
  let buf = [];
  while (true) {
    let towrite = number & 127
    number >>= 7
    if (number) { buf.push(towrite | 128) }
    else { buf.push(towrite); break }
  }
  console.log(buf)
  return buf
}

function get_pool_logicsig(validator_app_id, asset1_id, asset2_id) {
  let assets = [asset1_id, asset2_id]
  let asset_id_1 = Math.max(...assets)
  let asset_id_2 = Math.min(...assets)
  let program_bytes = get_program([validator_app_id, asset_id_1, asset_id_2])
  console.log(program_bytes)
  return program_bytes;
}


//get_pool_logicsig(350338509,0,31566704)
//end logicsig code

//begin swap code 

const myAlgoWallet = new MyAlgoConnect();

var slippage = 0.05

var lsig = undefined;

var asset_name = ""

var asset_name2 = ""

const TESTNET_VALIDATOR_APP_ID = 62368684
const MAINNET_VALIDATOR_APP_ID = 552635992

const validator_app_id = MAINNET_VALIDATOR_APP_ID;

var liquidity_asset_id = 359370898

var asset_id = window.swapDetails.assetid

var asset_id2 = window.swapDetails.assetid2

var user_address = "C5E5W3BERJALL2ZH4YB3TAP7ZSJH2PJUPDHLGF74YE6DBMQ62AA47IXGNQ"

var pool = window.swapDetails.pool

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
      [toUintArray('swap'), toUintArray('fi')],
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
  let bytecode2 = get_pool_logicsig(validator_app_id, asset_id, asset_id2);
  console.log(bytecode2)
  console.log("Attempting to make logic sig")
  lsig = algosdk.makeLogicSig(bytecode2);
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
          document.getElementById("from-currency").innerText = asset_name
        }
        else {
          asset_name2 = data.asset.params["unit-name"]
          zerosOut = iamount;
          document.getElementById("to-currency").innerText = asset_name2
        }
      })
      .catch(function () {
        console.log("Error occured  " + url2);
      });
  } else {
    if (isInput) {
      asset_name = "Algo";
      zerosIN = 1000000;
      document.getElementById("from-currency").innerText = "Algo"
    }
    else {
      asset_name2 = "Algo";
      zerosOut = 1000000;
      document.getElementById("to-currency").innerText = "Algo"
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
handleChange();

var txid = ""

document.getElementById("slip").onchange = () => handleChange();
document.getElementById("swapbutton").onclick = () => swap();
document.getElementById("from-amount").onkeyup = () => changeAmount();

function changeAmount() {
  amount = parseInt(document.getElementById("from-amount").value * zerosIN);
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
}

function handleChange() {
  document.getElementById("to-amount").value = "";

  let slipPercent = document.getElementById("slip").value / 100

  slippage = slipPercent;

  document.getElementById("slipview").innerText = slipPercent

  if (asset_id === 0) { inputIsAlgo = true }
  else { inputIsAlgo = false }

  getZeros(asset_id, true).then(() => {
    getZeros(asset_id2, false).then(() => {
      getPoolInfo(pool).then(data => {
        document.getElementById("to-amount").value = ((data / zerosOut) * (1 - slippage)).toFixed(2);
      })
    })
  })
}
//end swap code

