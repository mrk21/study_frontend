import { buffers } from 'redux-saga';
import { take, put, actionChannel } from 'redux-saga/effects';

export default function* channel() {
  const chan = yield actionChannel('FETCH', buffers.sliding(5));
  console.log('channel', chan);
  while (true) {
    const action = yield take(chan);
    console.log('channel', action);
  }
}
