import { delay } from 'redux-saga';
import { spawn, fork, join, call, cancel } from 'redux-saga/effects';

function func() {
  console.log(1.5);
}

function* generator(i) {
  yield call(delay, 1000);
  console.log(yield `-- ${i}`);
  yield* childGenerator(i);
}

function* childGenerator(i) {
  yield call(delay, 2000);
  console.log(yield `---- ${i}`);
}

export default function* nonBlockingCalls() {
  console.log(yield 'call(func) -> {');
  yield call(func);
  console.log(yield '} <- call(func)');
  
  console.log(yield 'fork(generator) -> {');
  yield fork(generator, 'fork(generator)');
  console.log(yield '} <- fork(generator)');
  
  console.log('fork(generator) and join(task) -> {');
  let task = yield fork(generator, 'fork(generator) and join(task)');
  yield join(task);
  console.log(yield '} <- fork(generator) and join(task)');
  
  console.log('spawn(generator) -> {');
  yield spawn(generator, 'spawn(generator)');
  yield join(task);
  console.log(yield '} <- spawn(generator)');
  
  console.log('spawn(generator) and join(task) -> {');
  task = yield spawn(generator, 'spawn(generator) and join(task)');
  yield join(task);
  console.log(yield '} <- spawn(generator) and join(task)');
  
  console.log('fork(generator) and cancel(task) -> {');
  task = yield fork(generator, 'fork(generator) and cancel(task)');
  yield call(delay, 1500)
  yield cancel(task);
  console.log(yield '} <- fork(generator) and cancel(task)');
  
  console.log('spawn(generator) and cancel(task) -> {');
  task = yield spawn(generator, 'spawn(generator) and cancel(task)');
  yield call(delay, 1500)
  yield cancel(task);
  console.log(yield '} <- spawn(generator) and cancel(task)');
}
