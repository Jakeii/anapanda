from django.utils import timezone

from django.views.generic.edit import CreateView, DeleteView, UpdateView
from django.views.generic import ListView, DetailView
from django_filters.views import FilterView

from ..models import Kummitment, RoleKummitment
from .. import forms

class KummitmentView(DetailView):
    model = Kummitment

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

class KummitmentList(FilterView):
    model = Kummitment
    filter_fields = ['kummitor', 'task', 'deadline', 'needhelp', 'status']
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['now'] = timezone.now()
        return context

class KummitmentCreate(CreateView):
    model = Kummitment
    form_class = forms.KummitmentForm

    def form_valid(self, form):
        form.instance.created_by = self.request.user
        return super().form_valid(form)

