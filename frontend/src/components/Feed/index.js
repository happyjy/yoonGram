import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos"

//mapStateToProps, mapDispatchToProps에 return value는 container에서 this.props에서 확인 가능하다.(이게 react-redux 모듈을 통해서 가능한것 같다.)
const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);