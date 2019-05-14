import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import users from 'redux/modules/users';
import Reactotron from "ReactotronConfig";
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
  users,
  router: connectRouter(history)
});


// 환경에 따라 Reactotron Store를 사용할지 reduxStore를 사용할지 정함.
let store;
if (env === "development"){
  store = initialState => 
        createStore(reducer, compose(applyMiddleware(...middlewares), Reactotron.createEnhancer()));
  // store = initialState => 
  //   Reactotron.createStore(reducer, applyMiddleware(...middlewares));
} else {
  store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));
}

export { history };
export default store();
