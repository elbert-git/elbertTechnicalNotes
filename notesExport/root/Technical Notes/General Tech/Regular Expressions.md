# Regular Expressions
Regular Expressions
-------------------

A tool for finding patterns within a string

##### **What is it used for?**

Used for finding/matching patterns in a string. Most use cases are:

*   finding patterns in a string
*   validating user input

**Basic Usage**
---------------

```text-plain
/someText/
```

The above means find the first match. The you can add additional flags to signify different pattersn

like `/g` to find all matches of inputed text

```text-plain
someText/g
```

**Flags**
---------

How to create complex patterns

| Opearators | explanation | example |
| --- | --- | --- |
| \|  | an ‘or’ operator | /textA\|textB/ |
| ()  | a regex within a regex | /(textA\|TextB) string/ |
| \\  | escape a flag character or signal one | /? to say ? or /d to say digit |
| \\d | digit. use capitals to negate digit | /d/d/d/d |
| \\w | word. use capitals to negate words | /w /w /w |
| \[\] | custom range of characters | \[xyz\] will match x, y and z |
| ^   | negate | ^negate what comes after |

Tools to help with regex
------------------------

[www.regexr.com](https://www.regexr.com)