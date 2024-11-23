# Solidity Variables
**Solidity Variables**
----------------------

**Variable visibility/scoping**

```text-plain
pragma solidity ^0.8.4;

contract BasicContract{
  address public owner;
  function SetOwner(address newOwner) public {
    owner = newOwner;
  }
}
```

by default variables and functions are private. used only in the class privately. but you can expose them by the **public** keyword.

### **Ints**

**unsigned vs normal integers**

normal integers are normal. unsigned just mean they can't be negative. it is an always positive number.

```text-plain
uint alwaysPositive = 22254;
int canBeNegative = -902314;
```

**integer bits**

you can also set how many bits to hold the integer. This is most likely a cost saving measure.

by default it ints and uints are 256 bits

```text-plain
int8
int16
.
.
.
int256

uint8
uint16
.
.
.
uint256
```

### **Strings**

just a normal string.

```text-plain
string basicString = "hello world";
```

### **Addresses**

every ethereum wallet and smart contract has an address.

an address is just a hyperlink/reference to a wallet or smart contract in the blockchain

```text-plain
address smartContractOwner = 0xpowie0923sdfg23;
```

### **Arrays**

like c# arrays. just an array that can dynamically resize. but accepts one type of object

```text-plain
int[] numberArray = [1,2,3]
```

### **Mapping**

basically python dictionaries but weirder

```text-plain
mapping(address => uint) dictionaryOfBalances;
dictionaryOfBalances[johnAccount] = 222;
```

This dict doesn't only hold strings as keys. it can by any data type. just denote what is the key value data types to create a dictionary.

then use it like a python dictionary

### **Structs**

basically javascript objects

Though most likely not, it's a python dictionary of sorts.

```text-plain
struct Person {
        string name = "hello";
        string favouritWoreds[] = ["Fungi", "Moist"];
    }
```

### **Events**

```text-plain
event LogDepositMade(address accountAddress, uint amount);
```

Make logs that other programs can listen for.

### **Memory Vs Storage**

You can mark a variable as memory or storage. whether it only exists in the run time of the function or persists throughout the life time of the contract.

This helps you save on gas fees by denoting what to save and what to keep.

```text-plain
string memory tempString public = "temp";
string storage permanentString public = "permanent";
```

### **MSG object**

This is is how you identify who is interacting with the smart contract.

at the start it will always be the deployer.

but other people can also interact with this contract. so when they call the fucntion. the msg object will be associated with them.

```text-plain
address currentUser = msg.sender;
```