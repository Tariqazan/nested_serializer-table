from rest_framework.generics import CreateAPIView

from category_form.models import Category

from category_form.serializers.category import CategorySerializer


class CategoryCreateView(CreateAPIView):
    queryset = Category
    serializer_class = CategorySerializer
