# from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Category, Product, Ad
from .serializers import CategorySerializer, ProductSerializer, AdSerializer

# Create your views here.
class CategoryView(APIView):
    def get(self, request):
        items = Category.objects.all()
        serializer = CategorySerializer(items, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class ProductView(APIView):
    def get(self, request):
        items = Product.objects.all()
        serializer = ProductSerializer(items, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

class AdView(APIView):
    def get(self, request):
        items = Ad.objects.all()
        serializer = AdSerializer(items, many=True)
        return Response(serializer.data)
    def post(self, request):
        serializer = AdSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)