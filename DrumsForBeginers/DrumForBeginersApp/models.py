from django.db import models

class ExerciseType(models.Model):
    name = models.CharField(max_length=150)
    subtitle = models.CharField(max_length=150, default="")
    photo = models.ImageField(upload_to="media", null=True)
    class Meta:
        verbose_name = ("ExerciseType")
    def __str__(self):
        return self.name

    
class Exercise(models.Model):
    name = models.CharField(max_length=150)
    notes = models.ImageField(upload_to="media", null=True)
    video = models.URLField()
    ex_type = models.ForeignKey(
        'ExerciseType',
        on_delete=models.CASCADE
    )
    class Meta:
        verbose_name = ("Exercise")
