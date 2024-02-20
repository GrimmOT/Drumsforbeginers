from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect


def main_index(request):
    return redirect("DrumForBeginersApp/")

def index(request):
    context = {
        "title": "Барабаны для всех!"
    }
    return render(request, 'index.html', context)

def all_exercises(request):
    return HttpResponse("Здесь будет переходная станичка на все упражнения!!!")


def game_page(request):
    return HttpResponse("Здесь будет ИГРА!!!")

def exercise_page(request):
    return HttpResponse("Здесь будут упражнения")