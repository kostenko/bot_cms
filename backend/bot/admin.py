from django.contrib import admin
import bot.models as models


# Register your models here.
admin.site.register(models.State)
admin.site.register(models.Transition)
