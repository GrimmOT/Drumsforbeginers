# Generated by Django 4.2.7 on 2024-05-07 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DrumForBeginersApp', '0002_remove_exercise_ex_difficulty_remove_exercise_photo_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='exercise',
            options={'verbose_name': 'Exercise'},
        ),
        migrations.AlterModelOptions(
            name='exercisetype',
            options={'verbose_name': 'ExerciseType'},
        ),
        migrations.AddField(
            model_name='exercisetype',
            name='subtitle',
            field=models.CharField(default='', max_length=150),
        ),
    ]
