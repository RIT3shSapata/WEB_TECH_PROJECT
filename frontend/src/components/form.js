import React from 'react'
import DatePickerWrapper from './datepicker.js';
import TimePickerWrapper from './timepicker.js';
function Form(){
    return(
        <div>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap" rel="stylesheet"></link>
        <form>
            <label for="details" className='details'>Enter the details</label><br></br>
            <input type="textbox" className='inputplace' name="details" required='required' placehoder='Reason for the booking'></input><br></br>
            <div className="datetime">
            <DatePickerWrapper className='date'></DatePickerWrapper>
            <TimePickerWrapper className='time'></TimePickerWrapper>
            </div>
            <button type="submit" class="btn btn-outline-success">BOOK</button>
        </form>  
        </div>     
    );
}
export default Form;