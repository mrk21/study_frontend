import { delay } from 'redux-saga';
import { fork, join, call } from 'redux-saga/effects';

function func() {
  console.log(1.5);
}

function* generator(i) {
  yield call(delay, 1000);
  console.log(yield i);
}

export default function* api() {
  console.log(yield 1);
  yield call(func);
  console.log(yield 2);
  
  yield fork(generator, 3);
  console.log(yield 4);
  
  const task = yield fork(generator, 5);
  yield join(task);
  console.log(yield 6);
}
