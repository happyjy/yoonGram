import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import users from 'redux/modules/users';
const env = process.env.NODE_ENV;
console.log(process); // node 전체 정보를 갖고 있는 variable임

const middlewares = [thunk];

if(env === "development"){
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

// 여러 리듀서를 합치는 과정 
// 여기에 추가할 리듀서를 작성하면 됨 eg) 라우팅, 미들웨어 등등
const reducer = combineReducers({
  users
});

let store = initialState => 
  createStore(reducer, applyMiddleware(...middlewares));

export default store();
