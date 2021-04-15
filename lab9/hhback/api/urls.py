from django.urls import path, re_path

from api.views import company_list, company_detail, vacancy_list, vacancy_detail, vacancy_top_ten, company_vacancy

urlpatterns = [
    path('companies/', company_list),
    path('companies/<int:company_id>/', company_detail),
    path('companies/<int:company_id>/vacancies/', company_vacancy),
    path('vacancies/', vacancy_list),
    path('vacancies/<int:vacancy_id>/', vacancy_detail),
    path('vacancies/top_ten/', vacancy_top_ten)
]
