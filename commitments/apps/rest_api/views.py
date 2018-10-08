from rest_framework.filters import SearchFilter
from .serializers import TaskSerializer, UserSerializer, KummitmentSerializer, ProjectSerializer, RoleSerializer, CircleSerializer
from commitments.apps.managetime.models import Task, Kummitment, Project, Role, Circle
from django.contrib.auth.models import User
from rest_framework import generics


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['username']


class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class TaskList(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['subject']


class TaskDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class KummitmentList(generics.ListCreateAPIView):
    queryset = Kummitment.objects.all()
    serializer_class = KummitmentSerializer


class KummitmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kummitment.objects.all()
    serializer_class = KummitmentSerializer


class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['name']


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class RoleList(generics.ListCreateAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['name']


class RoleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Role.objects.all()
    serializer_class = RoleSerializer


class CircleList(generics.ListCreateAPIView):
    queryset = Circle.objects.all()
    serializer_class = CircleSerializer
    filter_backends = (SearchFilter,)
    search_fields = ['name']


class CircleDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Circle.objects.all()
    serializer_class = CircleSerializer
