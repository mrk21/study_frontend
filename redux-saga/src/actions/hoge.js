export function doSomething(value) {
  return {
    type: 'DO_SOMETHING',
    payload: {
      value: value
    }
  };
}
