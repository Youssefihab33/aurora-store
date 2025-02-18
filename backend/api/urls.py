from django.urls import path
from .views import CategoryView, ProductView, AdView

urlpatterns = [
    path('categories/', CategoryView.as_view(), name='categories'),
    path('products/', ProductView.as_view(), name='products'),
    path('ads/', AdView.as_view(), name='ads'),
]