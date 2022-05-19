from django.db import models
# from django.contrib.auth.models import User https://www.geeksforgeeks.org/how-to-use-user-model-in-django/

class MODELNAME(models.Model):

    # TODO: Define fields here

    class Game_data:

        verbose_name = 'game_data'
        verbose_name_plural = 'game_datas'

    user = models.ForeignKey(User, blank=True, null=True)

    def __str__(self):
        pass