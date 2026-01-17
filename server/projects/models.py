from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200)
    discription = models.TextField()
    tech_stack = models.JSONField()
    demo_link = models.URLField(blank=True)
    code_link = models.URLField(blank=True)
    image = models.ImageField(upload_to="projects/", blank=True, null=True)

    def __str__(self):
        return self.title
