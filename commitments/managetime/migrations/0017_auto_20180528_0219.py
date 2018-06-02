# Generated by Django 2.0.5 on 2018-05-28 02:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('managetime', '0016_role_reports'),
    ]

    operations = [
        migrations.RenameField(
            model_name='kummitment',
            old_name='workday',
            new_name='dayscheduled',
        ),
        migrations.RenameField(
            model_name='kummitment',
            old_name='workweek',
            new_name='weekscheduled',
        ),
        migrations.RemoveField(
            model_name='kummitment',
            name='worktime',
        ),
        migrations.AlterField(
            model_name='kummitment',
            name='timescheduled',
            field=models.TimeField(blank=True, null=True),
        ),
    ]