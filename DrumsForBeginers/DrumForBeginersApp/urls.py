from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("all-ex/", views.all_exercises, name="all-ex"),
    path("game-page/", views.game_page, name="game-page"),
    path("exercise-page/", views.exercise_page, name="exercise-page"),
    path("all-drums/", views.all_drums, name="all-drums")
]