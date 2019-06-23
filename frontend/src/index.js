import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import I18n from "redux-i18n";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore"
import App from 'components/App';
import { translation } from "translation";


console.log('### store.getState()', store.getState())
// console.log("### store.dispatch({type:'shit'})")
// store.dispatch({type:"Shit"});

ReactDOM.render(
  <Provider store={store}>
    <I18n translations={translation} initialLang="en" fallbackLang="en">
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </I18n>
  </Provider>,
  document.getElementById('root')
);