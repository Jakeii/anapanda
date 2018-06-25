from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.conf import settings

class Circle(models.Model):
    name = models.CharField(max_length=30, unique=True)
    purpose = models.TextField(max_length=600)
    
    leadlink = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='lead_link', on_delete=models.PROTECT, blank=True, null=True)
    replink = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='rep_link', on_delete=models.PROTECT, blank=True, null=True)
    secretary = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='sec_link', on_delete=models.PROTECT, blank=True, null=True)
    facilitator = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='fac_link', on_delete=models.PROTECT, blank=True, null=True)
    crosslinks = models.ForeignKey(settings.AUTH_USER_MODEL, related_name='cross_link', on_delete=models.PROTECT, blank=True, null=True)
    
    strategies = models.TextField(max_length=600, blank=True, null=True)
    domains = models.TextField(max_length=600, blank=True, null=True)
    policies = models.TextField(max_length=600, blank=True, null=True)
    accountabilities = models.TextField(max_length=600, blank=True, null=True)
    objectives = models.TextField(max_length=600, blank=True, null=True)
    metrics = models.TextField(max_length=600, blank=True, null=True)
    birth_date = models.DateField(blank=True, null=True, db_column="birthdate")

    super_circle = models.ForeignKey('self', db_column="supercircle", on_delete=models.PROTECT, blank=True, null=True)
    reports = models.TextField(max_length=600, blank=True, null=True)

    last_updated = models.DateTimeField(auto_now=True, blank=True, null=True)
    created_at = models.DateTimeField(null=True, auto_now_add=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('circle-detail', kwargs={'pk': self.pk})

class Role(models.Model):
    name = models.CharField(max_length=30)
    purpose = models.TextField(max_length=600)

    domains = models.TextField(max_length=600, blank=True, null=True)
    accountabilities = models.TextField(max_length=600, blank=True, null=True)
    successindicators = models.TextField(max_length=600, blank=True, null=True)
    
    circle = models.TextField(max_length=60, blank=True, null=True)
    project = models.TextField(max_length=60, blank=True, null=True)
    
    birthdate = models.DateTimeField(auto_now_add=False, blank=True, null=True)
    
    monthly_report = models.TextField(max_length=600, db_column="monthlyreport", blank=True, null=True)
    collaborators = models.TextField(max_length=300, blank=True, null=True)
    # energizers = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.PROTECT, blank=True, null=True)
    
    energizers = models.TextField(max_length=300, blank=True, null=True)
    rolestatus = models.TextField(max_length=30, blank=True, null=True)
    
    creator = models.TextField(max_length=300, blank=True, null=True)
    reports = models.TextField(max_length=600, blank=True, null=True)
    
    created_at = models.DateTimeField(null=True, auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True, blank=True, null=True)

    def get_absolute_url(self):
        return reverse('role-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.name

class Client(models.Model):
    name = models.CharField(max_length=60)

    created_at = models.DateTimeField(null=True, auto_now_add=True)
    last_updated = models.DateTimeField(auto_now=True, blank=True, null=True)

    def get_absolute_url(self):
        return reverse('role-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.name

class Project(models.Model):
    name = models.CharField(max_length=60, unique=True)

    circle = models.ForeignKey('Circle', on_delete=models.PROTECT)
    client = models.ForeignKey('Client', on_delete=models.PROTECT, null=True, related_name='project_owner')

    related_roles = models.ForeignKey('Role', null=True, db_column="relatedroles", related_name="projects", on_delete=models.PROTECT)
    
    gig_finding = models.CharField(max_length=60, null=True) # Only show if there's a client. Need ForeignKey to Members plus % breakdown
    gig_doing = models.CharField(null=True, max_length=60) # same as above
    gig_management = models.CharField(null=True, max_length=60) # same as above
    gig_value = models.CharField(null=True, max_length=60)
    gig_value_details = models.CharField(null=True, max_length=600) # Show what each deliverable is worth as a %, automatically calculationg from total gig
    description = models.TextField(max_length=1000)
    
    expected_duration = models.TextField(max_length=100, null=True, db_column="expectedduration")
    start_date = models.DateTimeField(db_column="startdate")
    deadline = models.DateTimeField()
    
    project_lead = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.PROTECT, related_name="leading_projects")
    project_manager = models.ForeignKey(settings.AUTH_USER_MODEL, null=True, on_delete=models.PROTECT, related_name="managed_projects")
    
    objectives = models.TextField(max_length=1000)
    
    key_results = models.TextField(max_length=600, db_column="keyresults")
    stage = models.TextField(max_length=60, null=True) # Multiplechoice: Placeholder for future project, Planning, In progress, Complete, Archived
    status = models.TextField(max_length=600)

    weekly_report = models.TextField(max_length=600, db_column="weeklyreport")

    last_updated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(null=True, auto_now_add=True)
    
    def get_absolute_url(self):
        return reverse('project-detail', kwargs={'pk': self.pk})

class Task(models.Model):
    subject = models.CharField("Task name", max_length=30, help_text="Write a short name describing the task")
    description = models.TextField("Task description", help_text="Explain what will need to happen in order for this task to be accomplished", max_length=600)
    done_evidence = models.TextField("Evidence of done", db_column="doneevidence", help_text="What deliverables, links, assertions (by clients, partners, or Members), or other evidence are required to show completion of this task?", max_length=600, blank=True, null=True)
    
    start_date = models.DateTimeField("Startline", db_column="startdate", help_text="When could work begin?")
    deadline = models.DateTimeField("Deadline", auto_now_add=False, blank=True, null=True)
    
    project = models.ForeignKey("Project", help_text="If this task is for a project, which project?", on_delete=models.PROTECT, blank=True, null=True)
    role = models.ForeignKey("Role", help_text="If this task is for a role, which role?", on_delete=models.PROTECT, blank=True, null=True)
    circle = models.ForeignKey("Circle", help_text="If this task is for a circle, which circle?", on_delete=models.PROTECT, blank=True, null=True)
    
    created_by = models.CharField(max_length=60)

    last_update = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(null=True, auto_now_add=True)
        
    def get_absolute_url(self):
        return reverse('task-detail', kwargs={'pk': self.pk})

    def __str__(self):
        return self.subject

class RoleKummitment(models.Model):
    task = models.ForeignKey('Task', on_delete=models.PROTECT)
    description = models.TextField(max_length=600)
    
    next_action = models.TextField(db_column="nextaction", max_length=600)
    
    start = models.DateTimeField(auto_now_add=True)
    deadline = models.DateTimeField(auto_now_add=False)

    status = models.CharField(max_length=60)
    value = models.CharField(max_length=30)

    last_updated = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(null=True, auto_now_add=True)

class Kummitment(models.Model):
    task = models.ForeignKey('Task', help_text="Which task is this kummitment for?", on_delete=models.PROTECT)
    kummitor = models.ForeignKey(settings.AUTH_USER_MODEL, related_name="kummitments", help_text="Who will be energizing this kummitment? Is it for you or will you offer it to someone else?", on_delete=models.PROTECT, blank=True, null=True) # default logged in user
    
    success_actions = models.TextField("Success actions", db_column="successactions", help_text="What actions will the kummitor take to accomplish this task and generate the 'evidence of done'?", max_length=600)
    next_action = models.TextField("Next action", db_column="nextaction", help_text="What small thing will need to be done next to start moving toward success? For example, 'open the draft image file in Inkskape', 'find a time to meet with Jay', or 'load the project code into Atom and run the server in Terminal'.", max_length=600)
    possible_obstacles = models.TextField("Possible obstacles", db_column="possibleobstacles", help_text="What might stand in the way of accomplishing this kummitment before the deadline? Perhaps it will prove too difficult for you and you won't be able to get the help? Perhaps the task or kummitment is too vague? Maybe you'll get distracted by social media? Write down some ideas and ensure you do all you can to minimize their chances of blocking you.", max_length=600)
    minutes_estimate = models.DurationField("Minute estimate", db_column="minutesestimate", help_text="How many minutes do you estimate it will take to complete this kummitment and generate the 'evidence of done'?",blank=True, null=True)
    
    start = models.DateTimeField(help_text="When can you start this? Is it now, or are you waiting on another deliverable or some other dependency?", blank=True, null=True) #can eventually include dependencies on other deliverables
    deadline = models.DateTimeField(help_text="When are you kummiting to have this done by? It needs to be before the Task deadline.", auto_now_add=False, blank=True, null=True)
    
    energy_type = models.TextField("Energy type", db_column="energy_type", help_text="Do you want to wait until you have a certain type of energy to energize this kummitment? For example, I (Jay) like to do difficult and creative things when my energy is high, but check emails throughout the day when my energy is low. It's important to learn to monitor (and control) your energy throughout the day -- inability to do this is why many aspiring professionals can't handle freelancing or entrepreneurship (they need to be told what to do or threatened with being punished/fired in order to be productive).", max_length=60, blank=True, null=True) # make the next few fields dependent on the answer to this one
    week_scheduled = models.TextField("Week scheduled", db_column="weekscheduled", help_text="Do you want to schedule this kummitment for a specific week? If so, which one?", max_length=60, blank=True, null=True)
    day_scheduled = models.DateField("Date scheduled", db_column="dayscheduled", help_text="Do you want to schedule this kummitment for a specific day? If so, which one?", auto_now_add=False, blank=True, null=True)
    time_scheduled = models.TimeField("Time scheduled", db_column="timescheduled", help_text="Do you want to schedule this kummitment for a specific time? If so, when?", auto_now_add=False, blank=True, null=True)
    
    status = models.CharField(help_text="What do you estimate is the percent completion of this kummitment? If you're just starting, it's 0%. As you perform work cycles, estimate your percent completion so the rest of the team knows what's going on. The default maximum is 99%. Once a qualified Member, partner, or client has asserted that you have completed the task it will move to 100%. This is an important part of creating trust in your data-backed professional profile.", max_length=60, blank=True, null=True) # slider 0%, 10%...100%
    # value = models.CharField(help_text="What kind of points are generated by completing this action? How many?", max_length=30, blank=True, null=True)
    specific = models.BooleanField(help_text="Are both the kummitment and the related task written in a simple manner clearly defining what the kummitor will do? Does it use clear, direct language about what will be done and how this will move the project, role, circle, or Member forward?", default=False)
    measurable = models.BooleanField(help_text="Are both the task (evidence of done) and the kummitment (success actions) measurable/quantifiable as the completion status moves from 0% to 100%? Is there a clear difference between success and non-success for both the task and kummitment? In other words, is there an objective (rather than subjective) measure of success and means of checking?", default=False)
    
    achievable = models.BooleanField(help_text="With a reasonable amount of effort and application can this be achieved in the deadline by the kummitor? Ideally, goals should be challenging but doable. Do you (or does the kummitor) have the appropriate knowledge, skills, and available energy to get this done on time? You can achieve incredible goals when you plan your steps with clarity and execute those steps with commitment. As you carry out the steps, you can achieve goals that may have initially seemed impossible. On the other hand, if a goal is impossible to achieve, you may not even try to accomplish it. Achievable but slightly challenging goals motivate us, impossible goals demotivate us.", default=False)
    relevant = models.BooleanField(help_text="Will doing this lead to the desired result? Is this task central to the goals of the organization, project, circle, role, or Member? Does successful completion make a difference in our world? Is it clearly explained how? Does the kummitor have the appropriate knowledge, skill, experience, and wisdom to make this happen in the face of challenges?", default=False)
    timebound = models.BooleanField(help_text="Is it clear when this will be started, energized, and completed? Does the completion date create a practical sense of urgency? Goals should be linked to a timeframe that gives you a practical sense of urgency, or results in tenshion between the current reality and the vision of the goal so as to help drive the kummitor forward. Without such tension, the task is unlikely to drive relevant outcomes (especially in handling the ambiguous sitations that result in higher pay).", default=False)
    healthy = models.TextField(help_text="(Optional) How will energizing this kummitment contribute to your physical, psychological, emotional, and/or spiritual health?", max_length=600, blank=True, null=True)
    wealthy = models.TextField(help_text="(Optional) How will energizing this kummitment make you wealthier?", max_length=600, blank=True, null=True)
    wise = models.TextField(help_text="(Optional) How will energizing this commitment make you more wise?", max_length=600, blank=True, null=True)
    connected = models.TextField(help_text="(Required) How will energizing this kummitment make you more connected to Tunapanda, your community, and/or the world?", max_length=600)
    reflection = models.TextField(help_text="When you have reached a status of 99% or 100% complete, take a few moments to reflect on how this went and what you might have done better. Be sure to give yourself some love for what you did right and for the effort you put in!", max_length=600, blank=True, null=True)
    
    needhelp = models.BooleanField("Do you need help?", default=False)
    problem_needing_help = models.TextField("What problem needs help?", db_column="problemneedinghelp", help_text="UNDER CONSTRUCTION. Do you need help with this? Let people know as soon as possible. This will notify any Members or volunteers who have skills in this area so they can help you figure out it. Be sure to define what kind of help you need, and what you've tried before.", max_length=600, blank=True, null=True)
    
    last_updated = models.DateTimeField("Last updated", help_text="If this kummitment has changed, when did that happen and who made the change?", auto_now=True)
    created_at = models.DateTimeField(null=True, auto_now_add=True)

    def get_absolute_url(self):
        return reverse('kummitment-detail', kwargs={'pk': self.pk})

    class Meta:
        ordering = ["-deadline"]




