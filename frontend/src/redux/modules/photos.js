
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
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";

// action creators
function setFeed(feed) {
  return {
    type: SET_FEED,
    feed
  };
}

function doLikePhoto(photoId) {
  return {
    type: LIKE_PHOTO,
    photoId
  };
}

function doUnlikePhoto(photoId) {
  return {
    type: UNLIKE_PHOTO,
    photoId
  };
}

// api actions
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
      // console.log("### getFeed() > response: ", response);
      return response.json();
    })
    .then(json => {
      // console.log("### getFeed() > json: ", json);
      dispatch(setFeed(json));
    })
  }
}

function likePhoto(photoId){
  return(dispatch, getState) => {
    dispatch(doLikePhoto(photoId))
  }
}

function unlikePhoto(photoId){
  return(dispatch, getState) => {
    dispatch(doUnlikePhoto(photoId))
  }
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  switch (action.type){
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyUnlikePhoto(state, action);
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

function applyLikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: true, like_count: photo.like_count + 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

function applyUnlikePhoto(state, action) {
  const { photoId } = action;
  const { feed } = state;
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

// exports
const actionCreators = {
  getFeed,
  likePhoto,
  unlikePhoto
};


export { actionCreators };

// defulat reducer export
export default reducer;

// {
//   type:'LIKE_PHOTO',
//   photoId: 11
// }