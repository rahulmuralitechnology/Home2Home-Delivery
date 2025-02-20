from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from delivery.views import OrderViewSet

router = DefaultRouter()
router.register(r'orders', OrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
