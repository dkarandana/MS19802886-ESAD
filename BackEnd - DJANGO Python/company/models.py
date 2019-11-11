from django.db import models

# Create your models here.
class CompanyContact(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField()
    telephoneNo = models.IntegerField()
    email = models.EmailField(max_length=255)

    def __str__(self):
        return self.name

