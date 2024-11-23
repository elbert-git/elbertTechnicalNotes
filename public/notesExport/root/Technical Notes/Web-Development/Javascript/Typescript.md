# Typescript
**TypeScript**
--------------

Basically Javascript with types. It's a variant of the language. Removing any unknown variables and only allows them to be of one type

**Why?**

Better intellisense(does a lot of the documentation legwork) and catches dumb bugs more often.

**Installation and setup**
--------------------------

After npm init

```text-plain
npm install typescript // or -g to globally install
```

then creating the config file

```text-plain
tsc --init
```

in the config, most common configs are:

*   rootDir: ./src
*   outDir: ./dist
*   removeComments: true
*   noEmitOnError: true

Then simply type tsc to start watching the src

```text-plain
tsc
tsc --watch //to continuous watch the files
```

**Basics**
----------

Typecasting a variable

```text-plain
let varName:typeName = {value};
let array:Array<typeof> = [a, b, c];
```

Allowing any type

```text-plain
let varName:any = {anyTypeOfValue};
```

You can also infer types

```text-plain
let num = 1; // will automically cast it as number
```

That's pretty much it. It just allows you to strictly typecast variables

**Functions in typescript**
---------------------------

Typecasting return variables

```text-plain
function GetNumber():number{
  // code that will return a number
}

function ThisWillReturnNone():void{
  // code that will not return any value
}
```

Typecasting function arguments

```text-plain
let someFunc = function (i: number): number { return i * i; }
```

**Creating 'interfaces'**
-------------------------

Creates an object with known properties types and slots

```text-plain
interface Person {
  name: string;
  // Optional properties, marked with a "?"
  age?: number;
  // And of course functions
  move(): void;
} 
```

##### Handling Indexable Types

```text-plain
interface StringArray{
	[index:number]: string;
}
```

Handling nulls
--------------

Sometimes you will want typescript to chill and not freak out at a possible null. You can use the `!` operator

```text-plain
const result:SpecificType = FuncThatCanReturnNull()!;
```

you do need to manually check for nulls yourself then

source for more null handling: https://www.technicalfeeder.com/2021/07/efficient-null-handling-in-typescript/

Using Typescript in various libraries
-------------------------------------

*   [React](../Front-end/ReactJS/React%20and%20Typescript.md)