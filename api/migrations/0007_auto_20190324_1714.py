# Generated by Django 2.2rc1 on 2019-03-24 17:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20190324_1646'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cursususer',
            name='grade',
            field=models.CharField(max_length=50, null=True),
        ),
    ]
