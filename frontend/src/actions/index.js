// import jsonPlaceholder from '../apis/jsonPlaceholder';
import localhost from '../apis/localhost';

export const fetchUser = (token) => async (dispatch) => {
    try {
        const response = await localhost.get(`/user/me`, {
            headers: { token: token },
        });

        dispatch({ type: 'FETCH_USER', payload: response.data });
    } catch (error) {
        console.log('Error', error);
    }
};

export const deleteUser = () => (dispatch) => {
    dispatch({ type: 'DELETE_USER', payload: [] });
};

export const fetchNotification = (flatNo) => async (dispatch) => {
    const response = await localhost.get(`/notification/${flatNo}`);

    dispatch({ type: 'FETCH_NOTIFICATION', payload: response.data });
};

export const fetchServices = () => async (dispatch) => {
    const response = await localhost.get('/service');

    dispatch({ type: 'FETCH_SERVICE', payload: response.data });
};

export const fetchAnnouncements = () => async (dispatch) => {
    const response = await localhost.get('/announcements');

    dispatch({ type: 'FETCH_ANNOUNCEMENTS', payload: response.data });
};
