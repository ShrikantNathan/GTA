# Generated by Django 4.2.4 on 2023-08-25 05:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('technology', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mainbanner',
            name='subtitle',
            field=models.CharField(max_length=20),
        ),
    ]
