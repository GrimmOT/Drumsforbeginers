from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import redirect


def main_index(request):
    return redirect("DrumForBeginersApp/")

def index(request):
    context = {
        "title": "Барабаны для всех!",
        "current_page": "index_page"
    }
    return render(request, 'index.html', context)

def all_exercises(request):
    
    context = {
        "title": "Упражнения",
        "current_page": "all_ex",
        
    }
    return render(request, 'all-ex.html', context)

def game_page(request):
    context = {
        "title": "Игра",
        "current_page": "game_page"
    }
    return render(request, "game.html", context)

def exercise_page(request):
    context = {
        "title": "Упражнения",
        "current_page": "exercises_page"
    }
    return render(request, 'exsercise.html', context)

def all_drums(request):
    context = {
        "title": "Все барабаны",
        "current_page": "all_drums"
    }
    return render(request, 'all_drums.html', context)