import React, { useEffect } from 'react'
import { FaSearch, FaSearchPlus, FaRegPlusSquare } from "react-icons/fa";

const Button = props => {

  let type = props.type

  return(
    <div className='button'>
      <button 
        onClick={props.onClick}
        className={props.className}
      >
        {
          type === 'adicionar' ?
            <FaRegPlusSquare />
          :
            <FaSearch />
        }
        {props.text}
      </button>
    </div>

  )
}

export default Button