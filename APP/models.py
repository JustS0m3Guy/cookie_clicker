from django.db import models
from django.conf import settings

class Game_data(models.Model):
    class Meta:

        verbose_name = 'game_data'
        verbose_name_plural = 'game_datas'

    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        to_field='username')
    cookie_number = models.BigIntegerField(default=0)
    grandma_number = models.BigIntegerField(default=0)
    factory_number = models.BigIntegerField(default=0)
    click_upgrade_1 = models.BooleanField(default=False)
    click_upgrade_2 = models.BooleanField(default=False)
    click_upgrade_3 = models.BooleanField(default=False)
    click_upgrade_4 = models.BooleanField(default=False)
    level = models.BigIntegerField(default=1)


    def __str__(self):
        return f"{self.user}, {self.level}"