/**
 *   # redux 
 * 
 *   imports
 *   actions
 *   actions creators
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

// reducer export
export default reducer; 