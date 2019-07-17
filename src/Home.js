import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function Home ({schools, students}) {
  return (
    <div>
      <h2>Home</h2>
  Our most popular school is {

      <Link>---</Link>}
      with - students.
      <br />
      Our top performing school is <Link>---</Link> with an average GPA of -.
    </div>
  )
}

const mapStateToProps = function ({schools, students}) {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Home)
