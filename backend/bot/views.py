import django.http

import bot.models
import bot.templates


# Create your views here.
def index(request):
    return django.http.HttpResponse('This is the bot index.')


def state_get(request):
    state = bot.models.State.objects.latest('timestamp')

    return bot.templates.bot_state_get(state)
