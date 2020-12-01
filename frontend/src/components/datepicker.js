import React,{useState} from 'react'
import {DatePicker,DatePickerInput} from 'react-datetime-range-super-picker'
import 'react-datetime-range-super-picker/dist/index.css'
const DatePickerWrapper = () => {

    const [curr_date, setDate] = useState(new Date())
    // OR use JSON object with : day, month, year
  
    const handleDateUpdate = ({date}) => {
      setDate(date)
    }
    
    return (
        <div>
        <DatePickerInput weekStartsOn={0} 
        date={curr_date}
        onDateUpdate={handleDateUpdate}></DatePickerInput>
            <DatePicker weekStartsOn={0} 
        date={curr_date}
        onDateUpdate={handleDateUpdate} />
        </div>
    )
  }
export default DatePickerWrapper;