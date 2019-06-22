import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  console.log("### App/index.js check state : ", state);
  console.log("### App/index.js check {state} : ", {state});
  console.log("### App/index.js check user : " , user);
  
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);