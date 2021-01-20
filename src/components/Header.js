import React from 'react'
import { Link } from 'react-router-dom'

const header = () => {
  return(
    <header className='header'>
      <Link to='/'>
        <div className='containerTitle'>
          <h2 className='title'>CRIME</h2>
          <h3 className='subTitle'>MANAGER</h3>
        </div>
      </Link>
    </header>
  )
}

export default header