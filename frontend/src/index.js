import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore"
import 'index.css';
import App from 'App';

import I18n from "redux-i18n";
import { translation } from "translation";

// import "ReactotronConfig";

console.log('### store.getState()')
console.log(store.getState());

console.log("### store.dispatch({type:'shit'})")
store.dispatch({type:"Shit"});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18n translations={translation} initialLang="en" fallbackLang="en">
        <App />
      </I18n>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);