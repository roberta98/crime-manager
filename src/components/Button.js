import React, { useEffect } from 'react'
import { FaSearch, FaSearchPlus, FaRegPlusSquare } from "react-icons/fa";

const Button = props => {

  return(
    <div className='button'>
      <button 
        onClick={props.onClick}
        className={props.className}
      >
        <FaSearch />
        {props.text}
      </button>
    </div>

  )
}

export default Button