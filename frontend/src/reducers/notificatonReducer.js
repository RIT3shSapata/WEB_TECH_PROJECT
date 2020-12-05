const notificationReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_NOTIFICATION':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default notificationReducer;
