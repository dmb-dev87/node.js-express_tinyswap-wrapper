const screen2 = '<div class="modal-backdrop fade show"></div><div class="modal-dialog"><div class="modal-content-2"><div class="modal-header"><div class="real-modal-title"><h5 class="modal-title" id="exampleModalLiveLabel"><h5 class="algoswap-btn" href="/" aria-label="AlgoSwap"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="28" class="d-block my-1" viewBox="-3 0 48 21" role="img"><title>AlgoSwap</title><path class="ap-lg" d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path><path class="ap-md" d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path></svg><span class="fs-5"><strong>ALGO</strong>SWAP</span></h5></div><button id="div-close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div  p={0} ><div class="higher-header-container"></div><div class="modal-body" id="sure" p={4} pb={1} mb={3}><h3 id="messagioHeadagio">Confirm Action</h3><p id="messagio">Select wallet, then click "Connect"</p></div><div class="flexy" px={1}><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="dropdown"><select class="form-select form-select-lg" aria-label=".form-select-lg example" id="walletswitch"><option>myAlgoWallet</option><option>WalletConnect</option><option>AlgoSigner</option></select></div><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="div-close-2">Close</button><button onclick="connect()" id="algobutton" type="button" class="btn btn-primary">Connect</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div>'
 document.getElementById("root").innerHTML =
  '<div align="center"><div class="algoswap-box"><button class=" btn btn-primary btn-lg d-inline-flex align-items-center mb-2 link-dark text-decoration-none" id="algoswap-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="setOpen()" href="/" aria-label="Bootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" class="d-block my-1" viewBox="-4 0 48 21" role="img"><title>AlgoSwap</title><path class="ap-lg" d="M185.6,94l-8.8-14.8c0-.1-.1-.1-.2-.2l-.3-.3h0a1.3,1.3,0,0,0-1.7.6s-10.1,19.3-11.2,21.6a.6.6,0,0,0,0,.6,1,1,0,0,0,1,.7h2.5a.9.9,0,0,0,1-.5l7-13.5.2-.2.3-.3a.9.9,0,0,1,1.1.2h.1l4.4,7.4a1.1,1.1,0,0,0,.9.5h2.6a1.6,1.6,0,0,0,1-.5c.3-.4.3-.5.3-.6A2.4,2.4,0,0,0,185.6,94Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path><path class="ap-md" d="M199.2,90.3a6.9,6.9,0,0,0-4.9-2.1h-2.6a2.7,2.7,0,0,1-2.7-2,2.3,2.3,0,0,1,.5-2.1,2.4,2.4,0,0,1,1.9-1h7.1a1.1,1.1,0,0,0,1.1-.6l1-2a1,1,0,0,0-.1-1.2.9.9,0,0,0-1-.7h-9.4a4.6,4.6,0,0,0-3.8,2c-3,3.8-2,7.9.2,10.1a7.1,7.1,0,0,0,4.9,2.1h2.7a2.6,2.6,0,0,1,2.7,2,2.4,2.4,0,0,1-.6,2,2.6,2.6,0,0,1-1.9,1H180.2c-.2.1-.4-.1-.5-.2l-2.6-4.5a1.2,1.2,0,0,0-2.2,0l-3.7,7.4a1.5,1.5,0,0,0,0,1.3,1.1,1.1,0,0,0,1.1.5h23.3a5.8,5.8,0,0,0,3.9-1.9C202.5,96.5,201.4,92.5,199.2,90.3Z" transform="translate(-163.3 -78.6)" fill="currentColor"></path></svg><span class="fs-5"><strong>ALGO</strong>SWAP</span></button>'
  +
  '</div><div id ="firstdiv" style="display: none" class="modal fade">'
  + screen2 +

  '<div id="sendscreen" style="display: none"><div id="tablevis" class="modal-body" style="display: none"><h3 id="messagioHeadagio">Complete Transfer</h3><p id="messagio">Please sign & send transaction</p><div class="bd-callout my-0"><div class="toast-header"><svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#4550e6">  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/><path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></rect></svg><strong class="me-auto">TXN Summary</strong><snoopy-small small><p id="date"></p></small></div><div class="snoopy-box-boxed"><strong>My Address:&nbsp</strong><p id="snoopy"></p></div><div class="snoopy-box-2"><div class="snoops"><div id="inputAmount" style="display:none"></div><h2 id="address"></h2><div id="inputs" align="right"><div class="snoops-2"><label class="form-label">Input Asset ID:</label><input id="input" class="form-control" onchange="handleChange()" value=137594422 type="number"></div><br><div class="snoops-2"><label class="form-label">Output Asset ID:</label><input id="output" class="form-control" value=0 onchange="handleChange()" type="number"></div><br><div class="snoops-2"><label class="form-label">Pool Address:</label><input id="pool" class="form-control" onchange="handleChange()" value="F5YT2BPHPNCLHR44ZKWJOE6Z7RMVAZSX4KIWMEBYSKGBFEF7KJJ742QYT4" type="text"></div><br><div class="snoops-2"><label class="form-label">Amount:</label><input id="amount" class="form-control" type="number" value=1 onchange="changeAmount()" /></div><br><div class="snoops-2"><label class="form-label">Slippage:</label></div><div class="slidecontainer"><div class="slippage-2"><input id="slip" class="slider" type="range" min=1 value=5 max=50 onchange="handleChange()" /><label class="form-label-1" id="slipview">0.05</label></div></div><br><div class="snoops-2"><h6 class="snoopy-6">Total:</h6><p id="snoopy2"></p></div></div></div></div></div><div p="{0}"><div class="higher-header-container"></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><button onclick="swap()" class="w-100 py-2 mb-2 btn btn-primary rounded-4">Send Transaction</button><button type="button" class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4" data-bs-dismiss="modal" id="div-close-3">Cancel</button></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></h3></div><div id="algoflex3" style="display:none" ><div p="{0}"><div class="higher-header-container"></div><div class="modal-body" id="sure" p="{4}" pb="{1}" mb="{3}"><h3 id="messagioHeadagio">Transaction Away!</h3><p id="messagio">Would you like to track your transaction?</p></div><div class="flexy" px="{1}"><div class="algo-flex" align="center"><div id="shhh"><div class="modal-footer"><div class="w-100 alert alert-primary d-flex align-items-center" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#check-circle-fill"/></svg><div class="le-flash" my={3} variant="info"><div class="snoopy-box-4"><p class="text-progress">Check progress on</p><a id="algolink" class="algoexplorer"> AlgoExplorer</a></div></div></div></div><div></div></div></div><div class="modal-footer-cr"><div class="footer-link-ink" >2021 HEADLINE INC.</div><div>Powered by <a class="footer-link" href="https://www.pipeline-ui.com" target="_blank" rel="noopener noreferrer">PIPELINE-UI</a><a class="footer-link-2" href="mailto:contact@headline-inc.com" target="_blank" rel="noopener noreferrer">Contact</a></div></div></div></div></div></div></div ></div></div><div class="footer primary"></div></div></div></div></div></div></div></div></div><svg xmlns="http://www.w3.org/2000/svg" style="display: none;"><symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></symbol><symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></symbol><symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></symbol></svg>';

