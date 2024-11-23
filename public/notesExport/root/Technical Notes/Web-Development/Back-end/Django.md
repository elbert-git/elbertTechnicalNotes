# Django 
Django![Django" Icon - Download for free – Iconduck](Django_django-icon-1606x2048-l.png)
----------------------------------------------------------------------------------------

Python web server framework  that is “Batteries Included”. Meaning that it has a lot of functionalities built in; Like Auth, Databases and Admin dashboard 

Installation
------------

Just install in you environment

```text-plain
pip install django
```

Creating a project
------------------

```text-plain
django-admin startproject {name} 
```

Just add a period in front if you wanna start here

Project Structure
-----------------

The default files are:

| File | Desc |
| --- | --- |
| init | entry point |
| asgi and wsgi | deployment stuff |
| urls | routes and endpoints |
| settings | config |

### manage.py

This helps manage the project like managing sub apps and  running dev servers

Sub-Apps
--------

These are like your module of the applications. They are a big part of how django works

### Default sub-apps

| Default Sub Apps | Descriptions |
| --- | --- |
| admin | Admin dashboard |
| app | config |
| tests | unit tests |
| views | endpoints |

\- admin: where you define admin dashboard  
\- apps: config  
\- tests: unit tests  
\- views: handling endpoint requests  

### Creating A Sub-App

```text-plain
python manage.py startapp {name}
```

### Using sub-apps

In the root project's `settings.py`, Add your app in the install apps

```text-plain
INSTALLED_APPS = [
	...
	'appName'
]
```