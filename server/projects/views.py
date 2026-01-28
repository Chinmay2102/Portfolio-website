from rest_framework.generics import ListCreateAPIView
from rest_framework.exceptions import PermissionDenied
from .models import Project
from .serializers import ProjectSerializer

class ProjectListView(ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def perform_create(self, serializer):
        user = self.request.user
        if not user.is_authenticated:
            raise PermissionDenied("Authentication required")
        if not user.is_staff:
            raise PermissionDenied("Admin access required")
        serializer.save()
