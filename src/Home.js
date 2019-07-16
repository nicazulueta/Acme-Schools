import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <h2>Home</h2>
      Our most popular school is <Link>---</Link> with - students.
      <br />
      Our top performing school is <Link>---</Link> with an average GPA of -.
    </div>
  )
}

export default Home
