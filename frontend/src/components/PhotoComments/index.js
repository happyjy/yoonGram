import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

const mapDispatchToProps = (dispatch, ownProps) => {
  // console.log("###ownProps: ",ownProps);
  debugger;
  return {
    handleCommentsClick: (photoCommentId) => {
      debugger;
      dispatch(photoActions.removeCommentPhoto(photoCommentId));
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);