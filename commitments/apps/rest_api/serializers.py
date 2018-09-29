from rest_framework import serializers
from django.contrib.auth.models import User
from commitments.apps.managetime.models import Circle, Task, Kummitment, Project, Role

class UserSerializer(serializers.ModelSerializer):
    created_tasks = serializers.PrimaryKeyRelatedField(many=True, queryset=Task.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'created_tasks')

class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'

class KummitmentSerializer(serializers.ModelSerializer):

    task = serializers.PrimaryKeyRelatedField(many=False, queryset=Task.objects.all())
    kummitor = serializers.PrimaryKeyRelatedField(many=False, queryset=User.objects.all())

    class Meta:
        model = Kummitment
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):

    circle = serializers.PrimaryKeyRelatedField(many=False, queryset=Circle.objects.all())
    project_lead = serializers.PrimaryKeyRelatedField(many=False, queryset=User.objects.all())
    project_manager = serializers.PrimaryKeyRelatedField(many=False, queryset=User.objects.all())

    class Meta:
        model = Project
        fields = '__all__'

class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = '__all__'


class CircleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Circle
        fields = '__all__'
