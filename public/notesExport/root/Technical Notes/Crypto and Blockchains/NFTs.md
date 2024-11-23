# NFTs
**NFTs in General**
-------------------

An nft is just a token in a contract that abides by the ERC-721 standard or (an accepted alternative). Basically picture a smart contract. that contract has a mapping of tokens to users. when you mint an nft. the smart contract stores your ownership status. It can also have other functionalities like transferring ownerships to others.

Tokens can be associated with:

*   wallet address, to indicate ownership
*   uri(universal resource indicator), to point to other forms of data
*   in general
*   workflow
*   code snippets
*   testing

### Workflow

1.  You start with a base template first
2.  then add in the features one by one.
3.  Then testing each feature

**ERC-721**
-----------

Is a smart contract standardization that generates and store tokens. has functions to for other wallets to manage these tokens.

[**Open Zeppelin ERC-721 doc Link**](https://docs.openzeppelin.com/contracts/2.x/api/token/erc721)

[**ERC-721 official specifications**](https://eips.ethereum.org/EIPS/eip-721)

#### Functions

*   balanceOf(owner)
    *   find out how many tokens a wallet has
*   ownerOf(tokenId)
    *   returns token's owner address
*   safeTransferFrom(from, to, tokenId) \*
*   transferFrom(from, to, tokenId)
*   approve(to, tokenId)
*   getApproved(tokenId)
*   setApprovalForAll(operator, \_approved)
*   isApprovedForAll(owner, operator)
*   safeTransferFrom(from, to, tokenId, data)

#### Events

*   Transfer(from, to, tokenId)
*   Approval(owner, approved, tokenId)
*   ApprovalForAll(owner, operator, approved)

#### URI JSON Metadata Standards

URIs should return Jsons structured as so

```text-plain
{
  "name": ""
  "description": "" 
  "image": ""
}
```

*   json
    *   title: "Object title"
    *   type: object type
    *   properties: traits and other fluff go here

**Creating NFT smart contract**
-------------------------------

#### The open zeppelin Wizard

Simplest way is to use the [open zeppelin wizard](https://docs.openzeppelin.com/contracts/4.x/wizard).

You can customize a boiler plate to create your smart contracts

**Token URIs**
--------------

How to map other data to tokens.

It's just the using the \`\``setTokenURI()`\`\` method in erc-721.

```text-plain
setTokenURI(tokenID, {uri link});
```

you can put this function in the safeMint function to associate the uri during minting.

#### Steps to create URI

1.  upload content to ipfs or internet in general
2.  create metadata json according to opensea and open zepellin standards
3.  upload json to ipfs(use pinata)
4.  mint token and set uri to the link of json ipfs url.

##### metadata example

[sauce](https://docs.opensea.io/docs/metadata-standards)

```text-plain
{
  "description": "Friendly OpenSea Creature that enjoys long swims in the ocean.", 
  "external_url": "https://openseacreatures.io/3", 
  "image": "https://storage.googleapis.com/opensea-prod.appspot.com/puffs/3.png", 
  "name": "Dave Starbelly",
  "attributes": [ ... ], 
}
```

##### Exact URL to mint

when linking the uri in setURI() method. put the full https link found in pinata

```text-plain
setTokenURI({tokenIndex}, "gateway.pinata.cloud/ipfs/QmTHeo5mVRpREWvTAE7oen9oxcrtRLp5iP6iGTa3yCWQiW");
```

*   note that we excluded the https:// header becasue that is set in the contract's base URI variable

**Money Matters**
-----------------

#### Paying to smart contract

to add payment requirements to the different nft functions

*   add payable modifier to function
*   add \`\``require((msg.value >= {priceAmount}), "error message")`\`\`\`

This will make the function require ether to be sent to the smart contract.

#### Withdrawing Ether from smart contract

you can put an operation to send ether automatically on paid function calls.

or create a withdraw() function that requires owner

**ERC-721A**
------------

#### In general

An improved implementation of the ERC-721 standard. Saves gas on minting multiple nfts. Doesn't save gas on an individual nft creation though

##### How is this achieved?

Instead of mapping every token to owner. They assign sequential IDs into owners. Effectively only writing to the mapping once per n number of tokens.

#### Contract Template

```text-plain
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract inverted_mfers is ERC721A, Ownable {
    uint256 MAX_MINTS = 69;
    uint256 MAX_SUPPLY = 10021;
    uint256 public mintRate = 0.0069 ether;

    string public baseURI = "ipfs://{hash}/";

    constructor() ERC721A("CollectionName", "SYMBOL") {}

    function mint(uint256 quantity) external payable {
        // _safeMint's second argument now takes in a quantity, not a tokenId.
        require(quantity + _numberMinted(msg.sender) <= MAX_MINTS, "Exceeded the limit");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Not enough tokens left");
        require(msg.value >= (mintRate * quantity), "Not enough ether sent");
        _safeMint(msg.sender, quantity);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setMintRate(uint256 _mintRate) public onlyOwner {
        mintRate = _mintRate;
    }
}
```

**Adding Reveal Feature**
-------------------------

\===================================================================

Add ipfs hash variables

```text-plain
// uri vars
string private baseURI = "{ipfshash}";
string private hiddenURI ="{ipfshash}";
```

Overrride tokenURI fucntion

```text-plain
function setURI(string memory _uri) external onlyOwner{
  baseURI = _uri;
}
```

**White-listing via merkle trees**
----------------------------------

\===================================================================

source: [https://www.youtube.com/watch?v=67vkL8XkoJ0](https://www.youtube.com/watch?v=67vkL8XkoJ0)  
[https://www.youtube.com/watch?v=YDWYrVtqLRU](https://www.youtube.com/watch?v=YDWYrVtqLRU)  
[https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9](https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9)

#### What is this?

This allows white-listed address to mint. Basically allows you to verify whether or not if an address is in an approved address list

#### Understanding merkle trees

**Understanding Hashing**

Hashing is converting an arbitrary size of text into an array of text of fixed size.

like: `loooooooong text` into `38easdf734osxdf7923`

**Understanding Merkle Trees**

Take a collection of values. Divide into pairs. Then hash it's pair. Repeat this into one final hash value. That's producing a merkle tree. The whole graph of hashes.

**Why is this useful?**

Allows one final has value to verify and an arbitrary number of values. Since the final hash value is dependent on all the values it is derived from.

**Some important terminologies**

*   tree: the whole graph
*   nodes/branch: are the inbetween has values
*   Leaves: are the first set of inputs
*   proof: Idk lel but it's the other argument requiremetn to verify the leaf node in tree.

#### Prep: creating the merkle tree (in JS)

Producing the merkle tree from the inputted list of addresses.

```text-plain
const functions = require("firebase-functions");
const { MerkleTree } = require('merkletreejs');
const fs = require('fs');
const keccak256 = require('keccak256');

class AddressMerkleTree{
  constructor(arrayOfAddress){
    // create tree
    this.leafNodes = arrayOfAddress.map(addr => keccak256(addr));
    this.merkleTree = new MerkleTree(this.leafNodes, keccak256, { sortPairs: true});
  }
   
  // get root hash for contract
  getRootHashForContract(){
    const rootHash = this.merkleTree.getRoot();
    const tree = this.merkleTree.toString();
    const firstLine = tree.split('\n')[0];
    const root = firstLine.split(' ')[1];
    return ('0x'+root)
  }
  getRootHash(){
    return this.merkleTree.getRoot();
  }
   
  getAddressProof(address){
    const hexProof = this.merkleTree.getHexProof(keccak256(address));
    return hexProof;
  }
   
  verify(address){
    const bool = this.merkleTree.verify(this.getAddressProof(address), keccak256(address), this.getRootHash());
    console.log("tree verify: ", bool);
    return bool;
  }
}
```

#### Getting the merkle proof (server side)

This is the code to put on the server side to get the merkle proof. Just make sure to create the tree above this code snippet

```text-plain
const tree = {create tree object};

exports.getProof = functions.https.onRequest((request, response) => {
  const address = request.query.address; 
  response.send(tree.getAddressProof(address));
});
```

#### Adding function to contract

Add merkle proof library

```text-plain
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
```

Add whitelisting vars

```text-plain
bytes32 merkleRoot = {root};
bool whitelistMode = true; 
```

create set merkle root fucntion

```text-plain
function setMerkleTreeRoot(bytes32 _root) public onlyOwner {
  merkleRoot = _root;
}
```

create verify function

```text-plain
// whitelist verify
function verify(bytes32[] memory proof, address senderAddress) internal view returns (bool){
  // create leaf from msg.sender address
  bytes32 leaf = keccak256(abi.encodePacked(senderAddress));                                                        
  //check if node has is in merckle tree
  return MerkleProof.verify(proof, merkleRoot, leaf);
}
```

add verify requirement before minting

```text-plain
if(whitelistMode){require(verify(proof, msg.sender), "not in whitelist");}
```

create set whitelist mode fucntion

```text-plain
function setWhitelistMode(bool _mode) public onlyOwner {
  whitelistMode = _mode;
}
```

#### Changing minting phases

Could be for ending free-mint/whitelist minting phases after a certain number mints happen

Create vars

```text-plain
bool triggerHasFired = false;
uint256 triggerNumber = 1000; // put number to transition here
```

Create Mint trigger

```text-plain
function Trigger() internal {
  if(totalSupply() >= triggerNumber && !triggerHasFired){
  // save trigger fire
  triggerHasFired = true;
  // ... ... trigger code runs below
  }
}
```

**Dev-mint**
------------

\===================================================================

```text-plain
function devMint(uint num) public onlyOwner {
  require(totalSupply() + num <= MAX_SUPPLY, "Not enough tokens left");
  _safeMint(msg.sender, num);
  // Trigger(); // if you have trigger
}
```