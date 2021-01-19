import React, { useEffect, useState } from 'react'


//FaSortAmountDownAlt, FaSearch, FaRegPlusSquare, FaSearchPlus

const Select = props => {

  let selectType =  props.selectType
  let data = props.data

  function renderOption(item){
    switch(selectType){
      case 'orderBy': 
        return(
          <option key={item.id_crime_type} value={item.id_crime_type}>{item.tx_type}</option>
        )
      case 'filter':
        return(
          <option key={item} value={item}>{item}</option>
        )
      default:
        return <option key={0} value={0}></option>
    }
  }

  return(
    <div>
      <select onChange={props.onChange}>
        <option value='-1'>{props.placeholder}</option>
        {props.data.map(item => (
          renderOption(item)
        ))}
      </select>
    </div>
      
  )
}


export default Select