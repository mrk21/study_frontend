import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers';
import createSagaMiddleware from 'redux-saga'
import Hoge from 'components/hoge';
import rootSaga from './sagas';


const debugToolMiddleware = window.devToolsExtension ? window.devToolsExtension() : f => f;
const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  debugToolMiddleware
);
const store = createStore(rootReducer, {}, enhancer);
sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <Hoge />
  </Provider>,
  document.getElementById('root')
);
