# Solidity
**In General**
--------------

It's a high level language to code smart contracts on the ethereum blockchain. Not only for Ethereum but most commonly associated with it.

**Smart Contracts**

think of them as a public public javascript object in the blockchain(or the cloud). they have properties and functions that users can call

**Basic Structure**
-------------------

```text-plain
pragma solidity ^0.8.4;

contract BasicContract{
  address owner;

  constructor(){
    owner = msg.sender;
  }
  
  function someFunc() public returns (bool){
  	// function code
  }
}
```

*   **Version number**: every solidity file needs a version number to tell what compiler to use
*   **contract object:** the contract itself. behaves like a public and cloud javascript object
*   **constructor**: a fucntion that is called at the the deployment of the contract. and only then. effectively a fucntion that runs on start();
*   **contract functions:** To allow other people to call or to call these internally

**Topics**
----------

*   [Variables](Solidity/Solidity%20Variables.md)
*   [Functions](Solidity/Solidity%20Functions.md)
*   [Events](Solidity/Solidity%20Events.md)
*   [Time](Solidity/Solidity%20Time.md)
*   [Testing](RemixIDE/Testing%20in%20Remix.md)
*   [NFT Development](NFTs.md)