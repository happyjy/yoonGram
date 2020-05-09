import { connect } from 'react-redux';
import Container from './container';

const mapStateToProps = (state, ownProps) => {
	// console.log("### App/index.js check state : ", state);
	const { user, router: { location } } = state;

	return {
		isLoggedIn: user.isLoggedIn,
		pathname: location.pathname //이 value를 통해서 앱 컴포넌트는 location prop를 인지한다.
	};
};

export default connect(mapStateToProps)(Container);
