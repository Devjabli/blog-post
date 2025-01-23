from django.urls import path
from api.views import getPosts, getPost, createPost


urlpatterns = [
    path('', getPosts),
    path('<int:pk>/', getPost),
    path('create/', createPost),
]