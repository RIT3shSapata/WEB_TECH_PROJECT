const serviceReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SERVICE':
      return action.payload;
    default:
      return state;
  }
};

export default serviceReducer;
