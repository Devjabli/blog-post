from django.urls import path
from api.views import getPosts, PostViews


urlpatterns = [
    path('', getPosts),
    path('posts/create/', PostViews.as_view()),
]