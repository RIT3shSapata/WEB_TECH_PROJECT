import React, { useEffect, useState } from 'react';

import './bookings.css';
import OutlinedCard from './Card';
import { connect } from 'react-redux';
import { fetchServices } from '../../actions';

function BookingAdmin({ services, fetchServices }) {
  const [renderData, setRenderData] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  useEffect(() => {
    setRenderData(
      services.map((service) => {
        return <OutlinedCard service={service} />;
      })
    );
  }, [services]);

  return (
    <div>
      <div>
        <div className='justify-content-lg-center'>BOOKINGS</div>
      </div>

      {renderData.map((service) => service)}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { services: state.services };
};

export default connect(mapStateToProps, { fetchServices })(BookingAdmin);
