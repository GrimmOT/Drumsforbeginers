# Generated by Django 4.2.7 on 2024-04-30 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DrumForBeginersApp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='exercise',
            name='ex_difficulty',
        ),
        migrations.RemoveField(
            model_name='exercise',
            name='photo',
        ),
        migrations.AddField(
            model_name='exercisetype',
            name='photo',
            field=models.ImageField(null=True, upload_to='media'),
        ),
        migrations.AlterField(
            model_name='exercise',
            name='notes',
            field=models.ImageField(null=True, upload_to='media'),
        ),
        migrations.DeleteModel(
            name='Difficulty',
        ),
    ]
