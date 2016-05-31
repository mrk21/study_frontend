import { fork } from 'redux-saga/effects';
import hello from './hello';
import select from './select';
import api from './api';

export default function* root() {
  yield fork(hello);
  yield fork(select);
  yield fork(api);
}
