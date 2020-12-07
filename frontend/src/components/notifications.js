import React, { useEffect, useState } from 'react';
import './bookings.css';

import { connect } from 'react-redux';
import { fetchNotification } from '../actions';
import OutlinedCard from './OutlinedCard';

function Notifications({ notifications, fetchNotification, user }) {
  const [updatedNotifications, setUpdatedNotifications] = useState([]);

  useEffect(() => {
    // console.log(user[0]);
    fetchNotification(user[0].flatNo);
  }, []);

  useEffect(() => {
    const renderData = notifications.map((notification) => {
      return <OutlinedCard notification={notification} />;
    });
    setUpdatedNotifications(renderData);
  }, [notifications]);

  // console.log('>>>>UPDATED', notifications);

  return (
    <div>
      <div>
        <link rel='preconnect' href='https://fonts.gstatic.com'></link>
        <link
          href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
          rel='stylesheet'></link>
        <div className='justify-content-lg-center'>NOTIFICATIONS</div>
      </div>

      {updatedNotifications.map((notification) => notification)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { notifications: state.notifications, user: state.user };
};

export default connect(mapStateToProps, { fetchNotification })(Notifications);
