import { call } from 'redux-saga/effects';

function func() {
  console.log(1.5);
}

export default function* api() {
  console.log(yield 1);
  yield call(func);
  console.log(yield 2);
}
