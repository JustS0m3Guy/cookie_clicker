# Generated by Django 3.2.13 on 2022-05-23 08:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Game_data',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cookie_number', models.BigIntegerField(default=0)),
                ('grandma_number', models.BigIntegerField(default=0)),
                ('factory_number', models.BigIntegerField(default=0)),
                ('click_upgrade_1', models.BooleanField(default=False)),
                ('click_upgrade_2', models.BooleanField(default=False)),
                ('click_upgrade_3', models.BooleanField(default=False)),
                ('click_upgrade_4', models.BooleanField(default=False)),
                ('level', models.BigIntegerField(default=1)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'game_data',
                'verbose_name_plural': 'game_datas',
            },
        ),
    ]
