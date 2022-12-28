# Generated by Django 2.2.28 on 2022-12-28 15:34

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
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('startDateTime', models.DateTimeField()),
                ('endDateTime', models.DateTimeField()),
                ('price', models.FloatField(blank=True, null=True)),
                ('artist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_artist', to=settings.AUTH_USER_MODEL)),
                ('buyer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='event_buyer', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Buyer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('billingHistory', models.TextField(blank=True, null=True)),
                ('reviewHistory', models.TextField(blank=True, null=True)),
                ('userProfile', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='buyer_userProfile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Artist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('billingHistory', models.TextField()),
                ('reviewHistory', models.TextField()),
                ('portfolioVideoClip', models.BinaryField()),
                ('skillLevel', models.IntegerField()),
                ('status', models.IntegerField()),
                ('defaultPrice', models.BigIntegerField()),
                ('dateTimeConstraints', models.BigIntegerField()),
                ('userProfile', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='artist_userProfile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]