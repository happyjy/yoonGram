import { createStore, combineReducers, applyMiddleware } from "redux";//, compose
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { i18nState } from "redux-i18n";
import user from 'redux/modules/user';
// import Reactotron from "ReactotronConfig";
// import createHistory from "history/createBrowserHistory";

const env = process.env.NODE_ENV;
console.log("### ENV : "); // node 전체 정보를 갖고 있는 variable임
console.log(process); // node 전체 정보를 갖고 있는 variable임

const history = createBrowserHistory(); //history 생성

// const history = require("history").createBrowserHistory; //history 생성

const middlewares = [thunk, routerMiddleware(history)];//history를 middle ware에 추가


if(env === "development"){
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 여러 리듀서를 합치는 과정 
// 여기에 추가할 리듀서를 작성하면 됨 eg) 라우팅, 미들웨어 등등
const reducer = combineReducers({
  user,
  router: connectRouter(history),
  i18nState
});


// 환경에 따라 Reactotron Store를 사용할지 reduxStore를 사용할지 정함.
let store;
if (env === "development"){
  store = initialState => createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));
  // ### A: Reactotron 시도할 때 B부분 안되서 이렇게 시도
  // store = initialState => 
  //       createStore(reducer, compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()));

  // ### B : 이 부분 안되서 A 방법 시도
  // store = initialState => 
  //   Reactotron.createStore(reducer, applyMiddleware(...middlewares));
} else {
  store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));
}

export { history };
export default store();
