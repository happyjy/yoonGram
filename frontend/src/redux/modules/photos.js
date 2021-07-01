// ## reducer
// imports
//-----------------
// actions          : CONST VALUE
// action creators  : return value - { type: actions, dispatch로 받은 value(=actions creator의 첫번째 value)}
//-----------------
// api actions      : export 대상/ http request/response/ response 받은 후 dispatch(actions creator function) 호출
// initial state
//-----------------
// reducer          : export 대상
// reducer funtions : reducer function return value에서 'reducerfunctions 호출
//-----------------
// exports actionCreators = { api actions }
// default reducer export

/*
    # flow 

    1. component에서 "api actions" 호출
        1.1. connect 객체에 의해서 component에서 호출
        1.2. api actions에서 http Request: fetch
        1.3. http response: then에서 dispatch("actions creators function")호출
    2. "reducer" 함수 호출
        2.1. api actions response에서 dispatch 호출에 의해서 호출됨
        2.2. reducer의 첫번째 인자 type("actions")에 의해서 수행될 "reducer function"이 수행
    3. "reducer function" 함수 호출
        3.1. return value는 dispatch 함수에 전달되서 component에 props로 전달된다.
 */

/* 
   # 
   index.js 
       : import actionCreator of redux
       : export default connect(mapStateToProps, mapDispatchToProps)(Container); (5)
       ㄴ container.js 
            : this.props[actionCreator function] 호출 (1)

    photos.js
        ㄴ api actions 호출 (2)
            : response에서 dispatch("actions creators function") 호출
        ㄴ reducer 호출 (3)
            : type에 해당하는 "reducer function" 호출 
        ㄴ reducer function 호출 (4)
            : return value는 "api actions" dispatch 함수의 첫번째 인자까지 전달되어 
            Container[(5)] 까지 전달
 */

/*
 
 # api actions function이 호출 되기 직전 코드 
    * api actions function에서 debugger 걸고 확인 가능

 function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {

          //action 함수가 api actions function 함수
          //첫, 두번째 파라미터를 보면 dispatch와 getState를 넘기는 것을 확인 할 수 있다.
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

 
 */

// ---
// imports
import { actionCreators as userActions } from 'redux/modules/user';

// actions
const SET_FEED = 'SET_FEED';
const LIKE_PHOTO = 'LIKE_PHOTO';
const UNLIKE_PHOTO = 'UNLIKE_PHOTO';
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';

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

function addComment(photoId, comment) {
	return {
		type: ADD_COMMENT,
		photoId,
		comment
	};
}

function removeComment(photoId, photoCommentId) {
	return {
		type: REMOVE_COMMENT,
		photoId,
		photoCommentId
	};
}

// api actions
function getFeed() {
	return (dispatch, getState) => {
		debugger;
		const { user: { token } } = getState();
		fetch('/images/', {
			headers: {
				Authorization: `JWT ${token}`
			}
		})
			.then((response) => {
				if (response.status === 401) {
					dispatch(userActions.logout());
				}
				// console.log("### getFeed() > response: ", response);
				return response.json();
			})
			.then((json) => {
				// console.log("### getFeed() > json: ", json);
				dispatch(setFeed(json));
			});
	};
}

function likePhoto(photoId) {
	return (dispatch, getState) => {
		dispatch(doLikePhoto(photoId));
		const { user: { token } } = getState();
		fetch(`/images/${photoId}/likes/`, {
			method: 'POST',
			headers: {
				Authorization: `JWT ${token}`
			}
		}).then((response) => {
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
		dispatch(doUnlikePhoto(photoId));
		const { user: { token } } = getState();
		fetch(`/images/${photoId}/unlikes/`, {
			method: 'DELETE',
			headers: {
				Authorization: `JWT ${token}`
			}
		}).then((response) => {
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
			method: 'POST',
			headers: {
				Authorization: `JWT ${token}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				message
			})
		})
			.then((response) => {
				if (response.status === 401) {
					dispatch(userActions.logout());
				}
				return response.json();
			})
			.then((json) => {
				if (json.message) {
					dispatch(addComment(photoId, json));
				}
			});
	};
}

function removeCommentPhoto(photoId, photoCommentId) {
	return (dispatch, getState) => {
		//TODO 선 comment를 지우는 작업이 필요.
		const { user: { token } } = getState();
		fetch(`/images/${photoCommentId}/removeCommentPhoto/`, {
			method: 'DELETE',
			headers: {
				Authorization: `JWT ${token}`,
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.status === 401) {
				dispatch(userActions.logout());
			} else if (!response.ok) {
				//dispatch로 reducer function을 호출 함으로
				//변경된 state기반으로
				//TODO 제대로 안지워 졌으면 다시 살리는 로직이 필요
				// dispatch(doLikePhoto(photoId));
			}
			dispatch(removeComment(photoId, photoCommentId));
		});
	};
}

// initial state
const initialState = {};

// reducer
function reducer(state = initialState, action) {
	switch (action.type) {
		case SET_FEED:
			//reducer function
			return applySetFeed(state, action);
		case LIKE_PHOTO:
			return applyLikePhoto(state, action);
		case UNLIKE_PHOTO:
			return applyUnlikePhoto(state, action);
		case ADD_COMMENT:
			return applyAddComment(state, action);
		case REMOVE_COMMENT:
			return applyRemoveComment(state, action);
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
	const updatedFeed = feed.map((photo) => {
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
	const updatedFeed = feed.map((photo) => {
		if (photo.id === photoId) {
			return { ...photo, is_liked: false, like_count: photo.like_count - 1 };
		}
		return photo;
	});
	return { ...state, feed: updatedFeed };
}

function applyAddComment(state, action) {
	const { photoId, comment } = action;
	const { feed } = state;
	//좋아요, 싫어요와 비슷한 작업(state에 댓글내용을 update한다.)
	console.log('### reducer function : ', state, action);
	const updatedFeed = feed.map((photo) => {
		if (photo.id === photoId) {
			return {
				...photo,
				comments: [ ...photo.comments, comment ]
			};
		}
		return photo;
	});
	return { ...state, feed: updatedFeed };
}

function applyRemoveComment(state, action) {
	const { photoId, photoCommentId } = action;
	const { feed } = state;

	const updatedFeed = feed.map((photo) => {
		if (photo.id === photoId) {
			const result = photo.comments.filter((comment) => {
				return comment.id !== photoCommentId;
			});
			photo.comments = result;
		}
		debugger;
		return photo;
	});
	debugger;
	return { ...state, feed: updatedFeed };
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
