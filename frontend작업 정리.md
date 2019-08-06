# 정리 방법
1. 구현(CRUD) 기준으로 정리
2. react lib 기준으로 정리


---
# 1. 구현(CRUD) 기준으로 정리
* [작성대기]routing에 대해서 
* [작성대기]경로 세팅 하는 방법 (../ 없이)
* [작성완료]component구조 
* [작성완료][조회]RenderFeed를 어떻게 rendering 하는 것일까? 
* [작성완료][create] 댓글 달기 과정
* [작성완료][create, delete]like, unlike
* [작성완료]index.js에서 mapDispatchToProps 두번째 param(ownProps)에 대해서
* [작성완료][delete] 댓글 삭제하기

* [작성완료]아래 function에 대한 생각
  - mapStateToProps
  - componentWillReceiveProps

# 2. redux 관련 
* [작성완료]redux > reducer 첫번째 param에 대해서 
* [작성완료]redux > reducer function에 대해서 

---

# 3. react lib 기준으로 정리
* [작성대기] component 생명 주기 분석해보기

---



# component구조 
* app.js  
: router (Explore, Search, Feed)  
: <u>react-router-dom lib의 'Route, Switch' 사용</u>
  * Explore
  * Search
  * Feed
      * Loading
      * FeedPhoto
          * PhotoActions
          * photoComments
          * TimeStamp
          * CommentBox
          * UserList : likes 누르면 나오는 팝업
              * userDisplay


# [조회]RenderFeed를 어떻게 rendering 하는 것일까? 
* 로그인 후 App/presenter.js > Privateroutes component
  * privateRoutes는 Switch로 첫번째 Route는 Feed component 다. 

* Feed Component file  
: index.js, container.js, presenter.js에서 작업이 이뤄짐
: 
  1. componentDidMount function(in container.js)
      * componentDidMount은 component가 Mount되고 수행
      * componentDidMount에서 this.props.getFeed를 호출 
      * getFeed(this.props에 있는 property)를 호출
      * getFeed가 this.props에 있는 이유
        : “react-redux"
      * [찾아보기]호출된 “getFeed”의 success return value는 photos.js의 reducer function을 호출하는데 이 return value가 어디로 가는지 모르겠네 ?
  2. mapDispatchToProps(getFeed 수행)(in index.js)  
      * <u>dispatch에 설정되는 values는 photos.js redux값으로 api actions세팅인 getFeed 임</u>
  3. redux(in photos.js) 작업
      * Photos.js에서 getFeed api호출 
      * <u>getFeed success 후 'applySetFeed' reducer functions를 호츨 해 api에서 return한 value를 세팅</u>
  4. mapStateToProps function(in index.js)
      * index.js > mapStateToProps에서 api에서 return한 value를 첫번째 arguments로 받을 수 있다. 
      * <u>이 과정으로 container에서 this.props</u>로 값을 받을 수 있다.
  5. componentWillReceiveProps function (in container.js)
      * 윗 단계에서 return한 value를 parameter로 받을 수 있다. 
      * index.js에서 'react-redux'를 사용했기에 가능
      * 여기서 component state를 설정
      * feed를 rendering하는데 필요하지는 않음.
  6. render function(in container.js)
      * this.props에 feed가 property로 있다.
  7. 정리 
index.js에서 mapDispatchToProps에서 redux에서 설정한 api를 세팅
/ container.js에 componentDidMount function에서 위 세팅한 것을 호출
/ index.js에 mapStateToProps function의 첫번재 parameter로 api의 success return value를 받는다.
/ container.js에 componentWillReceiveProps function에서 해당 값을 첫번째 parameter로 위 api success return value를 받는다.
/ container.js에 render functino에서 this.props로 
        1. [찾아보기]
            1. componentDidMount, componentWillRecievieProps의 life cycle 정리


# [create] 댓글 달기 과정
> enter 이후 동작 trace  
> component 구조를 잘 알고 있어야 파악하기 쉽다.
  * comment component > index.js > submitComment function
  
  * redux 
  1. redux > photo.js > commentPhoto function; api
      * then function에 dispatch function을 통해서 
    reducer로 이동 - actions creators를 arguments를 가지고 (return value가 있는 funciton)
      * reducer에서 reducer funtions을 호출
      * reducer funtions에서 server에서 가지고 온 data, props data를 가지고 data가공
      * <u>reduex의 reducer의 동작이 끝나면 state가 변화 했으므로 아래와 같이 변경된 component를 다시 rendering 합니다.</u>
  
  * App component 부분
  1. App component > index.js > <u>mapStateToProps function</u>

  * Feed component 부분
  1. Feed component > index.js > <u>mapStateToProps function</u>
  2. Feed component > container.js > <u>componentWillReceiveProps function</u>
  3. Feed component > container.js > render function > feed component 
  4. Feed component > present.js > renderFeed function > FeedPhoto component
  
  * FeedPhoto component 부분 
  1. FeedPhoto component > index.js > mapDispatchToProps
  2. FeedPhoto component > container.js > render function > FeedPhoto component(in presentation)
  3. FeedPhoto component > present.js > FeedPhoto function
      * Feed 화면에서 rendering 하는 component로  
        comment부분을 업데이트 해야 함으로 'Photocomments component'를 re rendering 한다.
  
  * PhotoComments component 부분 
  1. PhotoComments component > index.js > PhotoComponent function > Comment function
      * 이 Component는 보여주는 역할 밖에 없음으로 index.js에 rendering하는 부분만 있다.


