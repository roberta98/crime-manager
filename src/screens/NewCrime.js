import React, { useEffect, useState } from 'react'
import DatePicker from "react-datepicker";
import { connect } from 'react-redux'
import Select from '../components/Select'

import "react-datepicker/dist/react-datepicker.css";

const NewCrime = (props) => {

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
   
  }, [])

  function renderCrimeTypes() {
    return(
      <label>Type of crime</label>
    )
  }

  return(
    <div className='container'>
      <h1 className='homeTitle'>New crime</h1>
      <DatePicker 
        selected={startDate} 
        onChange={date => setStartDate(date)} 
        showTimeSelect 
        dateFormat="Pp" 
      />
    </div>  
  )
}

const mapStateToProps = state => ({
  dataCrime: state.crime
})

export default connect(mapStateToProps)(NewCrime)