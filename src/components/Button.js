import React, { useEffect } from 'react'
import { FaSearch, FaSearchPlus, FaRegPlusSquare } from "react-icons/fa";

const Button = props => {

  function renderIcon(){
    switch(props.type){
      case 'adicionar': 
        return <FaRegPlusSquare /> 
      default:
          return  <FaSearch /> 
    }
  }

  return(
    <button 
      onClick={props.onClick}
      className={props.className}
    >
      {renderIcon()}
      {props.text}
    </button>
  )
}

export default Button