# [create, delete]like, unlike
> heart 클릭으로 빨간 heart 제거시  
> like하는 과정은 unlike하는 과정과 같기때문에 제거하는 것으로 설명

* PhotoActions component 부분
1. PhotoActions component > presenter.js > onClick에 
    * container에서 전달한 props에 handleHearClick을 대입
2. PhotoActions component > container.js > presenter에 
    * presneter에서 생성한 component에 props 전달(index.js에서 onClick 동작하는 function을 props에 세팅)
3. PhotoActions component > index.js > mapDispatchToprops에
    * handleHeartClick funciton 생성
    * redux인 actionsCreators(photo.js)에서 생성한 api를 container.js에서 props로 사용하기 위해서 handleHeartClick function의 첫번째 parameter(dispatch)에 대입해서 세팅

* redux(photos.js)
1. redux > photos.js > unlikePhoto function; api
    * dispatch(doUnlikePhoto(photoId))를 통해서 먼저 front에서 이미지를 제거 
    * fetch를 통해서 server 작업 
    * then에서 작업이 정상 적으로 처리가 되지 않았다면 다시 doLikePhoto를 해준다.

* App component 부분
1. App component > index.js > <u>mapStateToProps function</u>

* Feed component 부분
1. Feed component > index.js > <u>mapStateToProps function</u>
2. Feed component > container.js > <u>componentWillReceiveProps function</u>
3. Feed component > container.js > render function > feed component 
4. Feed component > present.js > renderFeed function > FeedPhoto component
  
* PhotoActions component 부분 
1. PhotoActions component > index.js > mapDispatchToProps
2. PhotoActions component > container.js > render function > PhotoActions component(in presentation)
3. PhotoActions component > present.js > PhotoActions function
    * Feed 화면에서 rendering 하는 component로  
      하트 부분을 업데이트 해야 함으로 'PhotoActions component'를 rerendering 한다.


# index.js에서 mapDispatchToProps 두번째 param(ownProps)에 대해서 
  - 좋아요 세팅, 해제 할때 PhotoActions > index.js에서 ownProps에 props가 다 담겨져 있다. 
  - 이때 'ownProps'의 값은 PhotoActions component에 property로 값을 세팅한 값이다. 
  - 위 PhotoActions component에 property값을 세팅한 곳은 FeedPhoto > present.js 이다.

# [delete] 댓글 삭제하기
* 서버에서 삭제하는 작업은 쉽게 마쳤으나 state관리로 화면을 rerendering하게하는 작업중 한 부분에서 걸려 생각보다 쉽지 않았다. 
* 먼저 Phtocomments이 컴포넌트는 기능이 없어 index.js에 화면 rendering하는 소스만 있던 것을  
index.js, container.js, presenter.js으로 나눴다. 
* presneter.js에 x 버튼을 달고  
reducer에서 삭제api를 작성한것을 index.js에서 props로 세팅 후 x버튼 클릭식 이벤트로 등록한다.
* 그리고 <u>**여기서 문제**</u>가 생겼다.   
  api로 component에서 원하는 값(phtoCommentId)을 전달하는 방법을 실습하는 동안에 없어 방법을 고민하다 검색으로 해결 할 수 있었다.   
  ``` js
  render: function () {
    var children = this.state.childrenData.map(function(childData,childIndex) {
        return <Child onClick={this.handleChildClick.bind(null,childData)} text={childData.childText}/>;
    }.bind(this));
    return <div>{children}</div>;
  },
  ```
[주소](https://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js)
  * 아래와 같이 컴포넌트 관계가 있다.  
    * Explore > Feed > FeedPhoto > photoComments
    여기서 photoComments에서 삭제하는 photoId, photoCommentId를 전달해야만 했다.  
    * 그래서 photoComments에 photoId를 갖기 위해서 FeedPhotod component에 photoComments컴포넌트에 photoId를 세팅해준다. 
    * photoCommentId는 이미 PhotoComment component에서 세팅해줬다.  
    해줘야 할 것은 api로 전달해야 하는 값을 presneter.js에서 index.js에 reducer api로 전달할 수 있도록 index.js에 전달해줘야 했다. 


---
---

# 아래 function에 대한 생각
  > mapStateToProps(IN index.js), componentWillReceiveProps(IN container.js)
  - 위 function은 component의 최상위 component로(router를 가지고 있는 component제외)
  state를 가지고 있어 하위 component에게 state를 공유 할 수 있게 되었다.
  - mapStateToProps에서 세팅하면 componentWillReceiveProps에서 this.props로 확인이 가능하다.

---
---
# redux > reducer 첫번째 param에 대해서 
  * redux > reducer 첫번째 param이 state로 기본으로 가지고 있다. 
  이건 redux에서 관리하고 있는 state를 reducer 첫번째 param를 통해서 관리하고 있다.

# reducer function에 대해서 
  * redux > reducer에서 호출한 reducer function return값이 어디로 전달되는지 궁금하다
    - 현재로서는 app.js > index.js state로 받게 된다.
    - 그 다음부터는 그 하위 component로 전달되어 변하게 되는 component에 가서 변화를 rerendering한다.



