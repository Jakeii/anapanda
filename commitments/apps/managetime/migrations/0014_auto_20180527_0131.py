# Generated by Django 2.0.5 on 2018-05-27 01:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('managetime', '0013_auto_20180527_0123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='kummitment',
            name='achievable',
            field=models.BooleanField(default=1),
        ),
        migrations.AlterField(
            model_name='kummitment',
            name='measurable',
            field=models.BooleanField(default=1),
        ),
        migrations.AlterField(
            model_name='kummitment',
            name='needhelp',
            field=models.BooleanField(default=1),
        ),
        migrations.AlterField(
            model_name='kummitment',
            name='relevant',
            field=models.BooleanField(default=1),
        ),
        migrations.AlterField(
            model_name='kummitment',
            name='specific',
            field=models.BooleanField(default=1),
        ),
        migrations.AlterField(
            model_name='kummitment',
            name='timebound',
            field=models.BooleanField(default=1),
        ),
    ]