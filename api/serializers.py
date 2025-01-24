from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from user.models import User
from .models import *


class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'first_name', 'last_name', 'email', 'password', 'profile_image', 'isAdmin']

    def get__id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'first_name', 'last_name', 'email', 'profile_image', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)    

class PostSerializer(serializers.ModelSerializer):
    User = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Posts
        fields = '__all__'

    def get_User(self, obj):
        user = obj.user
        serializer = UserSerializer(user, many=False)
        return serializer.data