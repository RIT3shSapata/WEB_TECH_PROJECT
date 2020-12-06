import React, { useState } from 'react';

import { DateTimePicker } from 'react-datetime-range-super-picker';
import 'react-datetime-range-super-picker/dist/index.css';

const DateTimePickerWrapper = ({ date, modifyDate }) => {
  //   const [curr_date, setDate] = useState(new Date());
  // OR use JSON object with : day, month, year

  const handleDateUpdate = ({ date }) => {
    // console.log(typeof date.date);
    modifyDate(date.date);
  };

  return <DateTimePicker date={date} onDateTimeUpdate={handleDateUpdate} />;
};

export default DateTimePickerWrapper;
