from django.db import models

class ExerciseType(models.Model):
    name = models.CharField(max_length=150)
    class Meta:
        verbose_name = ("ExerciseType")
        verbose_name_plural = ("s")

    def __str__(self):
        return self.name

class Difficulty(models.Model):
    name = models.CharField(max_length=150)
    class Meta:
        verbose_name = ("Difficulty")
        verbose_name_plural = ("s")

    def __str__(self):
        return self.name
    
class Exercise(models.Model):
    name = models.CharField(max_length=150)
    photo = models.ImageField()
    notes = models.FileField()
    video = models.URLField()
    ex_type = models.ForeignKey(
        'ExerciseType',
        on_delete=models.CASCADE,
    )
    ex_difficulty = models.ForeignKey(
        'Difficulty',
        on_delete=models.CASCADE,
    )
    class Meta:
        verbose_name = ("Exercise")
        verbose_name_plural = ("s")