from django.urls import path
from api.views import getPosts, getPost, createPost, getMyPosts, deletePost


urlpatterns = [
    path('', getPosts),
    path('myposts/', getMyPosts),
    path('<int:pk>/', getPost),
    path('<int:pk>/delete/', deletePost),
    path('create/', createPost),
]