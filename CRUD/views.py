from .serializers import *
from rest_framework import generics
from rest_framework import mixins
from rest_framework.filters import SearchFilter
from django.contrib.auth.models import User
from django.shortcuts import render, redirect


def index(request):
    return render(request, 'index.html')


class User_List(mixins.ListModelMixin,
                mixins.CreateModelMixin,
                generics.GenericAPIView):
    queryset = User.objects.all()
    serializer_class = user_serilizer

    filter_backends = (SearchFilter,)
    search_fields = ('username',)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class User_Detail(mixins.RetrieveModelMixin,
                  mixins.UpdateModelMixin,
                  mixins.DestroyModelMixin,
                  generics.GenericAPIView):

    queryset = User.objects.all()
    serializer_class = user_serilizer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def put(self, request,  *args,  **kwargs,):
        return self.update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)
