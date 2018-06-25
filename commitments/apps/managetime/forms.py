from django import forms
from .models import Circle, Role, Task, Kummitment, Project

from django.conf import settings

class CircleForm(forms.ModelForm):
    class Meta:
        model = Circle
        fields = [
            'name', 'purpose',
            'leadlink', 'replink',
            'secretary', 'facilitator',
            'crosslinks', 'strategies',
            'domains', 'policies',
            'accountabilities', 'objectives',
            'metrics', 'birth_date', 'super_circle',
        ]

class RoleForm(forms.ModelForm):
    class Meta:
        model = Role
        fields = [
            'name', 'purpose',
            'domains', 'accountabilities',
            'successindicators',
            'circle', 'project',
            'birthdate', 'monthly_report',
            'collaborators', 'energizers',
            'rolestatus', 'creator', 'reports',
        ]

class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = [
            'subject', 
            'description', 
            'done_evidence', 
            'start_date', 
            'deadline', 
            'project', 
            'role', 
            'circle'
        ]

    def __init__(self, *args, **kwargs):
        super(TaskForm, self).__init__(*args, **kwargs)

        self.fields['start_date'].input_formats = settings.DATE_INPUT_FORMATS

class KummitmentForm(forms.ModelForm):
    class Meta:
        model = Kummitment
        fields = [
            'task', 'kummitor', 
            'success_actions', 'next_action', 
            'possible_obstacles', 'minutes_estimate', 
            'start', 'deadline', 'energy_type', 
            'week_scheduled', 'day_scheduled', 
            'time_scheduled', 'status', 'specific', 
            'measurable', 'achievable', 'relevant', 
            'timebound', 'healthy', 
            'wealthy', 'wise', 'connected', 
            'reflection', 'needhelp'
        ]

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = [
            'name', 'circle', 'client',
            'related_roles', 'gig_finding',
            'gig_doing', 'gig_management', 'gig_value',
            'gig_value_details', 'description',
            'expected_duration', 'start_date',
            'deadline', 'project_lead', 'project_manager',
            'objectives', 'key_results',
            'stage', 'status', 'weekly_report'
        ]
