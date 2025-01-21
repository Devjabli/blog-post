from django.urls import path
from api.views import registerUser, MyTokenObtainPairView, getUsers


urlpatterns = [
    path('register/', registerUser),
    path('login/', MyTokenObtainPairView.as_view()),
    path('', getUsers)
]
