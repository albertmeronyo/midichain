pragma solidity ^0.4.18;

contract Midichain {

  mapping (bytes32 => uint8) public midiVotes;
  bytes32[] public midiList;
  mapping (bytes32 => bytes32[]) public mashedUpFrom;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of candidates who will be contesting in the election
  */
  function Midichain(bytes32[] midiHashes) public {
    midiList = midiHashes;
  }

  // This function returns the total votes a candidate has received so far
  function totalUsesFor(bytes32 midi) view public returns (uint8) {
    require(validMidi(midi));
    return midiVotes[midi];
  }

  // This function increments the vote count for the specified candidate. This
  // is equivalent to casting a vote
  function useMidi(bytes32 midi) public {
    require(validMidi(midi));
    midiVotes[midi] += 1;
  }

  function mashupMidiWith(bytes32 mashup, bytes32[] sources) public {
    require(validMidi(midi));
    require(validMidi[sources[0]]);
    require(validMidi[sources[1]]);
    midiVotes[sources[0]] += 1;
    midiVotes[sources[1]] += 1;
    mashedUpFrom[midi] = sources;
  }

  function validMidi(bytes32 midi) view public returns (bool) {
    for(uint i = 0; i < midiList.length; i++) {
      if (midiList[i] == midi) {
        return true;
      }
    }
    return false;
  }
}
