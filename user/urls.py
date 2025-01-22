from django.urls import path
from api.views import registerUser, MyTokenObtainPairView, getUsers, userView


urlpatterns = [
    path('register/', userView.as_view()),
    path('login/', MyTokenObtainPairView.as_view()),
    path('', getUsers)
]
