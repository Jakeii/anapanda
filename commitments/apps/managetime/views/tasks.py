from django.urls import reverse_lazy
from django.utils import timezone

from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView, DetailView
from django_filters.views import FilterView

from .. import forms
from ..models import Task

class TaskCreate(CreateView):
    model = Task

    def get_form_class(self):
        return forms.TaskForm
    
    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)

class TaskUpdate(UpdateView):
    model = Task
    form_class = forms.TaskForm

class TaskDelete(DeleteView):
    model = Task
    success_url = reverse_lazy('task-list')

class TaskView(DetailView):
    model = Task

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

class TaskList(FilterView):
    model = Task
    filter_fields = ['created_by', 'description', 'circle', 'project', 'role']
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
