import React from 'react';
import propTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import Footer from 'components/Footer';
import Auth from 'components/Auth';
import Navigation from 'components/Navigation';
import Feed from 'components/Feed';
import Explore from 'components/Explore';
import Search from 'components/Search';

const App = (props) => [
	//Nav,
	props.isLoggedIn ? <Navigation key={1} /> : null,
	props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoute key={2} />,
	<Footer key={3} />
];

App.propTypes = {
	isLoggedIn: propTypes.bool.isRequired
};

const PrivateRoutes = (props) => (
	<Switch>
		<Route key='1' exact path='/' component={Feed} />
		<Route key='2' exact path='/explore' component={Explore} />
		<Route path='/search/:searchTerm' component={Search} />
		{/* <Route key="2" exact path="/explore" render={() => "explore!"}></Route> */}
	</Switch>
);

const PublicRoute = (props) => (
	<Switch>
		<Route path='/' component={Auth} />
		<Route path='/recover' render={() => 'recover password'} />
	</Switch>
);

// class App extends Component {
//   render() {
//     return (
//       <div className={styles.App}>
//         <h1> Hello react </h1>
//         <Switch>
//           <Route exct path="/" render={() => "hello!"} />
//           <Route path="/login" render={() => "login!"} />
//         </Switch>
//         <Footer/>
//       </div>
//     );
//   }
// }

export default App;
