import React, { useEffect, useState } from 'react';
import './announcements.css';
import { Container, Card } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchAnnouncements } from '../actions';

import AnnouncementCard from './AnnouncementCard';

function Announcements({ announcements, fetchAnnouncements }) {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  useEffect(() => {
    setRenderData(
      announcements.map((announcement) => {
        return <AnnouncementCard announcement={announcement} />;
      })
    );
  }, [announcements]);

  return (
    <body>
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'
        integrity='sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk'
        crossorigin='anonymous'></link>
      <link rel='preconnect' href='https://fonts.gstatic.com'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
        rel='stylesheet'></link>
      <div>
        <div className='justify-content-lg-center'> ANNOUNCEMENTS </div>{' '}
      </div>
      <Container>{renderData.map((announcement) => announcement)}</Container>
    </body>
  );
}

const mapStateToProps = (state) => {
  return { announcements: state.announcements };
};

export default connect(mapStateToProps, { fetchAnnouncements })(Announcements);
