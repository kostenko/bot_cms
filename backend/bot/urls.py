import django.urls

from . import views


urlpatterns = [
    django.urls.path('', views.index, name='index'),
    django.urls.path('state', views.state_get, name='state_get'),
]


