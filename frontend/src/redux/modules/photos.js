
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
// actions
// action creators
function getFeed() {
  return (dspatch, getState) => {
    const { user: { token } } = getState();
    fetch("/images/", {
      headers: {
        Authorization: `JWT ${token}`
      }
    })
    .then(response => response.json())
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
const actionsCreators = {
  getFeed
};

export { actionsCreators };

// defulat reducer export
export default reducer;