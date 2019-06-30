
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
const SET_FEED = "SET_FEED";

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
      console.log("### getFeed() > response: ", response);
      return response.json();
    })
    .then(json => {
      console.log("### getFeed() > json: ", json);
      dispatch(setFeed(json));
    })
  }
}

function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}
// api actions
// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  switch (action.type){
    case SET_FEED:
      return applySetFeed(state, action);
    default:
      return state;
  }
}

// reducer funtions
function applySetFeed(state, action) {
  const { feed } = action;
  return {
    ...state,
    feed
  };
}

// exports
const actionCreators = {
  getFeed
};

export { actionCreators };

// defulat reducer export
export default reducer;