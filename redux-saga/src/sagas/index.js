import { takeEvery } from 'redux-saga';
import { fork, select, put } from 'redux-saga/effects';

function* selectSaga(action) {
  const api = yield select(state => state.api);
  console.log(api);
}

function* promiseSaga(action) {
  try {
    const data = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        if (action.payload.count % 2 === 0) {
          resolve('data');
        }
        else {
          reject('error')
        }
      }, 1000);
    });
    console.log(data);
    yield put({type: 'RECEIVE', payload: { data }});
  }
  catch (error) {
    console.log(error);
    yield put({type: 'ERROR', payload: { error }});
  }
}

function* watchSaga() {
  yield* takeEvery('FETCH', promiseSaga);
}

function* helloSaga() {
  console.log('Hello Sagas!');
}

export default function* rootSaga() {
  yield fork(helloSaga);
  yield fork(watchSaga);
  yield fork(selectSaga);
}
