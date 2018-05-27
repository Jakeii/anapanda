"""commitments URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.contrib.auth import views as auth_views

from accounts import views as accounts_views
from managetime import views as kuviews

urlpatterns = [
    path('', kuviews.kummithome, name='home'),
    path('signup/', accounts_views.signup, name='signup'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('admin/', admin.site.urls),
    path('kummit/<int:pk>/', kuviews.TaskUpdate.as_view(), name='kummit-view'),
    path('kummit/', kuviews.kummithome, name='kummithome'),
    path('kummit/tasks/make/', kuviews.TaskCreate.as_view(), name='kummit-make'),
    path('kummit/tasks/<int:pk>/', kuviews.TaskView.as_view(), name='task-detail'),
    path('kummit/tasks/<int:pk>/delete/', kuviews.TaskDelete.as_view(), name='kummit-delete'),
    path('kummit/tasks/', kuviews.TaskList.as_view(), name='task-list'),
    path('kummit/kummitments/make/', kuviews.KummitmentCreate.as_view(), name='kummitment-make'),
    path('kummit/kummitments/<int:pk>/', kuviews.KummitmentView.as_view(), name='kummitment-detail'),
    #path('kummit/kummitments/<int:pk>/delete/', kuviews.KummitmentDelete.as_view(), name='kummitment-delete'),
    #path('kummit/kummitments/', kuviews.KummitmentList.as_view(), name='kummitment-list'), 
]
