import React,{useState} from 'react'
import {TimePicker,TimePickerInput} from 'react-datetime-range-super-picker'
import 'react-datetime-range-super-picker/dist/index.css'
const TimePickerWrapper = () => {

    const [hour24, setHour] = useState(22)
    const [minute, setMin] = useState(30)
    // OR use hour (12 hour format), minute and meridian (AM | PM) for props
    // OR for string time use : "HH:mm" ( 24 hrs ) | "hh:mm aa" ( 12 hrs )
  
    const handleTimeUpdate = ({time}) => {
      setHour(time.hour24)
      setMin(time.minute)
    }
  
    return (
        <div>
      <TimePickerInput time={{hour24, minute }} onTimeUpdate={handleTimeUpdate}></TimePickerInput>
      <TimePicker time={{hour24, minute }} 
        onTimeUpdate={handleTimeUpdate} />
        </div>  
    )
  }
  export default TimePickerWrapper;