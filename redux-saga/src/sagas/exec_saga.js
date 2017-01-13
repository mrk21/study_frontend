import { put, take } from 'redux-saga/effects';

export default function* execSaga() {
  while (true) {
    const { payload: { saga } } = yield take('EXEC_SAGA');
    yield* saga();
  }
}
