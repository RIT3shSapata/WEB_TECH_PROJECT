import React, { useEffect, useRef, useState } from 'react';
import DateTimePickerWrapper from './DateTimePicker.js';

import { connect } from 'react-redux';
import localhost from '../apis/localhost';

function Form({ service, user }) {
  const [date, setDate] = useState(new Date());
  const desRef = useRef(null);

  // useEffect(() => {
  //   console.log('Comoponent mounter', user[0]);
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      service: service,
      description: desRef.current.value,
      name: user[0].username,
      flatNo: user[0].flatNo,
      phoneNo: user[0].phoneNo,
      bookingDate: date,
    };

    const res = await localhost.post('/service', data);
    if (res.status === 201) {
      alert('Successful');
      desRef.current.value = '';
      setDate(new Date());
    }
  };

  return (
    <div>
      <script
        src='https://code.jquery.com/jquery-3.4.1.slim.min.js'
        integrity='sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n'
        crossOrigin='anonymous'></script>
      <script
        src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'
        integrity='sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo'
        crossOrigin='anonymous'></script>
      <script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'
        integrity='sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6'
        crossOrigin='anonymous'></script>
      <link rel='preconnect' href='https://fonts.gstatic.com'></link>
      <link
        href='https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap'
        rel='stylesheet'></link>
      <form onSubmit={handleSubmit}>
        <label htmlFor='details' className='details'>
          Enter the details
        </label>
        <br></br>
        <input
          type='textbox'
          className='inputplace'
          ref={desRef}
          name='details'
          required='required'
          placehoder='Reason for the booking'></input>
        <br></br>
        <div className='datetime'>
          <DateTimePickerWrapper
            date={date}
            modifyDate={(newDate) => setDate(newDate)}
          />
        </div>
        <button type='submit' className='btn btn-outline-success'>
          BOOK
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps)(Form);
