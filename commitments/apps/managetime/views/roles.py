from django.shortcuts import render, redirect

from django.utils import timezone
from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView, DetailView

from django_filters.views import FilterView

from .. import forms
from ..models import Role

class RoleView(DetailView):
    model = Role

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        
        return context

class RoleList(FilterView):
    model = Role
    filter_fields = ['energizers', 'circle', 'project', 'rolestatus']
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
