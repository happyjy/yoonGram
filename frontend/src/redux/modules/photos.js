
// ## reducer
// imports
// actions
// action creators
// api actions
// initial state
// reducer
// reducer funtions
// exports
// defulat reducer export

// ---
// imports
import { actionCreators as userActions } from "redux/modules/user";

// actions
// action creators
function getFeed() {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(response => {
      if(response.status === 401){
        dispatch(userActions.logout());
      }
      return response.json();
    })
    .then(json => console.log(json))
  }
}
// api actions
// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  switch (action.type){
    default:
      return state;
  }
}
// reducer funtions
// exports
const actionCreators = {
  getFeed
};

export { actionCreators };

// defulat reducer export
export default reducer;