from user.models import User
from django.contrib.auth.hashers import make_password

# REST FRAMEWORK IMPORT
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.views import APIView

# REST FRAMEWORK JWT
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# LOCAL IMPORT
from api.models import *
from api.serializers import UserSerializer, UserSerializerWithToken, PostSerializer

from rest_framework.parsers import MultiPartParser, FormParser


# JWT VIEWS
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data =  super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for k,v in serializer.items():
            data[k]=v

        return data
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        #add custom claims
        token['email'] = user.email 

        return token   
        
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer        


@api_view(['GET'])
@permission_classes([AllowAny])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            first_name = data['first_name'],
            last_name = data['last_name'],
            email = data['email'],
            profile_image = data['profile_image'],
            password = make_password(data['password']),
        )

        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)

    except:
        message = {"detail": "User with this email is already registered"}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)    

@api_view(['GET'])
def getPosts(request):
    posts = Posts.objects.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

class PostViews(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request):
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
