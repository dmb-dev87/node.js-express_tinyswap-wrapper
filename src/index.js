import 'regenerator-runtime/runtime'
import algosdk from 'algosdk';
import MyAlgoConnect from '@randlabs/myalgo-connect';


const screen2 = '<div class="modal-backdrop fade show"></div><div class="modal-dialog"><div class="modal-content-2"><div class="modal-header"><div class="real-modal-title"><h5 class="modal-title" id="exampleModalLiveLabel"><h5 class="algoswap-btn" href="/" aria-label="AlgoSwap"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="28" class="d-block my-1" viewBox="-3 0 48 21" role="img"><title>AlgoSwap</title><path class="ap-lg" d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path><path class="ap-md" d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path></svg><span class="fs-5"><strong>ALGO</strong>SWAP</span></h5></div><button id="div-close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div  p={0} ><div class="higher-header-container"></div><div class="modal-body" id="sure" p={4} pb={1} mb={3}><h3 id="messagioHeadagio">Confirm Action</h3><p id="messagio">Select wallet, then click "Connect"</p></div><div class="flexy" px={1}><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="dropdown"><select class="form-select form-select-lg" aria-label=".form-select-lg example" id="walletswitch"><option>myAlgoWallet</option><option disabled>WalletConnect</option><option disabled>AlgoSigner</option></select></div><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="div-close-2">Close</button><button onclick="connect()" id="algobutton" type="button" class="btn btn-primary">Connect</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div>'
 document.getElementById("swap-root").innerHTML =
  '<div align="center"><div class="algoswap-box"><button class=" btn btn-primary btn-lg d-inline-flex align-items-center mb-2 link-dark text-decoration-none" id="algoswap-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpen()" href="/" aria-label="Bootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" class="d-block my-1" viewBox="-4 0 48 21" role="img"><title>AlgoSwap</title><path class="ap-lg" d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path><path class="ap-md" d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path></svg><span class="fs-5"><strong>ALGO</strong>SWAP</span></button>'
  +
  '</div><div id ="firstdiv" style="display: none" class="modal fade">'
  + screen2 +

  '<div id="sendscreen" style="display: none"><div id="tablevis" class="modal-body" style="display: none"><h3 id="messagioHeadagio">Complete Swap</h3><p id="messagio">Please sign & send swap transactions</p><div class="bd-callout my-0"><div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#4550e6">  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></rect></svg><strong class="me-auto">TXN Summary</strong><snoopy-small small><p id="date"></p></small></div><div class="snoopy-box-boxed"><strong>My Address:&nbsp</strong><p id="snoopy"></p></div><div class="snoopy-box-2"><div class="snoops"><div id="inputAmount" style="display:none"></div><div id="inputs" align="right"><div class="snoops-2"><label class="form-label">Input Asset ID:</label><p id="input-readonly">0</p></div><div class="snoops-2"><label class="form-label">Output Asset ID:</label><p id="output-readonly">0</p></div><div class="snoops-2"><label class="form-label">Amount:</label><input id="amount" class="form-control" type="number" value=1 /></div><br><div class="snoops-2"><label class="form-label">Slippage:</label></div><div class="slidecontainer"><div class="slippage-2"><input id="slip" class="slider" type="range" min=1 value=5 max=50 /><label class="form-label-1" id="slipview">0.05</label></div></div><br><div class="snoops-2"><h6 class="snoopy-6">Quote:</h6><p id="quote"></p></div></div></div></div></div><div p="{0}"><div class="higher-header-container"></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><button id="swapbutton" class="w-100 py-2 mb-2 btn btn-primary rounded-4">Send Swap</button><button type="button" class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" data-bs-dismiss="modal" id="div-close-3">Cancel</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></h3></div><div id="algoflex3" style="display:none" ><div p="{0}"><div class="higher-header-container"></div><div class="modal-body" id="sure" p="{4}" pb="{1}" mb="{3}"><h3 id="messagioHeadagio">Transaction Away!</h3><p id="messagio">Would you like to track your swap transactions?</p></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="w-100 alert alert-primary d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div class="le-flash" my={3} variant="info"><div class="snoopy-box-4"><p class="text-progress">Check progress on</p><a id="algolink" class="algoexplorer"> AlgoExplorer</a></div></div></div></div><div></div></div></div><p>To redeem excess amounts, visit <a href="https://app.tinyman.org/#/redeem-excess-amounts">Tinyman</a></p><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div ></div></div><div class="footer primary"></div></div></div></div></div></div></div></div></div><svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></symbol></svg>';

var indexerURL = "https://algoexplorerapi.io/idx2/v2/accounts/";

/* if (window.details !== undefined) {
  var index = parseInt(window.details.index);
  var amount = window.details.amount;
  var note = window.details.note;
  var recipient = window.details.recipient;
} else {
  window.details = {
    index: parseInt(31566704),
    amount: 0,
    note: "",
    recipient: "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4",
    input: true
  }
  var amount = window.details.amount;
  var index = window.details.index;
  var note = window.details.note;
  var recipient = "K3NSXYMHPRCK7PMYT3QUQXUGPZJ4MKWJXW2HJRYPVMQUMKJAOJEIEO4HK4"; // Default address is set to HDL seed address. Please update recipient to your address before deploying.//
}

*/

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

