"""emosaac URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path

# from total.views import MyAPIViewGenre, MyAPIViewAgeAndGenre
from userbasedpredict.views import MyAPIView
from userbasedpredict.views import MyAPIView, ClearAndSetPredict


urlpatterns = [
    path('recommand/', include('recommand.urls')),

    path('recommand/total/', include('total.urls')),
    path('recommand/cf/', include('userbasedcf.urls')),

    # path('recommand/cf/<int:user_id>', MyAPIViewNewUserCf.as_view()), #cf
    # path('recommand/cf', MyAPIViewCf.as_view()),  # cf By new user
    #
    # path('recommand/genre', MyAPIViewGenre.as_view()),  # total genre
    # path('recommand/ageAndGen', MyAPIViewAgeAndGenre.as_view()),  # total genre

    # path('recommand/predict', include('userbasedpredict.urls')),
    path('recommand/predict', ClearAndSetPredict.as_view()),
    path('recommand/predict/<int:user_id>', MyAPIView.as_view()),

    path('recommand/itembasedcf', include('itembasedcf.urls')),

    path('admin/', admin.site.urls),
]
