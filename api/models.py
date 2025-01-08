from django.db import models
from user.models import User

# Create your models here.

class Posts(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    title = models.TextField(null=True, blank=True)
    subject = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="images/", null=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)
