# Generated by Django 5.0 on 2023-12-10 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cartitem',
            name='price',
            field=models.TextField(),
        ),
    ]
