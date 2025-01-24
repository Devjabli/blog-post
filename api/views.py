from user.models import User
from django.contrib.auth.hashers import make_password
from django.http import Http404
# REST FRAMEWORK IMPORT
from rest_framework.response import Response
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.decorators import parser_classes

# REST FRAMEWORK JWT
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

# LOCAL IMPORT
from api.models import *
from api.serializers import UserSerializer, UserSerializerWithToken, PostSerializer

from rest_framework.parsers import MultiPartParser, FormParser
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



######   USER VIEWS API ############

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

@parser_classes([MultiPartParser, FormParser])
@api_view(['POST'])
def registerUser(request):
    data = request.data

    if User.objects.filter(email=data['email']).exists():
        return Response({"detail": "error"}, status=status.HTTP_400_BAD_REQUEST)
    
    user = User.objects.create(
        first_name = data['first_name'],
        last_name = data['last_name'],
        email = data['email'],
        password = make_password(data['password']),
        profile_image = data.get('profile_image'),
    )
    
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


#########   POST VIEWS API ###########

@api_view(['GET'])
def getPosts(request):

    posts = Posts.objects.all()

    page = request.query_params.get('page')
    paginator = Paginator(posts, 3)

    try:
        posts = paginator.page(page)
    except PageNotAnInteger:
        posts = paginator.page(1)
    except EmptyPage:
        posts = paginator.page(paginator.num_pages)
    
    if page == None:
        page = 1
    page = int(page)


    serializer = PostSerializer(posts, many=True)
    return Response({'posts': serializer.data, 'page': page, 'pages': paginator.num_pages})

@api_view(['GET'])
def getPost(request, pk):
    post = Posts.objects.get(pk=pk)
    serializer = PostSerializer(post, many=False)
    return Response(serializer.data)

@permission_classes([IsAuthenticated])
@api_view(['GET'])
def getMyPosts(request):
    user = request.user
    posts = user.posts_set.all()
    serializer = PostSerializer(posts, many=True)
    return Response(serializer.data)

@permission_classes([IsAuthenticated])
@api_view(['DELETE'])
def deletePost(request, pk):
    post = Posts.objects.get(pk)
    post.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)



@parser_classes([MultiPartParser, FormParser])
@api_view(["POST"])
def createPost(request):
    data = request.data
    user = request.user

    try:
        post = Posts.objects.create(
            user=user,
            title=data.get('title', 'Untitled Post'),
            subject=data.get('subject', ''),
            image=data.get('image')  # Optional image
        )
        serializer = PostSerializer(post, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"detail": "Failed to create post", "error": str(e)}, status=status.HTTP_400_BAD_REQUEST)



