import React from 'react';
import propTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.module.scss";
import Footer from "components/Footer";
import Auth from "components/Auth";
import Navigation from "components/Navigation";

const App = props => [
  //Nav,
  props.isLoggedIn ? <Navigation key={1}/> : null,
  props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoute key={2}/>, <Footer key={3}/>
];

App.propTypes = {
  isLoggedIn: propTypes.bool.isRequired
}

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "feed"}></Route>
    <Route exact path="/explore" render={() => "explore"}></Route>
  </Switch>
)

const PublicRoute = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/forgot" render={() => "password"} />
  </Switch>
)

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