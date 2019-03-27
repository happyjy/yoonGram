from django.views.generic import View
from django.http import HttpResponse
from django.conf import settings
import os

class ReactAppView(View):
    # request 받을 때마다 try안에 있는 코드로 특정 폴더의 파일을 open하려고 할 것이다.

    def get(self, request):
        try:
            with open(os.path.join(str(settings.ROOT_DIR), 'frontend', 'build', 'index.html')) as file:
                return HttpResponse(file.read())
        except:
            return HttpResponse(
                """
            index.html not found ! build your React app !!
            """,
                status=501,
            ) 