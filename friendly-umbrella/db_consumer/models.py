from django.db import models


class DBPage(models.Model):
    title = models.CharField(max_length=100)
    body = models.TextField()
