import { takeEvery } from 'redux-saga';
import { select } from 'redux-saga/effects';

export default function* select_() {
  // takeEvery(actionType, generator) is as equal to shown below:
  // 
  // while (true) {
  //   const action = yield take(actionType);
  //   yield* generator(action);
  // }
  yield* takeEvery('FETCH', function* (action) {
    console.log('select', action);
    const api = yield select(state => state.api);
    console.log('select', api);
  });
}
