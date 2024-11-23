# Python Exception handling
This is kinda like an if-else but branch based on errors

Try-Except
----------

This is how you handle errors in python

```text-plain
try: 
	 # code that could fail here
except: 
	# code that will execute if something goes wrong
```

Printing the error
------------------

```text-plain
try: 
	 # code that could fail here
except Exception as e: 
	print(e)
```

Handling Specific Errors
------------------------

you can catch specific errors too. just put specific errors up the chain and the general errors below

```text-plain
try: 
	 # code that could fail here
except FileNotFoundError as e: 
	print(e)
except Exception as e: 
	print(e)
```

Else
----

This runs if there is no exception

```text-plain
try: 
	 # code that could fail here
except FileNotFoundError as e: 
	print(e)
else: 
	# this code runs if there are not exceptions
```

Finally 
--------

This runs no matter what. 

```text-plain
try: 
	 # code that could fail here
except FileNotFoundError as e: 
	print(e)
else: 
	# this code runs if there are not exceptions
finally: 
	# this runs no matter what
```

Raising Errors manually
-----------------------

Sometimes you want to raise an error manually, something python doesnt catch by itself

```text-plain
raise Exception # general exception error
raise FileNotFoundError # raising a specific error 
```

You can also create your own errors

```text-plain
class ValidationError(Exception):
    def __init__(self, message, errors):            
        # Call the base class constructor with the parameters it needs
        super().__init__(message)
            
        # Now for your custom code...
        self.errors = errors
```