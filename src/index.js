import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';
import sagas from './sagas';
import './index.less';
import Home from './components/home';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);

// render the application
render(
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
