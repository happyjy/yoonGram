import React from 'react';
import { Route, Switch } from "react-router-dom";
import styles from "./styles.module.scss";
import Footer from "components/Footer";

const App = props => [
  //Nav,
  props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoute key={2}/>,
  <Footer key={3}/>
];

const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={() => "feed"}></Route>
    <Route exact path="/explore" render={() => "explore"}></Route>
  </Switch>
)

const PublicRoute = props => (
  <Switch>
    <Route exact path="/" render={() => "login"} />
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