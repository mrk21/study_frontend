import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

function* watchIncrementAsync() {
  yield* takeEvery('DO_SOMETHING', incrementAsync);
}

function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ];
}
