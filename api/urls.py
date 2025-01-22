from django.urls import path
from api.views import getPosts, PostViews


urlpatterns = [
    path('', getPosts),
    path('<int:pk>/', PostViews.as_view()),
    path('posts/create/', PostViews.as_view()),
]