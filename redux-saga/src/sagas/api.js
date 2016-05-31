import { take, put } from 'redux-saga/effects';

export default function* api() {
  while (true) {
    const action = yield take('FETCH'); // wait until receiving `FETCH` action
    console.log('api', action);
    try {
      const data = yield new Promise((resolve, reject) => {
        setTimeout(() => {
          if (action.payload.count % 2 === 0) {
            resolve({value: action.payload.count});
          }
          else {
            reject({message: 'invalid count'})
          }
        }, 1000);
      });
      console.log('api', data);
      yield put({type: 'RECEIVE', payload: { data }});
    }
    catch (error) {
      console.log('api', error);
      yield put({type: 'ERROR', payload: { error }});
    }
  }
}
