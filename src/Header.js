import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function Header (schools) {
  return (
    <div id='links'>
      <Link to='/'><h1>Acme Schools</h1></Link>
      <Link to='/schools'>Schools ( {schools.schools.schools.length} )</Link>
      <Link to='/students'>Students ( {schools.students.students.length} )</Link>
      <Link to='/mostpopularplaceholder'>Most Popular</Link>
      <Link to='/topschoolplaceholder'>Top School</Link>
    </div>
  )
}

const mapStateToProps = ({ schools, students })=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Header);
