from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class SubCategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')
    label = models.CharField(max_length=255)
    input_type = models.CharField(max_length=255)
    placeholder = models.CharField(max_length=255)

    def __str__(self):
        return self.label
