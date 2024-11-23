# Node FS
Node FS
-------

Node's way of interactive with the file system. 

Reading Files
-------------

asynchronous

```text-plain
fs.readFile( dataPath, options, callbackFunc );
```

the options are usually just `utf-8`

synchronous

```text-plain
fs.readFileSync( dataPath, options);
```

Writing Files
-------------

asynchronous

```text-plain
fs.writeFile( dataPath, data, options, callbackFunc );
```

the options are usually just `utf-8`

synchronous

```text-plain
fs.writeFileSync( dataPath, data, options);
```