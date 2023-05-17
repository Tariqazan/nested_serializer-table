from django.urls import path

from category_form.views.category.create import CategoryCreateView
from category_form.views.category.list import CategoryListView
from category_form.views.category.details import CategoryDetailsView

from category_form.views.subcategory.create import CreateSubCategoryView

urlpatterns = [
    path('create/', CategoryCreateView.as_view()),
    path('list/', CategoryListView.as_view()),
    path('<int:pk>/', CategoryDetailsView.as_view()),

    path('sub/create/', CreateSubCategoryView.as_view())
]
