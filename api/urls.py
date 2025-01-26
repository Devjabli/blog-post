from django.urls import path
from api.views import getPosts, getPost, createPost, getMyPosts, deletePost, updatePost


urlpatterns = [
    path('', getPosts),
    path('myposts/', getMyPosts),
    path('<int:pk>/', getPost),
    path('<int:pk>/delete/', deletePost),
    path('<int:pk>/update/', updatePost),
    path('create/', createPost),
]