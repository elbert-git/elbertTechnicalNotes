# (python) Conda
In general
----------

A python virtual environment tool preferred in the data science world.

Anaconda and Miniconda
----------------------

there are different flavours of conda. it's a bit more than just a dependency manager. use miniconda for now. 

Installation
------------

go to the website and download

Usage
-----

### Creating an conda environment

```text-plain
conda create -n {envname}
conda create -n {envname} python=3.4 # you can specify a version
```

### Activating and deactivating

```text-plain
conda activate {name}
conda deactivate {name}
```

### Listing dependencies

```text-plain
conda list
```

### Installing dependencies

```text-plain
conda install {packageName}
```

### Exporting requirments

```text-plain
conda env export > environment.yml
```

Environment management
----------------------

The env is not limited to the directory. it's a global state on your  computer in sense

To list the environments

```text-plain
conda env list
```