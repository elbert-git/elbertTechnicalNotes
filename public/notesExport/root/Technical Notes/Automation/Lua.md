#  Lua
**Basic**
---------

**Commenting**![Lua (programming language) - Wikipedia](Lua_image.png)

Add a double dash

```text-plain
-- comments go like this
```

For multi-lines, add the double brackets and close them with the same

```text-plain
--[[
	this is a multi
	line comment
]]--
```

**Printing to console**

```text-plain
print({stuff to print})
```

**Variables** 
--------------

Just define them like python

```text-plain
varName = value
```

Nil is null

```text-plain
nullValue = nil
```

**Strings**

String concatenation uses `..`

```text-plain
"string combines" .. "with this string"
```

**Data types**

*   nil
*   boolean
*   number: floating point numbers
*   string
*   function
*   userdata: arbitrary C data
*   thread: coroutines
*   table: a dictionary basically (I think)

**Getting Data-type**

```text-plain
 type(var) -- will return type as string;
```

**Scoping**

Variables are global by default. use `local` to scope them as private.

```text-plain
local varName = val;
```

**Control Flow**
----------------

**While loop**

```text-plain
while {truthy bool} do
  -- code here
end
```

**If statements**

Basic if statement

```text-plain
if {bool} then
	-- code
end
```

You can do them in one line as well

```text-plain
if {boo} then --code end
```

**else and else if**

```text-plain
if {bool} then
	--code
elseif {bool} then
	--code
else
	--code
end
```

**Functions**
-------------

**Basic functions**

```text-plain
function add(arg1,arg2)
	return arg1+arg2
end
```

They can be the same line as well

**Functions can be variables**

```text-plain
someFunc = function(arg1) return arg1^2 end
someFunc(2)
```

**Tables**
----------

Just like JS objects and python dictionaries…. and more. Basically it's an array where the value's keys can be anything. Numbers, strings.

```text-plain
tableExample = {['someKey'] = 'someString', [23] = someValue, [6.28] = 'tau'}
```

**Iterating over tables**

```text-plain
for key, val in pairs({someTable}) do  -- Table iteration.
  print(key, val)
end
```

**Tables as arrays**

```text-plain
v = {'value1', 'value2', 1.21, 'gigawatts'}
for i = 1, #v do  -- #v is the size of v for lists.
  print(v[i])  -- Indices start at 1 !! SO CRAZY!
end
```

Bruh indices start at one.

##### Pushing/Adding to Tables

```text-plain
table.insert(${item})
```

**Metatables and Metamethods**
------------------------------

**(overriding lua syntax)**

Bruv… this is complicated. To put simply, **it's extend a table's functionality by overriding lua's syntax**. For example if you have a table representing a vector2. You can't add/sub/print them easily. They are just an array of numbers.  But you can set a metatable and override lua's syntax in context of using the table. So you can do `vectorA + vectorB` operations.

Creating a metatable and it's metafunctions

```text-plain
-- create table with data
f1 = {a = 1, b = 2}  -- Represents the fraction a/b.



-- create metatable for fraction and overried add operation
metafraction = {}
function metafraction.__add(f1, f2)
  sum = {}
  sum.b = f1.b * f2.b
  sum.a = f1.a * f2.b + f2.a * f1.b
  return sum
end

-- set metatable for each fraction
setmetatable(f1, metafraction);
```

**List of over-writable methods**

```text-plain
-- Full list. Here a is a table with the metamethod.

-- __add(a, b)                     for a + b
-- __sub(a, b)                     for a - b
-- __mul(a, b)                     for a * b
-- __div(a, b)                     for a / b
-- __mod(a, b)                     for a % b
-- __pow(a, b)                     for a ^ b
-- __unm(a)                        for -a
-- __concat(a, b)                  for a .. b
-- __len(a)                        for #a
-- __eq(a, b)                      for a == b
-- __lt(a, b)                      for a < b
-- __le(a, b)                      for a <= b
-- __index(a, b)  <fn or a table>  for a.b
-- __newindex(a, b, c)             for a.b = c
-- __call(a, ...)                  for a(...)        
```

**Class-like Tables and inheritance** 
--------------------------------------

There are not classes… just tables. It's all tables. But you can make them behave like classes

**Creating a class**

It's just creating a function that returns a table

```text-plain
local function Person(_name, _age)
	local t = {
		name = _name,
		age = _age
		work = function(self)  -- need self to refer to this object
			print(self.name -- " is working")
		end
	}
	
	return t
end
```

**Creating a class instance**

```text-plain
-- creating a new person instance
johnPerson = Person("John", 23)
```

**Accessing properties and methods**

```text-plain
class:methodName()
class:propertyName
```

Inheritance

**Modules**
-----------

**Importing**

Allowing lua to import other lua files

```text-plain
local module = require('path/to/module');
```

Above will work as `require` like in javascript

**Running a file**

Just running the file without importing

```text-plain
dofile('mod.lua') 
```

**Evaluating a string**

```text-plain
string = load('string code')
string()
```

**Routines (threads)**
----------------------

It's a single thread that allows you to stop a program in its tracks and allow other programs to run.  
To put it simply it's a async function that you have to manually call resume and pause.  

**Creating a routine**

```text-plain
co = coroutine.create(function ()
	for i=1,10 do
		kprint("co", i)
		coroutine.yield()
	end
end)
```

**Running a routine**

```text-plain
coroutine.resume(co)
```

**Pausing a routine**

Call this line in the routine.

```text-plain
coroutine.yield()
```

**Resuming a routine**

Same as starting it

```text-plain
coroutine.resume(co)
```