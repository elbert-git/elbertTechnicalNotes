# (python) virtualenv
General
-------

The default virtual environment tool for python

Installation
------------

for windows

```text-plain
pip install virtualenv
```

for unix based os

```text-plain
pip install python3-virtualenv

# for python 3
pip3 install python3-virtualenv
```

Usage
-----

Creating an environment

```text-plain
virtualenv {projectName}
```

Activating an environment: go to the directory first

```text-plain
scripts/activate.bat
source/bin/activate
```

```text-plain
scripts/deactivate.bat
source/bin/deactivate
```

listing installed packages

```text-plain
pip list
```

see which env you are in

```text-plain
which pip
```

handling requirements.txt
-------------------------

### Creating requirements.txt

this is creating the package json of sorts

```text-plain
pip freeze --local > requirements.txt
```

### Installing requirements on a new project

```text-plain
pip install -r requirements.txt
```