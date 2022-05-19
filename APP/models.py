from django.db import models

class MODELNAME(models.Model):

    # TODO: Define fields here

    class User:

        verbose_name = 'user'
        verbose_name_plural = 'users'

    user_name = models.CharField(max_length=255)

    def __str__(self):
        pass