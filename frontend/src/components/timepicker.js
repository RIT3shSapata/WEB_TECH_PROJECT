import React, { useEffect, useState } from 'react';
import { TimePicker, TimePickerInput } from 'react-datetime-range-super-picker';
import 'react-datetime-range-super-picker/dist/index.css';
const TimePickerWrapper = ({ hour, minute, modifyHour, modifyMinute }) => {
  // OR use hour (12 hour format), minute and meridian (AM | PM) for props
  // OR for string time use : "HH:mm" ( 24 hrs ) | "hh:mm aa" ( 12 hrs )

  const handleTimeUpdate = ({ time }) => {
    modifyHour(time.hour24);
    modifyMinute(time.minute);
  };

  return (
    <div>
      {/* <TimePickerInput
        time={{ hour, minute }}
        onTimeUpdate={handleTimeUpdate}></TimePickerInput> */}
      <TimePicker time={{ hour, minute }} onTimeUpdate={handleTimeUpdate} />
    </div>
  );
};
export default TimePickerWrapper;
