from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User
from django.utils import timezone

class Circle(models.Model):
    name = models.CharField(max_length=30, unique=True)
    purpose = models.TextField(max_length=600)
    leadlink = models.ForeignKey(User, related_name='lead_link', on_delete=models.PROTECT, blank=True, null=True)
    replink = models.ForeignKey(User, related_name='rep_link', on_delete=models.PROTECT, blank=True, null=True)
    secretary = models.ForeignKey(User, related_name='sec_link', on_delete=models.PROTECT, blank=True, null=True)
    facilitator = models.ForeignKey(User, related_name='fac_link', on_delete=models.PROTECT, blank=True, null=True)
    crosslinks = models.ForeignKey(User, related_name='cross_link', on_delete=models.PROTECT, blank=True, null=True)
    strategies = models.TextField(max_length=600, blank=True, null=True)
    domains = models.TextField(max_length=600, blank=True, null=True)
    policies = models.TextField(max_length=600, blank=True, null=True)
    accountabilities = models.TextField(max_length=600, blank=True, null=True)
    objectives = models.TextField(max_length=600, blank=True, null=True)
    metrics = models.TextField(max_length=600, blank=True, null=True)
    birthdate = models.DateField(auto_now_add=False, blank=True, null=True)
    last_updated = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    supercircle = models.ForeignKey('self', on_delete=models.PROTECT, blank=True, null=True, default='Anchor Circle')
    reports = models.TextField(max_length=600, blank=True, null=True)

    def __str__(self):
        return self.name

class Role(models.Model):
    name = models.CharField(max_length=30)
    purpose = models.TextField(max_length=600)
    domains = models.TextField(max_length=600, blank=True, null=True)
    accountabilities = models.TextField(max_length=600, blank=True, null=True)
    successindicators = models.TextField(max_length=600, blank=True, null=True)
    circle = models.TextField(max_length=60, blank=True, null=True)
    project = models.TextField(max_length=60, blank=True, null=True)
    birthdate = models.DateTimeField(auto_now_add=False, blank=True, null=True)
    last_updated = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    monthlyreport = models.TextField(max_length=600, blank=True, null=True)
    collaborators = models.TextField(max_length=300, blank=True, null=True)
    # energizers = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True)
    energizers = models.TextField(max_length=300, blank=True, null=True)
    rolestatus = models.TextField(max_length=30, blank=True, null=True)
    creator = models.TextField(max_length=300, blank=True, null=True)

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=60, unique=True)
    circle = models.ForeignKey(Circle, on_delete=models.PROTECT)
    description = models.TextField(max_length=1000)
    startdate = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(auto_now_add=True)
    projectlead = models.ForeignKey(User, on_delete=models.PROTECT)
    objectives = models.TextField(max_length=1000)
    keyresults = models.TextField(max_length=600)
    status = models.TextField(max_length=600)
    weeklyreport = models.TextField(max_length=600)
    last_updated = models.DateTimeField(auto_now_add=True)

class Task(models.Model):
    subject = models.CharField(max_length=30)
    created_by = models.CharField(max_length=60)
    last_update = models.DateTimeField(auto_now_add=True)
    description = models.TextField(max_length=600)
    doneevidence = models.TextField(max_length=600, blank=True, null=True)
    startdate = models.DateTimeField(default=timezone.now)
    deadline = models.DateTimeField(auto_now_add=False, blank=True, null=True)
    project = models.ForeignKey(Project, on_delete=models.PROTECT, blank=True, null=True)
    role = models.ForeignKey(Role, on_delete=models.PROTECT, blank=True, null=True)
    circle = models.ForeignKey(Circle, on_delete=models.PROTECT, blank=True, null=True)
        
    def get_absolute_url(self):
        return reverse('task-detail', kwargs={'pk': self.pk})

class RoleKummitment(models.Model):
    task = models.ForeignKey(Task, on_delete=models.PROTECT)
    description = models.TextField(max_length=600)
    nextaction = models.TextField(max_length=600)
    start = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(auto_now_add=False)
    status = models.CharField(max_length=60)
    value = models.CharField(max_length=30)
    last_updated = models.DateTimeField(auto_now_add=True)

class Kummitment(models.Model):
    task = models.ForeignKey(Task, on_delete=models.PROTECT)
    kummitor = models.ForeignKey(User, on_delete=models.PROTECT, blank=True, null=True) # default logged in user
    description = models.TextField(max_length=600)
    nextaction = models.TextField(max_length=600)
    possibleobstacles = models.TextField(max_length=600)
    minutesestimate = models.DurationField(blank=True, null=True)
    start = models.DateTimeField(blank=True, null=True) #can eventually include dependencies on other deliverables
    deadline = models.DateTimeField(auto_now_add=False, blank=True, null=True)
    timescheduled = models.TextField(max_length=30, blank=True, null=True) # energy, week, day, time
    energytype = models.TextField(max_length=60, blank=True, null=True) # make the next few fields dependent on the answer to this one
    workweek = models.TextField(max_length=60, blank=True, null=True)
    workday = models.DateField(auto_now_add=False, blank=True, null=True)
    worktime = models.TimeField(auto_now_add=False, blank=True, null=True)
    status = models.CharField(max_length=60, blank=True, null=True) # slider 0%, 10%...100%
    # value = models.CharField(max_length=30, blank=True, null=True)
    last_updated = models.DateTimeField(auto_now_add=True)
    specific = models.BooleanField(default=False)
    measurable = models.BooleanField(default=False)
    achievable = models.BooleanField(default=False)
    relevant = models.BooleanField(default=False)
    timebound = models.BooleanField(default=False)
    healthy = models.TextField(max_length=600, blank=True, null=True)
    wealthy = models.TextField(max_length=600, blank=True, null=True)
    wise = models.TextField(max_length=600, blank=True, null=True)
    connected = models.TextField(max_length=600)
    reflection = models.TextField(max_length=600)
    needhelp = models.BooleanField(default=False)
    
    def get_absolute_url(self):
        return reverse('kummitment-detail', kwargs={'pk': self.pk})

    class Meta:
        ordering = ["-deadline"]




