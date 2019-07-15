import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div id='links'>
      <Link to='/'><h1>Acme Schools</h1></Link>
      <Link to='/schools'>Schools</Link>
      <Link to='/students'>Students</Link>
      <Link to='/mostpopularplaceholder'>Most Popular</Link>
      <Link to='/topschoolplaceholder'>Top School</Link>
    </div>
  )
}

export default Header