var indexerURL = "https://algoexplorerapi.io/idx2/v2/accounts/";

if (window.details !== undefined) {
  var index = parseInt(window.details.index);
  var amount = window.details.amount;
  var note = window.details.note;
  var recipient = window.details.recipient;
} else {
  window.details = {
    index: parseInt(137594422),
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

var iamount = 1000000

function getZeros() {
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
        iamount =  parseInt(value);
        if (window.details.input === true) { amount = amount * iamount }
        Object.assign(state, { stateAmount: amount / iamount });
        Object.assign(state, { assetName: data.asset.params["unit-name"] });
        document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

      })
      .catch(function () {
        console.log("Error occured  " + url2);
      });
  } else {
    if (window.details.input === true) { amount = amount * 1000000 }
    Object.assign(state, { stateAmount: amount / 1000000 });
    document.getElementById("snoopy2").innerText = "" + (state.stateAmount) + " " + state.assetName;

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

function close() {
  Object.assign({ isOpen: false });
  document.getElementById("firstdiv").style.display = "none";
  document.getElementById("firstdiv").className = "modal fade";
  document.getElementById("sure").style.display = "block";
  document.getElementById("shhh").style.display = "block";
  document.getElementById("tablevis").style.display = "none";
  document.getElementById("sendscreen").style.display = "none";
}

function connect() {
    document.getElementById("sure").style.display = "none";
    document.getElementById("shhh").style.display = "none";
    document.getElementById("tablevis").style.display = "block";
    document.getElementById("sendscreen").style.display = "block";
    document.getElementById("snoopy").innerText = "" + state.address.slice(0, 20) + "...";
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
document.getElementById("algosend").onclick = send;

if (window.details.input !== false) {
  document.getElementById("inputAmount").innerHTML = '<input id="amountInputter" class="form-control" type="number" value="0"/>'
  document.getElementById("amountInputter").onchange = inputChanged
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

if (window.details.input === true) {document.getElementById ("inputAmount").style.display = "block"}