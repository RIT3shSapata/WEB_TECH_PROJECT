const announcementsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ANNOUNCEMENTS':
      return action.payload;
    default:
      return state;
  }
};

export default announcementsReducer;
