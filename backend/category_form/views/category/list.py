from rest_framework.generics import ListAPIView

from category_form.models import Category

from category_form.serializers.category import CategoryFeaturesSerializer


class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryFeaturesSerializer