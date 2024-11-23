# dunder name == main
Dunder name == main
-------------------

So I see this snippet of code a lot

```text-plain
if __name__ == "__main__":
	# code does something
```

The whole point of this is just make the code block run only  if that file is run directly. Like so if you import a module/file that block of code doesnt run. it only runs when you run the file directly as the start of the execution