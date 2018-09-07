from rest_framework import routers, serializers, viewsets
from commitments.apps.managetime.models import Task
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    created_tasks = serializers.PrimaryKeyRelatedField(many=True, queryset=Task.objects.all())

    class Meta:
        model = User
        fields = ('id', 'username', 'created_tasks')

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'subject', 'description', 'done_evidence', 'start_date', 'created_by')