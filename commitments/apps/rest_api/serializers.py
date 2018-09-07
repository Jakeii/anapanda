from rest_framework import routers, serializers, viewsets
from commitments.apps.managetime.models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('subject', 'description', 'done_evidence', 'start_date')