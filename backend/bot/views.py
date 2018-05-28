from django.shortcuts import render
import django.http


# Create your views here.
def index(request):
    return django.http.HttpResponse('This is the bot index.')


# def state_get()
