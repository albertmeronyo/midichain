web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
abi = JSON.parse('[{"constant":true,"inputs":[{"name":"midi","type":"bytes32"}],"name":"totalUsesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"midiList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"midi","type":"bytes32"}],"name":"useMidi","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"midi","type":"bytes32"}],"name":"validMidi","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"midiVotes","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"midiHashes","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
VotingContract = web3.eth.contract(abi);
// In your nodejs console, execute contractInstance.address to get the address at which the contract is deployed and change the line below to use your deployed address
contractInstance = VotingContract.at('0x30753e4a8aad7f8597332e813735def5dd395028');
midis = {"QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ": "candidate-1", "QmWCbdUtsp2NKtkApCGMLGpTsxYZcCJb7G7Xjv2htBHbmu": "candidate-2"}

function useMidi(midiName) {
  //midiName = $("#midi").val();
  contractInstance.useMidi(midiName, {from: web3.eth.accounts[0]}, function() {
    let div_id = midis[midiName];
    $("#" + div_id).html(contractInstance.totalUsesFor.call(midiName).toString());
  });
}

$(document).ready(function() {
  midiNames = Object.keys(midis);
  for (var i = 0; i < midiNames.length; i++) {
    let name = midiNames[i];
    let val = contractInstance.totalUsesFor.call(name).toString()
    $("#" + midis[name]).html(val);
  }
});
