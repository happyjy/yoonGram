/**
 *   # redux 
 * 
 *   imports
 *   actions
 *   actions creators: 리덕스 state를 바꿀때 사용
 *   API action: api호출시 사용

 *   initial state
 *   reducer
 *   reducer function
 *   exports
 *   reducer export
 * 
 * */

// imports

// actions
const SAVE_TOKEN = "SAVE_TOKEN";

// actions creators
function saveToken(token){
  return{
    type: SAVE_TOKEN,
    token
  }
}

// api action
function facebookLogin(access_token) {
  return dispatch => {
    fetch("/users/login/facebook/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log("### facebookLogin json value: ", json)
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log("### facebookLogin err: ", err));
  };
}
  
  //urls.py > re_path(r'^rest-auth/', include('rest_auth.urls')), 코드로 요청하는 것임. 
  //django tivix documents참고  
  function usernameLogin(username, password) {
    return dispatch => {
      fetch("/rest-auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      })
     
      .then(response => response.json())
      .then(json => {
        console.log("### usernameLogin json value: ", json)
        if (json.token) {
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log(err));
  };
}

// initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") ? true : false
};

// reducer
function reducer( state = initialState, action){
  switch (action.type){
    case SAVE_TOKEN:
      return applySetToken(state, action)
    default: 
      return state;
  }
}

// reducer function
function applySetToken(state, action) {
  const { token } = action;
  localStorage.setItem("jwt", token);
  return {
    ...state,
    isLoggedIn: true,
    token
  };
}

// exports
const actionCreators = {
  facebookLogin, 
  usernameLogin
}
export { actionCreators };


// reducer export
export default reducer; 