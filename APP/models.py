from django.db import models
from django.contrib.auth.models import User

class Game_data(models.Model):
    class Meta:

        verbose_name = 'game_data'
        verbose_name_plural = 'game_datas'

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    cookie_number = models.FloatField(default=0)
    grandma_number = models.FloatField(default=0)
    factory_number = models.FloatField(default=0)
    click_upgrade_1 = models.BooleanField(default=False)
    click_upgrade_2 = models.BooleanField(default=False)
    click_upgrade_3 = models.BooleanField(default=False)
    click_upgrade_4 = models.BooleanField(default=False)
    exp = models.FloatField(default=0)
    level = models.FloatField(default=1)

    def __str__(self):
        return f"{self.user}, {self.level}"