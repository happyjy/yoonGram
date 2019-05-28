import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import I18n from "redux-i18n";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "redux/configureStore"
import App from 'components/App';
import { translation } from "translation";



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