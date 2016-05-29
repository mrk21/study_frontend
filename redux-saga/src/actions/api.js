let count = 0;

export function fetch() {
  return {
    type: 'FETCH',
    payload: {
      count: ++count
    }
  };
}
