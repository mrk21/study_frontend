import { fork } from 'redux-saga/effects';
import hello from './hello';
import select from './select';
import api from './api';
import nonBlockingCalls from './non_blocking_calls';

export default function* root() {
  yield fork(hello);
  yield fork(select);
  yield fork(api);
  yield fork(nonBlockingCalls);
}
