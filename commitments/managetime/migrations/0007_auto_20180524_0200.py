# Generated by Django 2.0.5 on 2018-05-24 02:00

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('managetime', '0006_auto_20180522_1704'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='last_updated',
        ),
        migrations.AlterField(
            model_name='task',
            name='startdate',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
