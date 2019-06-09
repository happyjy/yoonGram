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

// actions creators

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
      .then(json => console.log("### json value: ", json))
      .catch(err => console.log("### err: ", err));
  };
}



// initial state
const initialState = {
  isLoggedIn: localStorage.getItem("jwt") || false
};

// reducer
function reducer( state = initialState, actions){
  switch (actions.type){
    default: 
      return state;
  }
}

// reducer function

// exports
const actionCreators = {
  facebookLogin
}
export { actionCreators };


// reducer export
export default reducer; 