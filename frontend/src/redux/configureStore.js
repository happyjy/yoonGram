import { createStore, combineReducers } from "redux";
import users from './modules/users';

// 여러 리듀서를 합치는 과정 
// 여기에 추가할 리듀서를 작성하면 됨 eg) 라우팅, 미들웨어 등등
const reducer = combineReducers({
  users
});

let store = initialState => createStore(reducer);

export default store();
