# (python) poetry environment
General
-------

A more elegant package manager

Installation
------------

for windows

```text-plain
pip install poetry
```

### Important config

```text-plain
poetry config virtualenvs.in-project true
```

this just sets the option to install the stuff in the project

Usage
-----

### Creating an environment

```text-plain
poetry init
```

this will create .toml file which is the package.json

### Installing requirements

```text-plain
poetry install
```

### Activating the env

do not to run the same env actiavation script like in [virtual env]((python)%20virtualenv.md)

```text-plain
poetry shell
```

this will start a shell in the poetry env.  Now you can run scripts locally in this directory and environment. 

```text-plain
# deactivate
```

this will exit the shell and deactivate the shell