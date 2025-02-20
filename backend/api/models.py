from django.db import models
import os
def path_and_rename(path):
    def wrapper(instance, filename):
        ext = filename.split('.')[-1]
        # get filename
        filename = '{}.{}'.format(instance.name, ext)
        # return the whole path to the file
        return os.path.join(path, filename)
    return wrapper


class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to=path_and_rename("media/categories"), blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to=path_and_rename("media/products"), blank=True)
    old_price = models.FloatField(blank=True)
    price = models.FloatField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="products")
    created = models.DateField(auto_now_add=True)
    last_edited = models.DateField(auto_now=True)

    def __str__(self):
        return self.name

class Ad(models.Model):
    name = models.CharField(max_length=100, blank=True)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to=path_and_rename("media/ads"), blank=True)
    category = models.ManyToManyField(Category, related_name="ads")
    created = models.DateField(auto_now_add=True)
    keep_until = models.DateTimeField(blank=True)

    def __str__(self):
        return self.name