export function execSaga(saga) {
  return {
    type: 'EXEC_SAGA',
    payload: { saga },
  };
}
