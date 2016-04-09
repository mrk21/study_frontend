import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducers';
import Hoge from 'components/hoge'

let store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Hoge />
  </Provider>,
  document.getElementById('root')
)
