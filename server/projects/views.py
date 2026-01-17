from rest_framework.generics import ListCreateAPIView
from rest_framework.exceptions import PermissionDenied
from .models import Project
from .serializers import ProjectSerializer

class ProjectListView(ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        if not self.request.user.is_authenticated:
            raise PermissionDenied("Authentication required")
        serializer.save()
