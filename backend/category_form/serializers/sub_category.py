from rest_framework import serializers

from category_form.models import SubCategory


class CreateSubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('id', 'category', 'label', 'input_type', 'placeholder')


class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = ('id', 'label', 'input_type', 'placeholder')
