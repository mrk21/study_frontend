import { takeEvery } from 'redux-saga'
import { put } from 'redux-saga/effects'

function* incrementAsync(action) {
  try {
    const result = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        action.payload.value % 2 ? reject(action) : resolve({a: 1});
      }, 1000);
    });
    console.log(result);
    yield put({type: 'INCREMENT'});
  }
  catch (e) {
    console.log(e);
    yield put({type: 'ERROR'});
  }
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
