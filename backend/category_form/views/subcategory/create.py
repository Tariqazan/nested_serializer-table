from rest_framework.generics import CreateAPIView

from category_form.models import SubCategory

from category_form.serializers.sub_category import CreateSubCategorySerializer


class CreateSubCategoryView(CreateAPIView):
    queryset = SubCategory
    serializer_class = CreateSubCategorySerializer
