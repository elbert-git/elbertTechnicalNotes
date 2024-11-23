# Testing in Remix
**Setting up tests**
--------------------

*   Create a test folder
*   click generate tests in the testing panel
*   this should generate some testing boiler plates

**Format of a test file**

```text-plain
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "remix_tests.sol"; // this import is automatically injected by Remix.
import "hardhat/console.sol";
import "remix_accounts.sol";
import "../contracts/{TestedContractType}.sol";  // <-  please import your contracts

contract {TestName} is {TestedContractType} {
	// declare variables to:
	//		- hold the contract instances
	TestedContractType contractInstance;
	// 		- references to test accounts
	address[] addresses = [
        TestsAccounts.getAccount(0),
        TestsAccounts.getAccount(1),
        TestsAccounts.getAccount(2),
        TestsAccounts.getAccount(3),
        TestsAccounts.getAccount(4),
        TestsAccounts.getAccount(5),
        TestsAccounts.getAccount(6)
    ];
	//		- testing variables

	// tests functions here
    function checkWinningProposal () public {
		// test code here
    }
}
```

**Format of a singular test**  
You can just use the format below

```text-plain
/// #value: 2000
/// #sender: account-0 // use test account index 0
function checkSenderAndValue() public payable{
	contractInstance.check{value: 2000}()
}
```

**Set up and Teardowns** 
-------------------------

*   `beforeEach()` - Runs before each test
*   `beforeAll()` - Runs before all tests
*   `afterEach()` - Runs after each test
*   `afterAll()` - Runs after all tests

**Assert Statements**
---------------------

**Assert.ok()**

```text-plain
Assert.ok({booleanStatement},"Should return truthy")
```

**Assert.equal()**

```text-plain
Assert.equal(val1,val2,"Should return truthy if equal")
```

**Assert.notEqual()**

```text-plain
Assert.notEqual(val1,val2,"Should return truthy if not equal")
```

**Assert.greatherThan()**

```text-plain
Assert.greaterThan(val1,val2,"Should return truthy if greather than")
```

**Assert.lesserThan()**

```text-plain
Assert.lesserThan(val1,val2,"Should return truthy if lesser than")
```

**Testing with** `**msg.sender**` **and** `**msg.value**`
---------------------------------------------------------

*   you need to inherit the contract tested
*   create references to test accounts
*   mark the value and address above the function
*   execute contract function with value options sen

```text-plain
// reference to test accounts
address acc0 = TestAccounts.getAccount(0);

/// #value: 2000
/// #sender: account-0 // use test account index 0
function checkSenderAndValue() public payable{
	contractInstance.check{value: 2000}()
}
```