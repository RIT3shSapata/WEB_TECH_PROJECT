import React, { useEffect, useState } from 'react';
import { DatePicker, DatePickerInput } from 'react-datetime-range-super-picker';
import 'react-datetime-range-super-picker/dist/index.css';
const DatePickerWrapper = ({ date, modifyDate }) => {
  // OR use JSON object with : day, month, year

  const handleDateUpdate = ({ date }) => {
    modifyDate(date);
  };

  return (
    <div>
      <DatePickerInput
        weekStartsOn={0}
        date={date}
        onDateUpdate={handleDateUpdate}></DatePickerInput>
      <DatePicker
        weekStartsOn={0}
        date={date}
        onDateUpdate={handleDateUpdate}
      />
    </div>
  );
};
export default DatePickerWrapper;
