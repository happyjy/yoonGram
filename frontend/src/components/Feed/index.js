import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "redux/modules/photos";

//mapStateToProps, mapDispatchToProps에 return value는 container에서 this.props에서 확인 가능하다.(이게 react-redux 모듈을 통해서 가능한 것임.)
const mapStateToProps = (state, ownProps) => {
  const { photos: { feed } } = state;
  console.log("### Feed > index.js > mapStateToProps > state arguments: ", state);
  console.log("### Feed > index.js > mapStateToProps > ownProps arguments: ", ownProps);
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("### Feed > index.js > mapDispatchToProps > photoActions.getFeed() arguments: ", photoActions);
  console.log("### Feed > index.js > mapDispatchToProps > ownProps arguments: ", ownProps);
  return {
    getFeed: () => {
      dispatch(photoActions.getFeed());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);