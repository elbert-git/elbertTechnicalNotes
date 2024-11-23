# (todo)Django Databases
Django Databases
----------------

Django uses sql databases. using sql3 by default. But you can change which sql database you need. 

Creating Schemas
----------------

In your sub-app's `models.py`, Create your schemas.

```text-plain
from django.db import models

# Create a database table
class Todo(models.Model):

  # create fields
  created_at = models.DateTimeField(auto_now_add=True)  
  text = models.CharField(max_length=250)
  checked = models.BooleanField()


  # this is just the label of your item when logging in
  def __str__(self):
    return self.text
```

### Migrations

When you're done you can need to stage and apply the migrations

```text-plain
python manage.py makemigrations {subAppName}
python manage.py migrate
```

(todo)Crud-ing
--------------

This is how you 

### Creating Entries

### Reading Entries

### Updating Entries

### Deleting Entries

source
------

[https://www.youtube.com/watch?v=UxTwFMZ4r5k](https://www.youtube.com/watch?v=UxTwFMZ4r5k)