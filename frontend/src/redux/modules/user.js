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
function facebookLogin(access_token){
  return dispatch => {
    fetch("/users/login/facebook/", {
      method: "POST",
      header: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        access_token
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log("### json value: ", json)
        if(json.token){
          localStorage.setItem("jwt", json.token);
          dispatch(saveToken(json.token));
        }
      })
      .catch(err => console.log("### err: ", err));
  };
}



// initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer
function reducer( state = initialState, action){
  switch (action.type){
    case SAVE_TOKEN:
      return applySetToekn(state, action)
    default: 
      return state;
  }
}

// reducer function
function applySetToekn(state, action){
  const { token } = action;
  return {
    ...state,
    isLoggedIn: true,
    token
  }
}

// exports
const actionCreators = {
  facebookLogin
}
export { actionCreators };


// reducer export
export default reducer; 