from django.shortcuts import render, redirect
from django.utils import timezone

from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView, DetailView

from django_filters.views import FilterView

from ..models import Circle
from .. import forms

class CircleView(DetailView):
    model = Circle

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

class CircleList(FilterView):
    model = Circle
    filter_fields = []
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context