/*if (window.details.input !== false) {
  document.getElementById("inputAmount").innerHTML = '<input id="amountInputter" class="form-control" type="number" value="0"/>'
  document.getElementById("amountInputter").onchange = inputChanged
}*/

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

//if (window.details.input === true) {document.getElementById ("inputAmount").style.display = "block"}

//begin logicsig code

const definition = {
  "bytecode": 'BCAIAQCBgICAgICAgPABAwSAgICAgICAgPABBQYhBSQNRDEJMgMSRDEVMgMSRDEgMgMSRDIEIg1EMwEAMQASRDMBECEHEkQzARiBgoCAgICAgIDwARJEMwEZIhIzARslEhA3ARoAgAlib290c3RyYXASEEAAXDMBGSMSRDMBG4ECEjcBGgCABHN3YXASEEACEzMBGyISRDcBGgCABG1pbnQSQAE5NwEaAIAEYnVybhJAAYM3ARoAgAZyZWRlZW0SQAIzNwEaAIAEZmVlcxJAAlAAIQYhBCQjEk0yBBJENwEaARchBRI3ARoCFyQSEEQzAgAxABJEMwIQJRJEMwIhIxJEMwIiIxwSRDMCIyEHEkQzAiQjEkQzAiWAB1RNMVBPT0wSRDMCJlEADYANVGlueW1hbiBQb29sIBJEMwIngBNodHRwczovL3RpbnltYW4ub3JnEkQzAikyAxJEMwIqMgMSRDMCKzIDEkQzAiwyAxJEMwMAMQASRDMDECEEEkQzAxEhBRJEMwMUMQASRDMDEiMSRCQjE0AAEDMBATMCAQgzAwEINQFCAYkzBAAxABJEMwQQIQQSRDMEESQSRDMEFDEAEkQzBBIjEkQzAQEzAgEIMwMBCDMEAQg1AUIBVDIEIQYSRDcBHAExABNENwEcATMEFBJEMwIAMQATRDMCFDEAEkQzAwAzAgASRDMDFDMDBzMDECISTTEAEkQzBAAxABJEMwQUMwIAEkQzAQEzBAEINQFCAPwyBCEGEkQ3ARwBMQATRDcBHAEzAhQSRDMDFDMDBzMDECISTTcBHAESRDMCADEAEkQzAhQzBAASRDMDADEAEkQzAxQzAwczAxAiEk0zBAASRDMEADEAE0QzBBQxABJEMwEBMwIBCDMDAQg1AUIAjjIEIQQSRDcBHAExABNEMwIANwEcARJEMwIAMQATRDMDADEAEkQzAhQzAgczAhAiEk0xABJEMwMUMwMHMwMQIhJNMwIAEkQzAQEzAwEINQFCADwyBCUSRDcBHAExABNEMwIUMwIHMwIQIhJNNwEcARJEMwEBMwIBCDUBQgARMgQlEkQzAQEzAgEINQFCAAAzAAAxABNEMwAHMQASRDMACDQBD0M=',
  "address": "5MKWI634X65LPTLRYB6PP4IVMTV75UKTYID2BQ5ATCVKXUW5XYGTMU7BSI",
  "size": 839,
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
      "index": 17,
      "length": 10
    },
    {
      "name": "TMPL_VALIDATOR_APP_ID",
      "type": "int",
      "index": 75,
      "length": 10
    }
  ],
  "source": "https://github.com/tinymanorg/tinyman-contracts-v1/tree/6e150df8e3e74458f947f3399c6f37e7d4289d21/contracts/pool_logicsig.teal.tmpl"
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

/*window.swapDetails = {assetid: 137594422,
assetid2: 0,
pool: "F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4"
}*/

var slippage = 0.05

var lsig = undefined;

var asset_name = ""

var asset_name2 = ""

const TESTNET_VALIDATOR_APP_ID = 21580889
const MAINNET_VALIDATOR_APP_ID = 350338509

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
    let bytecode2 = get_pool_logicsig(350338509, asset_id, asset_id2);
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
                    let asaname = (asset_id === 0)?"":asset_id;
                    document.getElementById ("input-readonly").innerText =  asset_name + " - " + asaname
                }
                else {
                    asset_name2 = data.asset.params["unit-name"]
                    zerosOut = iamount;
                    let asaname = (asset_id2 === 0)?"":asset_id2;
                    document.getElementById ("output-readonly").innerText = asset_name2 + " - " + asaname
                }
            })
            .catch(function () {
                console.log("Error occured  " + url2);
            });
    } else {
        if (isInput) {
            asset_name = "Algo";
            zerosIN = 1000000;
            let asaname = (asset_id === 0)?"":asset_id;
            document.getElementById ("input-readonly").innerText = asaname + " " + "Algo"
        }
        else {
            asset_name2 = "Algo";
            zerosOut = 1000000;
            let asaname = (asset_id2 === 0)?"":asset_id2;
            document.getElementById ("output-readonly").innerText = asaname + " " + "Algo"
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

document.getElementById("slip").onchange = () => handleChange();
document.getElementById("swapbutton").onclick = () => swap();

document.getElementById("amount").onchange = () => changeAmount();
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
    document.getElementById("quote").innerText = "";
    //asset_id = parseInt(document.getElementById("input").value);

    //asset_id2 = parseInt(document.getElementById("output").value);

    //pool = document.getElementById("pool").value;

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

//document.getElementById ("pool-readonly").innerText = pool
//end swap code

