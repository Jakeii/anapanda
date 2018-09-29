""" url routes for the REST API """
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_jwt.views import obtain_jwt_token
from . import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^auth/', obtain_jwt_token),

    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),

    url(r'^tasks/$', views.TaskList.as_view()),
    url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view()),

    url(r'^kummitments/$', views.KummitmentList.as_view()),
    url(r'^kummitments/(?P<pk>[0-9]+)/$', views.KummitmentDetail.as_view()),

    url(r'^projects/$', views.ProjectList.as_view()),
    url(r'^projects/(?P<pk>[0-9]+)/$', views.ProjectDetail.as_view()),

    url(r'^roles/$', views.RoleList.as_view()),
    url(r'^roles/(?P<pk>[0-9]+)/$', views.RoleDetail.as_view()),

    url(r'^circles/$', views.CircleList.as_view()),
    url(r'^circles/(?P<pk>[0-9]+)/$', views.CircleDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
