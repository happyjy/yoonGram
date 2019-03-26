# instagram clone Back-end 
—
<<>>기호 정리

[#정리-nested Serialize]


—

# 0-2 Requirements
* Python : variable, class, function
 # 0-3 Check if everything works
* Expo, react, 리엑트 네이티브
* integrated terminal 안되..ㅠㅠ


# 1-2 Introduction to Django
* 장고 urls 개념
- urls 개념이 있는데 이건 유저가 장고 앱으로 찾아갈 수 있는 주소같은거야!
- 어떻게 urls를 만드냐? -> 장고 프로젝트 앱 폴더안에 urls라는 파일을 추가하면되!
- 장고는 이를 인식하고 url을 입력하면 urls폴더에 있는 파일을 불러서 작업!
- 위 작업을 할때 views폴더에 있는 파일을 호출해!
- 이와 같은 작업은 장고가 프레임워크이기 때문에 이런식으로  장고가 필요할때 스스로 호출을 해! 
장고는 이런식으로 호출을 해요~
- 근데 내가 호출하는건 ! Library! (Like Jquery)


* 장고 orm 개념
- 디비와 대화할 때 쓰이는것!

* 장고 사상
- 장고는 옴땅다 주고 골라서 쓰는것
- [비교 - nodeJs] 아무것도 없어서 내가 필요한것만 넣으면 된다.

# 1-3 What is an virtual environment
* 우리가 프로젝트를 할때는 버블안에 들어가서 프로그램을 설치, 삭제하는거야!
* 예를들어 장고를 버블 말고 밖에다 설치를 하고 해당 파일을 실행하면 내컴퓨터가 해당 파일을 실행하면 에러가 발생! 왜냐? 컴퓨터 내가 만든 버블안에 장고가 없으니까~

* pipenv - 가상환경을 만들어 개발 언어 버전이 혼동되지 않게 해주는 기능을 가지고 있다.

# 1-5 parts of Django - Settings, Urls, Apps
* pipenv -three : 파이썬 3버전을 설치!


# 1-6 Creating our Django Project 
* pipenv : 버블, 가상환경에 설치하는 방법
* pip : 전체 설치

* pipenv install cookecutter 가상환경에 쿠키커터 설치
* pipenv shell : 가상환경 만드는건가? 
* cookiecutter https://github.com/pydanny/cookiecutter-django
: pydanny가 장고 프로젝트를 이미 설정해놓음 ^^


# 1-7 Createing the GitHub Repository
* git init
* git remote add origin {YOUR_GIHTUB_URL}
* git pull origin master
* git add .
* git commit -m "First commmit"
* git push origin master

# 1-8 Installing the requirements
* pipenv --three	: 가상환경을 만들어요 @@@ —three : Python3을 의미한다고 했더거같드앙
* pipenv shell
* pipenv install -r requirements/local.txt

* pipenv shell -> dnago-admin까지 확인했어영~~ 
다음시간부터뭔가 사직한데 두근굳근

# 1-9 Production settings and local settings
Production Settings:
Settings that are gonna be loaded on the live server (실제 운영할 서버~~)
Local Settings:
Settings that are gonna be loaded on the local server

세팅에 관해서 얘기 하고 있다. 
세팅은 컴퓨터 과학을 잘알아야 이해도가 높은거같아. 
현재목표는 앱을 만드는거니까!!!
만들어보고 궁금하면 그때 찾아보자구 !!!
Here we go!!!


# 1-10 Databases and Django
* database agnostic어떤 db든 적합한 adapter만 있다면 사용할 수 있다. (Mysql, mql Lite, MongoDB, noSQl)
* 우리는 Postgres를 사용할거에요~~ ㅎㅎ

* pipenv shell
* python manage.py runserver => 현재는 db설정이 안되어서 에러
다음시간에 설정하러 gogogo

# 1-11 Createing the DataBases
* 모하비 시스템에서 
전체 디스크 접근 권한을 postgres에게 줘야 해서 설정을 했습니다.~ 
아래 사이트 참고
https://github.com/PostgresApp/PostgresApp/issues/471

“You have to enable access for Postgres.app in System Preferences -> Security -> Privacy -> Universal Access and in System Preferences -> Security -> Privacy -> Automation.”

* postgres에서 
  - CREATE DATABASE yoongram; 으로 데이터 베이스를 하나 생성. (project의 base.py에 database설정해 놓은 부분에 디비 이름이 있다 같게 해줘야겠다 )
  - pipenv shell 환경에서 python manage.py rumserver 한다.
  - 현재 23개의 마이그레이션 할게 있다고 나오는데 
이건 나중에 한데~~ 그럼 다음으로!! 가즈아!!!


# 1-12 Creating the Apps
* django-amdin startapp [app 이름] 어플리케이션을 설치하는 방법 
* 이렇게하면 cookiecutter로 설정한 장고 프로젝트에 어플리케이션을 하나더 만든것 입니다. 
(기존 에 users라는 앱이 이미 하나 있당./ 쿠키커터 덕분에 하나 얻은 어플리케이션/ 위치확인은 base.py > local_apps=[]에 설정되어 있당 )
* base.py > local_apps배열에 추가한 어플리케이션의 apps.py의 class 경로명을 추가합니다~~ 


* 이렇게 장고프로젝트에 어플리케이션을 추가해봤다.
* views, models, admin을 가지고 있는것을 확인했다.
* 어플리케이션의 구성요소!!   - 장고의 경우 세팅, 어플리케이션, url 등이 잇다.
* 다음 영상은 장고 앱에 대해서 알아본다고 한다.

* 프로젝트에 template를 지우는데 난 안지우고 좀 두고 나주에 한번 봐볼래 . 

 
# 1-13 Parts of a Django App-Models and Views
* 장고 프로젝트 자체를 설명
* 지금부터는 장고 앱을 설명할거야 
  - model, url, view로 구성되어 잇다. 
* 장고 url은 전체 앱의 모든 url을 불러와요
* 모델 : 데이터모습/모양이라고 할수 있어요.. 
* url : 장고 url dispatcher은 빌딩에서 초인종을 누르는 것과탕아요 
: protocol you. Se to make the app do something 
: HTTP Request (초인종 띵동~)
: The URLS of your project are a combination of all your app URLs (=> ) 장고 프로젝트 urls 파일이 앱들의 urls을 호출합니다.


* view : view가 장고에게 무엇을 해야 할지 알려준다. 
: 그리고 view는 url이 있어야 작동을한다.
: 로그인 요청을 하면 요청되는 매칭에 주소가 있으니까 view를 실행하는거다.
: view는 그냥 Python function일 뿐이다.
: view는 데이터베이스를 찾아서 오브젝트에 답아서 react.js에게 돌려주는거다.
: view는 장고에서 해야할 일을 알려주고 뭔가를 돌려주는 작업을 한다.
: 장고 ormdms 디비와 대화를 하고, 디비는 요청한 객체를 돌려준다.
: 돌려준 객체는 view로 이동 -> 브라우저로 이동 -> 유저에게 보인다.

* 총정리(장고앱이 어떻게 구성되어 있는가?)
: view는 model을 실행시키고, 
: orm과 디비와 이야기해서 객체를 가지고온다.
: view는 해당 객체를 http request에 담고 
: 이를 브라우저에게 돌려줘서 우리가 쓸수 있는거야~

# 1-14/75 Dango ORM(Object relational mappers)
장고 orm은 파이썬 그리고 sql사이의 통역사 같은거야~. 

# 1-15/75 Recap- Class Inheritance
Links : Classes on Django - https://docs.python.org/3/tutorial/classes.html

* 상속에 관한 설명을 했고 
* 장고가 모델, 뷰를 클래스를 가지고 있는데 이관계가 상속관계로 묶여 있는것 같다. 
그냥 내 추측이야 
* 안그러고서는 상속에 관한설명을하고 모델,뷰를 잘 기억하라고 했겠어? ^^ 
* 그럼 다음 장으로~~~ 

# 1-16/75 Understaning Django Models and Fields
* Link : Django Model documentation 
https://docs.djangoproject.com/en/1.11/topics/db/models/

* inheritance, orm 배웠으니까 -> 장고 모델을 배우자!!!


* 우리가 클래스 코델에서 확장을 할 수 있는 건 오브젝트가 있기 때문이야 ~
* 필터, 생성, 저장, 삭제 자주 사용한다.


# 1-17/75 Migrating 

*model.py를 변경하면 변경정보를 디비에 마이그레이션해야한다!
설정은 아래 듀개!!

	⁃	python manage.py makemigrations : 설정한 모델을 장고가 설정하도록 migrations폴더에 파일 설정
	⁃	python manage.py migrate : 장고가 설정한 파일을 바탕으로 설정 

* python manage.py runserver 

* 기억해!
: 나의 모델! 앱(유저, 이미지-우리가 장고에서 가지고 있는 앱) 필드들을 변경하게 되면 마이그레이션을 해줘야해~
python manage.py makemigrations python manage.py migration 
이 두개 명령어로 말이야~ 쉽지~~ ? :


# 1-18/75 Creating a super user
* admin panel에 로그인할 super user를 생성한데!!!
* python manage.py createsuperuser 
Id: nomadadmin
pw: Yoon1004

Others pw : Nomadadmin


# 1-19/75 Creating the User Model
## Link
* Classes on. Python
* Django Model Documentation
* Model Field reference
* Github Commit


* mode이란?
- mode을 통해서 장고는 varialble를 디비 테이블로 변환시켜~
- 장고는 우기가 작성한 variable을 가져다가 디비 데이블로 변환하고  자동적으로 유저, 이미지를 위한 테이블을 생성한다는 뜻이다.
그리고 장고는 우리의 variables로 디비에 칼럼을 자동으로 생성해~
덕분에 우리는 디비를 터치할 필요가 없어~(장고가 작업하고 장고가 디비작업을해줘~)

- 디비에 필드를 추가하면 ! ‘마이그레이션’을 해야해!!!
- /Users/jaeyoonyoon/yoongram/yoongram/users에 migrantions 폴더를 보면 우리가 추가한 디비 필드를 확인할 수 있어~


# 1-20/75 Creating the Image Model 
## Link
* Github Commit
* abstract base classes
* Model Fields

* timestamp 설명~
* 반복하기 때문에 abstract classes를 설명해~

* python manage.py make migrations : 설정한 모델을 장고가 설정하도록 migrations폴더에 파일 설정
* python manage.py migrate : 장고가 설정한 파일을 바탕으로 설정 


# 1-21/75 Explaining Model Relationships
## Links
* Django Models Documentation

* one-to-many, many to one/ many-to-many 관계에 대해서 설명했씁니다. * one to many, many to one은 유저가 사진올리는것 many to many는 following, follower를 설명하고 있습니다~

# 1-22/75 Created the Like model and fixing Comment and Image models
## Links
* Many to One Relationships(foreign key)
 https://docs.djangoproject.com/en/1.11/topics/db/examples/many_to_one/

# 1-23/75 Creating Following: Follower Relationships

# 1-24/75 Registering the Models in the admin

* admin.py : 어드민패널에 보여질 내용을 정의한다.
  - decorator를 사용함
: [읽어보기]decorator를 이해 하기 위해서 아래 사이트를 설명 함 http://simeonfranklin.com/blog/2012/jul/1/python-decorators-in-12-steps/

* admin.py 파일일은 decorator를 사용해서 설정한뒤 웹에 admin 페이지에서 디비에 이미지, 댓글, 좋아요를 설정했다.

# 1-25/75 Customizing the Django Admin

* 배운게 2개
  - string representation : object 생김새를 변화시킬 수 있는 첫번째 방법1
  - admin의 클래스를 변경 : object 생김새를 변화시킬 수 있는 첫번째 방법2

* 예
  - 첫번째 방법 
  :  yoongram > images > model.py
def __str__(self):
    return 'User: {} - Image caption: {}'.format(self.creator.username, self.image.caption)
- 두번째 방법
 : yoongram > images > admin.py
: model meta options - https://docs.djangoproject.com/en/1.11/ref/contrib/admin/

* 다음 장 부터 api 작업을 시작한데 고고싱~~


# 1-26/75 Testing ManyToMany Relationships

* 계정 생성
-id: pse
-pw: Nomadadmin
* [#확인필요]Many to many 설명하는데 오류가 있는 것 같다. 

# 1-27/75 Understanding HTTP Request
* HTTP Request 
- 클라이언트가 서버와 대화하는 방법~

* 
Client - Requests
Server - Responses

Consume a resource => GET
Create a resource => POST
Update a resource => PUT Delete a resource => DELETE


Client: google.com/users/
Server: GET google.com/users/ => (look into server) => URL => View()


* [중요]장고앱 서버단 동작 순서
- models, views, urls로 동작한다.
- models : 이전에 우리가 작업한 데이터
- views : function! 유저삭제, 고르인유저, 이미지 업로드와같은 : 이 요청 사항들을 urls로 보내면 되는거임
-

* url을 사용해서 정보를 수정하고, 리소스를 바꾸는것이 바로 백엔드 수업의 핵심작업!



# 1-28/75 Basic REST API Design Concepts
[#중요-재미있는거 배움!!]

* NOUNS ARE GOOD
* url에는 동사가 없다! 오직 명사뿐!

* CRUD
Create = POST
Read = GET
Update = PUT
Delete = DELETE

- 예
: 멍뭉이들을 컬렉션 취급을 합니다.
GET -> /dogs
POST -> /dogs
PUT -> /dogs
DELETE -> /dogs (좋은 방법은 아님 ^^)



GET -> /dogs/kung
POST -> /dogs/kung (error)
PUT -> /dogs/kung ( If Kung exists update, if not error)
DELETE -> /dogs/kung

- 예
: variation은 변화가 가능하다~
: 브라운색 강아지를 불러오고 싶을때 아래와같이 
GET -> /dogs?color=brown (브라운 색 강아지만 불러옴 다른 http request 프로토콜 method도 같음)
GET -> /owners/Nicolas/dogs/search?color=brown


- 예
: api를 만들때 버전을 바꿀수 있다. 
: 다른 디바이스를 지원해야할 수 도 있기 때문에 (아그러면 연결된 디바이스가 깨질수도 있어서)
: 그래서 아래와 같은 방법으로 해~(업데이트 할때 그냥 엎어쓰지 않아요~)
/v1/dogs/search?color=brown
/v2/dogs/search?color=brown




# 1-29/75 Django rest Framework installations and Basic Concepts
* 장고 rest Framework를 설치하기 위해서 아래 명령어 사용
  - pipenv install djangorestframework
* 다음시간에 이미지를 Serializer를 통해서 작업한다. 

# 1-30/75 Creating image Serializers
* 이번강의 : Serializer를 생성 다음강의 : Views를 생성
다다음강의 : view를 url를 향하게 할거임^^(Serializer를 테스트할 수 있게)

# 1-31/75 Creating List All Images View
* 좋은 작업은 아님 디비에서 많은 사진을 로드 하면 디비 뻗음 ^^ ;;
* 단지 테스트를 위한 작업~~ 

* views.py파일참고(yoongram > images > view.py ) 
> import models
> Create Class 
이미지 데이터를 가지고 오는 코드 작성
(모델에서 이미지 가지고옴 > serialize > respose객체에 생서한 serialize data 세팅)


# 1-32/75 Creating the URLS and testing the Image Serialiser


* url은 3가지로 이루어짐
- 1. Url pattern
- 2. View
- 3. Name

# 1-33/75 Viewing all the Comments and Likes
[#serialize #nestedSerialize]

* 다음장에서는 nested Serialize를 배운데여~


# 1-34/75 Serializing a Foreign Key
[#]

* 좋아요 모델에 있는 image필드 value를 “nested serialize”를 한다네~? 
* [#정리-nested Serialize] serializer.py 파일에서  meta 정보에 fileds설정을 ‘__all__’로 해주면서 모든 모델의 필드를 가지고 오는데!
예를 들어 comments모델에 images필드가 있는데 
images필드는 foreign 키로 설정된 필드다.
이 필드를 Serializing 설정을 serlalize한 object를 세팅해준다.

* 다음강의는 user Serializing을 배워!
- 특정 필드만 보일수있는 설정을 배운데!

# 1-35/75 Hidden Model Fields in Django

* [문제점]
이미지 객체에서는 “댓글”, “좋아요” 정보가 없다!
이것을 해결하기 위해서 ! “hidden model fields”를 배우는 것이다!


* [해결방법]
- 이미지 모델에 id필드가 1일때 
댓글, 좋아요 모델에 image foreign field에 1인데이터를 찾는것을 set이라고 한다.
그래서 위 set을 해주는 방법은 다음과같다
- Comment, Like 모델에서 image field를 foreign key로 설정해두었는데 
설정할때 related_name 속성을 추가하면 
Image 모델에서는 Comment, Like를 hidden field로 사용할 수 있게 됩니다.
그래서 serializers.py 설정시 ImageSerializer 클래스에서 


related_name 파라미터 설정을 통해서



* [결과] 
set은 서로 연결된 모델을 그룹핑하는 방법
이전에는 좋아요, 댓글에 image foreign key만 존재
그리고 이 foreign key가 해당 모델로 연결
But! 지금은 set이 모든 댓글, 좋아요를 그룹으로 모아서 한번에 연결!
 

# 1-36/75 Planning the API Views

* 인스타그램 웹사이트를 보면서 기능을 나열하면서 리스트업 했는데 어떻게 25개 나옴… 
기대된다 어떻게 다 구현 할런지 30개 강의 남았는데~ 홍홍
* 트렐로에 리스트 업했습니다~~
* api list



# 1-37/75 *** The Request Object in Django

* api를 진행하기 전에 http request에 대해서 좀더 설명해~
- http request는 많은 과정을 거쳐(미틀웨어) 우리의 view function에 도달!
- 이 사이에는 여러개의 middleware가 존재!
- 그래서 http request를 우리가 View function으로 받아 볼때 미들웨어들ㅇ 추가한 여러 요소들을 볼수 있다!
- 이 요청을 접근하는 방식은 view function의 두번째 attribute를 확인하자!(self 다음 parameter)
- 이 parameter는 장고가 정해둔거야~
장고가 두번째 param을 request 객체로 정한거지!
- docs에 페이지가 요청될때, 장고는 해당 요청에 대한 메타데이터를 포함한 Http request를 생성한다! 라고 적혀있음.

* request user를 이해하는 것도 중요!
- 승인-미들웨어에서 오는건데, 우리가 사용할 수 있는 유저 오프젝트를 제공해!
- 예를 들면, 요청받은 유저가 승인 되었는지 체크할 수 있다.
- 유저의 여러가지 오브젝트 중에서 웹사이트를 혹은 원하는 것을 골라서 체크할수 있지!
- 그래서 유저가 승인된 유저인지 아닌지 확인할수 있게 웹사이트 외에도 전화번호, 성별등 확인 가능!
- ***왜냐하면 장고는 유저 오브젝트를 request 오브젝트에 붙여줄거니까~***

* How does Django build the request object?
- with all the middleware!!!


# 1-38/75 Making Queries

* 강의에서 사용한 query 예
- MODEL.objects.filter()
- MODEL.objects.all()

* view.py 파일에서 
장고 모델안에 활용할수 있는 api request에
request.user.id 객체를 통해서 로그인한 유저를 쿼리 조건에 담아 filter 된 value를 가져올수 있어요~


# 1-39/75 Getting the User Feed part One # hidden field
* 유저 피드 시작! - 데이터를 부르는 세팅 과정

* 아래 세가지를 배웠어.
  - model - hidden Field
  - python - iterator
  - python - sort, lambda function

# 1-40/75 Getting the User Feed part two
* 유저 피드 마무리! - 부른 데이터를 프론트페이지를 위해서 데이터를 serialize한다!


* 한것
  - 1. 프로필사진 설정
  : admin.py 파일에서는 local로 접속할때 화면에 보이는 field를 정하는 장소!
  - 2. Serialize 설정
  : like_count 설정 (model attribute/ 기존에 model에 있는건 model Field)
  : comment Serialize에 creator를 FeedUserSerialize로 설정



# 1-41/75 Using Variables on the URLS

* urls을 통해서 api? 작업을 하는거같아요. 
- 1-41/step0. create the url and the view
- 1-41/step1. take the id from the url
- 1-41/step2. We want to find an image with this id
- 1-41/step3. We want to create a like for that image


* [#질문]
<int:id>
path("<int:id>/like", view=views.LikeImage.as_view(), name="like_image"),



# 1-42/75 Working with Regular Expressions

* 뭐 그냥 정규식에 대해서 배웠어.  
https://regex101.com/
이 사이트를 이용하면 
내가 쓴 정규식 설명이 나와 있어서 
보다 쉽게 배울 수 있는거같아

# 1-43/75 Liking an Image

* 처음으로 ‘Django’, ‘postgres’를 사용해서 저장을 해본날!!!
spring, mybatis 이외에 
디비에 data 저장, 호출 해보니 재미 있군. 방식이 다 비슷하다


* 저장하는 방식 
new_like = models.Like.objects.create(
	creator = user
	image = found_image
)

new_like.save()
—> create(), save()에 대해서 찾아봐야겠어~~


# 1-44/75 Restricting Likes

* [#궁금] 
-> views.py > LikeImage > models.Image.objects.get으로 가지고온 value를 
print로 찍으면 __str__ 형태로 나오는데
이 값을 조회하는데 사용된다.
==> 내가 생각하기에는 
- image_id : url get방식으로 받아온 parameter
- found_image = models.Image.objects.get(id=image_id) ***** id는 db table의 field
- modles.Like.objects.get(
	creator=request.user,		
	image=found_image		*****image는 db table 조회값의 ref value를 가지고 있는것 같다.
) 



# 1-45/75 Commenting on an Image

*[궁금] urls.py
path(“likes/“, view=views.CommentOnImage.as_view(), name=“all_likes”);
여기에서 as_view()란 뭘까~~?

*[궁금] views.py
에서 get, post의 parameters에 대해서 api를 확인해보자 ~

*[궁금] CSRF_COOKIE_HTTPONLY란 뭘까? 



*[중요]프론트엔드에서 백앤드로 데이터를 어떻게 받아오는가? 
- urls.py -> view.py이렇게 설정

*[중요]serializer( python data를 json type으로 번역)
- pyton object <-> json type object
- 왜해주냐?  프론트에서 json type으로 보내준 object 타입 데이터를 python type 객체로 변경한뒤 모델에 저장해 디비에 저장할 수 있도록 변경하는 것 입니다!!!

* is_valid()
- views.py -> serializers.CommentSerializer(data=request.data).is_valid()
Request.data로 넘어오 데이터가 serializer로 적합한지 안한지 확인하는 작업!!

*[중요] 장고 admin panel에서 등록하는 방법
Local/images/8/comments/접속
-> content에 입력 방법 -> {‘message’: ‘meager 입력’}


# 1-46/75 Deleting my own comment
* Django rest framework Class-based Views(def와 관련 되어 있음.)
https://www.django-rest-framework.org/tutorial/3-class-based-views/

*[#error-해결] delete() got an unexpected keyword argument 'image_id'
http://127.0.0.1:8000/images/comments/6 url을 이렇게 입력하고 delete했는데…
delete() got an unexpected keyword argument 'image_id'
이런 에러가나서.. 안된다. 읭?
일단 그냥 넘어갔다!!!!!!!!!ㅠㅠ 
-해결!!! 
원인은… urls.py에서 get방식으로 value를 던질때 지정한 변수 이름과  views에서 post method에서 3번째 param(=get 방식으로 던진 value) 이름이 같지 안아서 생긴 문제였다. ^^;;;


# 1-47/75 Get people to follow on explore
* retrieve 하는거라 특별한 것 없었음


# 1-48/75 refactoring the Like, Unlike
*[#error-해결] 1-46과 같이 삭제하는 단계에서 에러가난다. 
원인 예측으로 디비에 not null? Pk?  설정이 에러와 관련된게 아닌가 생각된다. 
AttributeError at /images/6/unlikes/
'Request' object has no attribute 'users'
-해결!!!
… view에 request.user_id라고 적었다.(request.user인데…) ^^;;


# 1-49/75 following a User
* add()를 처음 씀
https://docs.djangoproject.com/en/1.11/ref/models/relations/#django.db.models.fields.related.RelatedManager.add

# 1-50/75 Unfollowing User
* remove()를 사용(add()와 상반되는 개념)


# 1-51/75 Getting User Profile
* [#중요개념]circular dependency
- 내가 유저 안에 있는데 이미지를 불러오고, 이미지에서 또다시 유저를 불러오면, 안되겠지?
- 유저 프로필 이미지 시리얼라이저를 이미지 시리얼라이저 안에 생성하도록 한다.
(필드는 이미지id, 파일, 좋아요 개수, 댓글 개수)

# 1-52/75 Getting Followers List
* 

* users/yjy - 유저 정보
- username
Name
Bio
Website
post_count
followers_count
following_count
Images	

* http://127.0.0.1:8000/users/yjy/followers/

# 1-53/75 Getting Following List

* http://127.0.0.1:8000/users/yjy/following/

# 1-54/75 Class Based Views vs. function Based Views

[중요]
* class Based views
- class안에 method(def)를 선언
- 클래스를 생성하고 그안에 각각 http request를 위한 function을 만들었다.

* function Based Views
- 파일에 함수(def)를 바로 선언해서 
- 분기분으로 request.method를 get, post, del.. 등 request 방법들을 나눠서 로직을 만들어준다.

[중요]* 정리 
- class Based View는 장고 rest_framework.views에서 APIView 객체를 사용하기 때문에 
생략이 많이 되어 있는것 처럼 보인다. 
반면 Function Based Views는 rest_framework.vies APIView에서 지원하는 것을 개인이 직접해야함으로 자신이 무엇인가 하고 있는거처럼 더 느낀다. 
- class Based View
: def post( def post(self, request, image_id, format=None): )에서 “request.data”이것은
Api view만을 위한 것입니다.

반면 Function Based Views는 다음과 같은 것을 작성해야합니다. : request.POST.get(‘key’, val)



# 1-55/75 Searching Images by Hashtag Part One
* taggit
- 이것은 third party app! -> coming > setting > base > third party app 으로 이동/ 작업
- 해쉬태그 적용을 정말 쉽게 해주는 도구!
- [중요] 항상 최고의 설치방법은 documentation 보고 잘 따라하는 것 

- pipenv install django-taggit
- base.py 파일9 : Third party app 설정 ‘taggit’
: TAGGIT_CASE_INSENSITIVE = True
- python manage.py migrate
- 모델에 추가 
- 모델에 추가 했으니까 아래 명령어로 설정
python manage.py makemigrations python manage.py migrate


# 1-56/75 Searching by Hashtag part Two
* Fileld lookups ( field lookups(contains, exact, start with) ) 
* deep relation 
	- ‘ __ ‘로 객체가 가지고 있는 다른 객체에 점근하는 방법


# 1-57/75 Search users by username
* [#에러-해결]
	- url설정시 search를 등록했는데 기존에 <slug:username>/ 라는 path를 등록했는데 이것때문에 문제가 발생  	- 원인 	: url주소 뒤에 get 방식으로 path를 정할때 search/?username=VALUE를 등록할때  search이 걸 <slug:username>으로 인식해서 이 path에 해당하는 view로 이동을 하게 됩니다.
	: ***** 그리고 중요한건 django가 위에서 부터 분기문을 타서 해당하는 조건에 먼저 도달하면 그것에 해당하는 view로 이동하기 때문에 나중에 등록한 search의 view로 이동하지 않는것입니다. ~~
	- 해결방법
	: 그래서 해결방법은 마지막에 작성한 원인으로 유추해볼때 나중에 작성한 search를 <slug:username>으로 등록한 것보다 위에 작성하면 분기문 특성에 따라 search로 path로 먼저 도달해 원하는 동작 구현이 가능합니다 ^^


* [#궁금]
	- http://127.0.0.1:8000/images/search/?hashtags=uny
 	- ?뒤에 server로 보낼 key와 value를 다음과 같이 적는다. 
	- 이 규칙 문서 찾아 보기 
	- 다음과 같이 query_params로 받아 오는거 같으니까 참고 하기 
		request.query_params.get('username', None)
	- 

* [#궁금]
	- model에 data를 가지고 올때 모델명.object로 연결해서 찾는 것 같다.
	- 이 규칙 문서 찾아보기 

# 1-58/75 Creating Notification Models

* python manage.py makemigrations && python manage.py migrate
* 장고 버전 확인 
python -m django --version

* notifications 기능을 추가 하기 위해서 app, model을 추가 했다.(다음장에서는 API를 추가)
cd nomadgram
django-admin startapp notifications
cd ..

* [#에러-해결] 
: 2시간동안 고민하면서 해결한 에러~~~
: 덕분에 postgres 테이블에 접근해서 좋은 경험 !

	- fieldname 오타로 디비 테이블을 잘못 생성했고
models.py를 수정해서 마이그레이션하려고 했으나 잘 안됨(field 가 잘못된게 아닐 수 도)
그래서 Postgres앱에서 현재 프로젝트 스키마 “yoongram” 접근 
sql로 onwername = ‘jaeyoonyoon’으로 검색 notifications 확인 후 
drop table notifications로 테이블저게

	- BUT !!!
위 작업 이후 notifications > models.py를 작성하고 마이그레이션해도 테이블이 생성되지 않았다.
이유는 대충 짐작하기로 django_migrations라는 테이블에 마이그레이션 이력이 남는데 여기에 app feild에 notifications이 남아 있어서 마이그레이션 작업으로 테이블이 생가지 않는것 같아
Delete from django_migrations where 1=1 and app = ‘notifications’로 삭제 후!

	- Finally !!! 
Notifications models.py를 설정 후 마이그레이션 하니 테이블도 제대로 생기로~ 에러도 안나고~


* 마이그레이션 
== python manage.py makemigrations && python manage.py migrate


# 1-59/75 Getting my notifications
* 1-58 단계에서 만든 설정으로 API를 만드는 과정


# 1-60/75 Creating Follow, Comment and like notifications
*[#궁금]
아래 notifications 생성할때 
serializer.data['message'] 의 official doc를 찾아 보자!

- serializer = serializers.CommentSerializer(data=request.data)
- notifications_views.create_notification(user, found_image.creator, 'comment', found_image, serializer.data['message'])


*[#궁금-확인]
아래 두개 class Meta로 정렬하는것 / def __str__(self)로는 어떤걸 의미하나? 동작 확인을 못함

  class Meta:
    ordering = ['-created_at']

# Django panel에 등록된 것을 상세 화면 확인할때 아래 사진처럼 확인할 수 있다.
  def __str__(self):			 
    return 'From: {} - To: {}'.format(self.creator, self.to)



* viwe를 만들지 않고 function을 만든다.(def를 통해서 function생성)

# 1-61/75 Moderating comments on my image

* [#배운것]
	- URL에서 한개 이상 parameter 받을때 def에 어떻게 표시하는지(문서 찾아보기)
	- Comment model에 image가 foreign key로 설정 되어 있는데 이것을 “__”로 id, creator접근해 사용가능하다는 것
	- 아래 코드 참고 

def delete(self, request, image_id, comment_id, format=None)
	comment_to_delete = models.Comment.objects.get(
        id=comment_id, image__id=image_id, image__creator=user)
      comment_to_delete.delete()

# 1-62/75 Including Myself on the Feed

# 1-63/75 Getting Single Photo

# 1-64/75 Getting the image likes 
* [확인] values() 	
	- https://docs.djangoproject.com/en/2.1/ref/models/querysets/#values
    print(likes.values())

*  [확인] in
	- https://docs.djangoproject.com/en/2.1/ref/models/querysets/#in
	- User모델에 like_creators_ids(array type)value가 있는지 검색하는거에요~
    		users = user_models.User.objects.filter(id__in=like_creators_ids)



# 1-65/75 Edit a Photo
# 1-66/75 Deleting an Image
# 1-67/75 Update Profile

[#배운것]
 * ReadOnlyField()
: 이 serialize를 만들때 자동으로 만드는 필드 
: 예로 readonly해준 필드는 수정 불가능 한 필드로 수정 불가능한 필드로 인식하게해준다.
: https://www.django-rest-framework.org/api-guide/fields/#readonlyfield



# 1-68/75 Updating the password
# 1-69/75 What is JWT
* JWT (Json Web Token)
- 

<JWT 구성도 >
- 1. 로그인시 서버에 id, pw를 보낸다
- 2. 서버는 JWT을 생성
- 3. JWT를 browser로 보내준다.
- 4. Jet token을 request header에 담아 보낸다.
- 5. 서버는 jwt tokent을 확인하고 user의 정보를 jwt로 뽑아내 
- 6. client로 보내준다.

* JWT를 사용하는 이유는 정리하자면 
- Authorization에 관한 내용이다. 
- 장고를 사용하면서 사용자 인증 방식은 request객체에 user를 참고햇 가지고 오고 있는데
이 값은 session있는 user 정보를 사용하고 있는것이다. 
- 앞으로 react로 front를 구성할텐데 react는 session값을 사용하지 못해 
위에 보이는 jwt라는 3rd part app(?)을 사용하게 된 것 이다. 



# 1-70/75 Setting up JWT
* setting up JWT
- 아래 url에 Usage에 다 있다.
http://getblimp.github.io/django-rest-framework-jwt/ 
1. pipenv install djangorestframework-jwt
2. setting.py에 JSONWebTokenAuthentication 추가
3. Urls.py에 path("api-token-auth/", obtain_jwt_token) 추가
4. Postmen 에서 정해진 url(http://localhost:8000/api-token-auth/)에 body에 username, password를 보냄
5. Postman 에서 원하는 url에 username, password
그리고 header에 다음과 같은 방법으로 얻은 jwt를 보내준다(Authorization: JWT <your_token>)
 

* [#에러-미해결] 
	- postman으로 api-token-auth url path로 username, password를 보냈는데 jwt token을 받지 못함 
	- 400 bad request 오류로 인해 원인을 모르겠음.. 
그래서 그냥 넘어감 ^^
	- 주의 auth 인증하는 부분이기에 request method가 get이 아니라 post 이어야 한다.
[#에러-해결 20180317]
	- confine > settings > urls.py에서 setting up jet token을 설정해주고 주석해줌… 
왜.. .그랬을까? ㅠㅠ
=> #1-72에서 Signing Up: Loggin In 영상에서 제거해주더라 재책하지마 ^^ 잘하고 있었네. ㅎㅎ



* [#배운것]
	- base.py에 DEFAULT_AUTHENTICATION_CLASSES 설정부분을 보면 다양한 인증 메커니즘이 있다( JWT, session, Basic ) 
	- 이전 쿠키와 같은 이전 승인 매커니즘과도 같이 동작한다.
	- 이와 같이 다양한 메커니즘이 있는게 좋다.  		이유는 jwt는 앱, 프론트엔드를위해서 설치, 나머지 베이직은 어드민을 위해서 사용하면 좋다고 하네.


* 위 jet 구성도에서 4번째 단계에 해당하는 내용이다.
- jwt를 Request에 보내는 doc


* 서버로 api-token-auth url로 얻은 jwt을 header에 보내는 캡처 2개
1. api-token-auth에 body에 useranme, password를 통해 jwt를 얻는다
2. 얻은 jwt를 Header에 담아 user/yjy에 request를 보내 response를 받는다. ^^ 싄나


* In from a Unix/Mac terminal, you can check your python version as follows:
	- $ python --version
If you want to know the source:
	- $ which python
* Django version check	
	- python -m Django —version


# 1-71/75 Serializing the Tags 
* [#에러-미해결]
	- 20190317 이거 해결 했던거 같은데 확인 필요
	확인 원인은 오타였음
	“taggit_serializer” 명으로 THIRD_PART_APPS에 등록해야하는데 (taggit-serializer로 등록함…)

	- 아니 왜 pipenv install django-taggit-serializer로 taggit-serialzier를 설치하고 
base.py > THIRD_PART_APPS에  ‘taggit-serializer’를 등록했는데
ModuleNotFoundError: No module named 'taggit-serializer' 이런 에러가 서버에서 나서 
… 해결중. 

Module 받은 foler가 어딘지
Pipfile이 jaeyoonYoon폴더에 있는데 이게 맞는건지 
가상환경이 yoongram 폴더에 있어야 하는게 아닌건지… 헷갈린다. ㅎㅎㅎㅎㅎㅎ
일단 pip 가상환경에 대해서 다시 알아봐야할듯.
ㅠㅠ


[#공유]
Postman으로 request보낼때 url주소에 /를 맨 뒤에도 붙여야 하더라… ㅋㅋㅋㅋㅋㅋㅋ큐ㅠ
http://localhost:8000/images/



# 1-72/75 Signing Up: Loggin In
* 


*[#확인필요]
If Django version is above 2.0, you need to put as below in urls.py

from django.urls import include, path, re_path

re_path(r'^rest-auth/', include('rest_auth.urls')),
re_path(r'^rest-auth/registration/', include('rest_auth.registration.urls')),

*[#확인필요]
	- postmans으로 확인시 
/rest-auth/login/   	 /rest-auth/logout/  	/rest-auth/registration/
일때 …500 server error 인데 그냥 지나감.. 확인해보자.

# 1-73/75 Uploading a Photo
# 1-74/75 Uploading profile image
# 1-75/75 Login in with Facebook





  : 확인 python3

* yarn
  : brew install yarn

* pipenv
 : brew install pipenv

* pip 
  : npm install pip 

—
#0-2 Requiredments

## python 
* variable, function, class


—
Tag list

[#확인필요]
[#확인완료]

[#에러-해결]
[#에러-미해결]

[#궁금]
[#중요개념]
[#배운것]
[#공유]