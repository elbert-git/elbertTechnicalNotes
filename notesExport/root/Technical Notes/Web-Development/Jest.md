# Jest
**Jest**![Testing Framework Logo PNG Vectors Free Download](Jest_jest-logo-F9901EBBF7-seek.jpg)
-----------------------------------------------------------------------------------------------

A javascript testing framework

**Installation and Setup**
--------------------------

Installing the package

```text-plain
npm install jest -save-dev
```

put this script in the package.json

```text-plain
"test":"jest",
```

You can add the flags

*   `--verbose` for more detailed errors
*   `--watchAll` To start a shell process, listening for code changes and running the tests again. 
*   `--coverage` To see how much of the code is covered by jest

**Basic Usage**
---------------

**Creating jest testing files**  
You mark jest testing files with the extension `.test.js`   
You can create as much as you need. 

**Structure of a test file**

```text-plain
describe('{nameOfTestGroup}', () => {
  // define variables here

  beforeEach(() => {
    // code to run before each test 
  });
  
  // use todo to mark wip tests
  it.todo('can pop off'); // use todo to mark wip tests
  
  // test example
  it('{nameOFTest}', () => {
  	//... code to run 
  	
  	
// test by using expect matches
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

});
```

**Matchers**
------------

**Basic**

|     |     |
| --- | --- |
| expect({data}).**toBe**({check Data}) | Check if object matches object |
| expect({data}).**toEqual**({check Data}) | Check if value === value |

`toEqual` is recommended to use most of the time

`not` can also be use for false comparisons

```text-plain
expect({data}).not.toEqual({check Data})
```

More matches to be found [here](https://jestjs.io/docs/using-matchers)

**Setup and Teardown**
----------------------

You can setup  setup and teardown function to run before each test. In case you need to setup stuff or clear data after every test.

```text-plain
describe('{nameOfTestGroup}', () => {
  // define variables here

	beforeEach(() => {
  		//code to run before each test
	});

	
	afterEach(() => {
  		//code to run after each test.
	});

  
  // use todo to mark wip tests
  it.todo('can pop off'); // use todo to mark wip tests
  
  // test example
  it('{nameOFTest}', () => {
  	//... code to run 
  	
  	
// test by using expect matches
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

});
```

**More stuff**
--------------

*   [async tests](https://jestjs.io/docs/asynchronous)
*   [mock functions](https://jestjs.io/docs/mock-functions)