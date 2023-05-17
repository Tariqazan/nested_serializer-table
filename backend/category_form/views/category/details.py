from rest_framework.generics import RetrieveAPIView

from category_form.models import Category

from category_form.serializers.category import CategoryFeaturesSerializer


class CategoryDetailsView(RetrieveAPIView):
    queryset = Category
    serializer_class = CategoryFeaturesSerializer
    lookup_field = 'pk'
