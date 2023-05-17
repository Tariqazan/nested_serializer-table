from rest_framework import serializers

from category_form.models import Category

from category_form.serializers.sub_category import SubCategorySerializer


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ('id', 'name')


class CategoryFeaturesSerializer(serializers.ModelSerializer):
    subcategories = SubCategorySerializer(many=True)

    class Meta:
        model = Category
        fields = ('id', 'name', 'subcategories')