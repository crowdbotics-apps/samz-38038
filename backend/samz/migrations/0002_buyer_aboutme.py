# Generated by Django 2.2.28 on 2022-12-28 23:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('samz', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='buyer',
            name='aboutMe',
            field=models.TextField(blank=True, null=True),
        ),
    ]
