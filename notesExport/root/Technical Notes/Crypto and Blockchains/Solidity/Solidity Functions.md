# Solidity Functions
**Functions**
-------------

### Basics

```text-plain
    function BasicFunction (string stringArgument){
        // do things
    }

    function BasicPublicFunction (string stringArgument) public {
        // do things
    }
```

### Structure

```text-plain
function FunctionName(datatype varName) [public, pure, view] returns(datatype, datatype) 
```

*   declare the function keyword
*   followed by arguments it requires
*   then public, pure, view permissions
*   then declare the returning data type

### Fucntion permissions

The one that goes in square brackets above. They label and enable what a functionc can do

*   public: accessable to everyone. Inside of contract and outside. **default for functions**
*   private: accessible to be called within contract only. not accessible to children derivative contracts
*   external: accessible to called outside of contract only
*   internal: accessible to be called in contract and it's derivative children contracts
*   view: read only. Doesn't require gas. Can't change state/write variables
*   pure: does not read and write. almost useless
*   Payable: allow to fucntion to receive ether

### Error Handling

##### Revert

```text-plain
if({boolean statement}){
  revert('error message string');
}
```

basically a function that cancels the entire blockchain call while returning a message error

##### Require

```text-plain
require({bool statement}, 'error message string');
```

similar to revert. just more concise

##### Assert

don't bother

### Modifiers

are like attachable operations to functions at the

```text-plain
modifier onlyOwner() {
  require(msg.sender == owner, "not owner"); // throw error if not owner
  _; // <-- function runs here. 
  // code here runs after function.
}
```

then attach to a function like this

```text-plain
function ChangeOwner (address newOwner) public onlyOwner {
  //
}
```

##### Preventing re-occuring function calls

A common use case modifiers.

like preventing double overlapping functions getting called.

```text-plain
modifier preventOverlappingCalls (){
 require(!locked, "Locked");
 locked = true;
 _;
 locked = false;
}
```