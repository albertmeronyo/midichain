// ipfs upload

Web3 = require('web3');
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// check accounts
web3.eth.accounts;
code = fs.readFileSync('Midichain.sol').toString();
solc = require('solc');
compiledCode = solc.compile(code);
abiDefinition = JSON.parse(compiledCode.contracts[':Midichain'].interface);
MidiContract = web3.eth.contract(abiDefinition);
byteCode = compiledCode.contracts[':Midichain'].bytecode;
deployedContract = MidiContract.new(['QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ','QmWCbdUtsp2NKtkApCGMLGpTsxYZcCJb7G7Xjv2htBHbmu','QmPXgBFvC7g1osP1VF2kki84FDkeYcrYTGjgVhFXynfTHQ'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000});
deployedContract.address;
contractInstance = MidiContract.at(deployedContract.address);

// check uses of Michelle
contractInstance.totalUsesFor.call('QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ');

// check uses of Smells
contractInstance.totalUsesFor.call('QmWCbdUtsp2NKtkApCGMLGpTsxYZcCJb7G7Xjv2htBHbmu');

// new Midi using Michelle and Smells!
contractInstance.useMidi('QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ', {from: web3.eth.accounts[0], gas: 4700000});
contractInstance.useMidi('QmWCbdUtsp2NKtkApCGMLGpTsxYZcCJb7G7Xjv2htBHbmu', {from: web3.eth.accounts[0], gas: 4700000});

// mashup!!!
contractInstance.mashupMidiWith('QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ', ['QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ', 'QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ'], {from: web3.eth.accounts[0], gas: 4700000});

// get the originals used by this mashedUp
contractInstance.mashedUp.call('QmZbtrMt1yNjb8NPdPh16TLoxSmDpmEbfuJQz6wKC5hzpJ', {from: web3.eth.accounts[0], gas: 4700000});
