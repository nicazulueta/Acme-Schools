import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function Header ({schools, students}) {
  let largest = ''
  const filterPopular = schools.schools.map(school => {
    return (students.students.filter(student => {return student.schoolId === school.id}).length)
  })
  const mostPopular = Math.max(...filterPopular)
  function findLargest (num) {
    return num === mostPopular
  }
  const index = filterPopular.findIndex(findLargest)
  for (let i = 0; i < schools.schools.length; i++) {
    if (i === index) {
      largest = schools.schools[i]
    }
  }
  const popularName = largest.name
  const popularCount = mostPopular.toString()
  return (
    <div id='links'>
      <Link to='/'><h1>Acme Schools</h1></Link>
      <Link to='/schools'>Schools ( {schools.schools.length} )</Link>
      <Link to='/students'>Students ( {students.students.length} )</Link>
      <Link to={`/schools/${largest.id}`}>Most Popular ({popularName})</Link>
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
