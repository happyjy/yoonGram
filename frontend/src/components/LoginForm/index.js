import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user"

//Study - 액션을 리듀서에게 디스패치하는 방법
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    //이 함수를 불렀을때 user actions facebook login을 디스패치
     facebookLogin: acess_token => {
       dispatch(userActions.facebookLogin(acess_token))
     }
  }
} 

export default connect(null, mapDispatchToProps)(Container);