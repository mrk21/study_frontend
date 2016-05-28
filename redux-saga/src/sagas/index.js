import { takeEvery } from 'redux-saga'
import { select, put } from 'redux-saga/effects'

function* selectSaga(action) {
  const a = yield select(state => state);
  console.log(a);
}

function* promiseSaga(action) {
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

function* watchSaga() {
  yield* takeEvery('DO_SOMETHING', promiseSaga);
}

function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield [
    helloSaga(),
    watchSaga(),
    selectSaga()
  ];
}
