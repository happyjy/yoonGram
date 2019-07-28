

# 정리 방법
1. crud 기준으로 정리
2. react lib 기준으로 정리
---
* [작성대기]routing에 대해서 
* [작성대기]경로 세팅 하는 방법 (../ 없이)
* [작성완료][조회] RenderFeed를 어떻게 rendering 하는 것일까? 
* [작성완료][create] 댓글 달기 과정
* [작성완료] component구조 
---




# (조회)RenderFeed를 어떻게 rendering 하는 것일까? 
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

---
---


# [create] 댓글 달기 과정
## enter 이후 동작 trace  
> component 구조를 잘 알고 있어야 파악하기 쉽다.
  * comment component > index.js > submitComment function
  
  * redux 
  1. redux > photo.js > commentPhoto function; api
      * then function에 dispatch function을 통해서 
    reducer로 이동 - actions creators를 arguments를 가지고 (return value가 있는 funciton)
      * reducer에서 reducer funtions을 호출
      * reducer funtions에서 server에서 가지고 온 data, props data를 가지고 data가공
      * <u>reduex의 reducer의 동작이 끝나면 state가 변화 했으므로 아래와 같이 변경된 component를 다시 rendering 합니다.</u>
  
  * Feed component 부분
  1. Feed component > index.js > mapStateToProps function
  2. Feed component > container.js > componentWillReceiveProps function
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
