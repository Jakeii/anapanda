from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^tasks/$', views.TaskList.as_view()),
    url(r'^tasks/(?P<pk>[0-9]+)/$', views.TaskDetail.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
