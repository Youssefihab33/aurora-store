from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="data/media/images/categories", blank=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="data/media/images/products", blank=True)
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
    image = models.ImageField(upload_to="data/media/images/ads", blank=True)
    category = models.ManyToManyField(Category, related_name="ads")
    created = models.DateField(auto_now_add=True)
    keep_until = models.DateTimeField(blank=True)

    def __str__(self):
        return self.name