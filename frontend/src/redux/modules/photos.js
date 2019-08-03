
// ## reducer
// imports
// actions
// action creators
// api actions
// initial state
// reducer
// reducer funtions
// exports
// default reducer export

// ---
// imports
import { actionCreators as userActions } from "redux/modules/user";

// actions
const SET_FEED = "SET_FEED";
const LIKE_PHOTO = "LIKE_PHOTO";
const UNLIKE_PHOTO = "UNLIKE_PHOTO";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_COMMENT = "REMOVE_COMMENT";

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

function addComment(photoId, comment){
  return {
    type: ADD_COMMENT,
    photoId,
    comment
  }
}

function removeComment(commentId, comment){
  return {
    type: REMOVE_COMMENT,
    commentId,
    comment
  }
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
      //debugger;
      dispatch(setFeed(json));
    })
  }
}

function likePhoto(photoId) {
  return (dispatch, getState) => {
    //debugger;
    dispatch(doLikePhoto(photoId));
    const { user: { token } } = getState();
    fetch(`/images/${photoId}/likes/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doUnlikePhoto(photoId));
      }
    });
  };
}

function unlikePhoto(photoId) {
  return (dispatch, getState) => {
    //debugger;
    dispatch(doUnlikePhoto(photoId));
    const { user: { token } } = getState();
    fetch(`/images/${photoId}/unlikes/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`
      }
    }).then(response => {
      //debugger;
      if (response.status === 401) {
        dispatch(userActions.logout());
      } else if (!response.ok) {
        dispatch(doLikePhoto(photoId));
      }
    });
  };
}

function commentPhoto(photoId, message) {
  return (dispatch, getState) => {
    const { user: { token } } = getState();
    fetch(`/images/${photoId}/comment/`, {
      method: "POST",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    })
      .then(response => {
        if (response.status === 401) {
          dispatch(userActions.logout());
        }
        debugger;
        console.log("### photos > commentPhoto > response.json(): ", response);
        return true;
      })
      .then(json => {
        debugger;
        if (json.message) {
          dispatch(addComment(photoId, json));
        }
      });
  };
}

function removeCommentPhoto(photoCommentId, message) {
  return (dispatch, getState) => {
    //TODO 선 comment를 지우는 작업이 필요.
    const { user: { token } } = getState();
    fetch(`/images/${photoCommentId}/removeCommentPhoto/`, {
      method: "DELETE",
      headers: {
        Authorization: `JWT ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message
      })
    })
      .then(response => {
        debugger;
        if (response.status === 401) {
          dispatch(userActions.logout());
        } else if (!response.ok) {
          debugger;
          //TODO 제대로 안지워 졌으면 다시 살리는 로직이 필요
          // dispatch(doLikePhoto(photoId));
        }
      })
  };
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
  //debugger;
  switch (action.type){
    case SET_FEED:
      return applySetFeed(state, action);
    case LIKE_PHOTO:
      return applyLikePhoto(state, action);
    case UNLIKE_PHOTO:
      return applyUnlikePhoto(state, action);
    case ADD_COMMENT:
      debugger;
      return applyAddComment(state, action);
    case REMOVE_COMMENT:
      return applyRemoveComment(state, action);
    default:
      return state;
  }
}

// reducer funtions
function applySetFeed(state, action) {
  //debugger;
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

function applyAddComment(state, action){
  debugger;
  const { photoId, comment } = action;
  const { feed } = state;
  //좋아요, 싫어요와 비슷한 작업(state에 댓글내용을 update한다.)
  console.log("### reducer function : ", state, action);
  const updatedFeed = feed.map(photo => {
    if (photo.id === photoId) {
      return { 
        ...photo,
        comments: [...photo.comments, comment]
      };
    }
    return photo;
  });
  return { ...state, feed: updatedFeed };
}

function applyRemoveComment(state, actions){
  debugger;
}

// exports
const actionCreators = {
  getFeed,
  likePhoto,
  unlikePhoto,
  commentPhoto,
  removeCommentPhoto
};


export { actionCreators };

// default reducer export
export default reducer;