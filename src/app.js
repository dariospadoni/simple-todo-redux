import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Containers/App';
import reducer from './Containers/App/reducer';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    {<App />}
  </Provider>,
  MOUNT_NODE
);
