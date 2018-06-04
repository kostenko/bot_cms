import json

import django.http

import bot.models


def state_get_response(state: bot.models.State):
    state = {
        'text': state.answer_text,
    }

    return django.http.HttpResponse(
        json.dumps(state)
    )
