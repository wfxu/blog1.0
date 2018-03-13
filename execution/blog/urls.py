from django.conf.urls import url
import views

urlpatterns = [
    url(r'^$',views.index),
    url(r'^about$',views.about),
    url(r'^listpic$',views.listpic),
    url(r'^newslistpic',views.newslistpic)
]