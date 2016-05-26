function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'DO_SOMETHING':
      return Object.assign({}, state, action.payload);
    default:
      return Object.assign({}, state);
  }
}

export default rootReducer;
