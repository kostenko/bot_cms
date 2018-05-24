from django.db import models


class State(models.Model):
    answer_text = models.CharField(max_length=200)
    timestamp = models.DateTimeField()


class Transition(models.Model):
    original_state = models.ForeignKey(State, related_name='original_state', on_delete=models.CASCADE)
    target_state = models.ForeignKey(State, related_name='target_state', on_delete=models.CASCADE)
    trigger = models.CharField(max_length=100)
