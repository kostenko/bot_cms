import json

import django.http

import bot.models


def bot_state_get(state: bot.models.State):
    state = {
        'text': state.answer_text,
    }

    return django.http.HttpResponse(
        json.dumps(state)
    )
