const initialState = {
  state: 'initialized',
  data: null,
  error: null
};

export default function api(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE':
      return Object.assign({}, state, action.payload, {error: initialState.error, state: 'received'});
    case 'ERROR':
      return Object.assign({}, state, action.payload, {state: 'error'});
    case 'FETCH':
      return Object.assign({}, state, {state: 'fetching'});
    default:
      return Object.assign({}, state);
  }
}
