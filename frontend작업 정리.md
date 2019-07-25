
* [작성대기]routing에 대해서 
* [작성대기]경로 세팅 하는 방법 (../ 없이)
* [작성완료](조회)RenderFeed를 어떻게 rendering 하는 것일까? 



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

# (조회)RenderFeed를 어떻게 rendering 하는 것일까? 
* 로그인 후 App/presenter.js > Privateroutes component
  * privateRoutes는 Switch로 첫번째 Route는 Feed component 다. 

* Feed Component file  
: index.js, container.js, presenter.js에서 작업이 이뤄짐
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