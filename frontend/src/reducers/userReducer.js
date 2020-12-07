const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_USER':
      return [...state, action.payload];
    case 'DELETE_USER':
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
