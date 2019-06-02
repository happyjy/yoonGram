import { connect } from "react-redux";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
  const { user } = state;
  console.log("### jyoon check state : ", state);
  console.log("### jyoon check {state} : ", {state});
  console.log("### jyoon check user : " , user);
  
  return {
    isLoggedIn: user.isLoggedIn
  };
};

export default connect(mapStateToProps)(Container);