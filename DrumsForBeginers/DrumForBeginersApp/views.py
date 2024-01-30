from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    context = {}
    return render(request, 'index.html', context)


def all_exercises(request):
    return HttpResponse("Здесь будет переходная станичка на все упражнения!!!")


def game_page(request):
    return HttpResponse("Здесь будет ИГРА!!!")

def exercise_page(request):
    return HttpResponse("Здесь будут упражнения")