import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

function Home ({schools, students}) {
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
    <div>
      <h2>Home</h2>
  Our most popular school is {

<Link to={`/schools/${largest.id}`}>{popularName}</Link>}
      with ( {popularCount} ) students.
      <br />
      Our top performing school is <Link>---</Link> with an average GPA of -.
    </div>
  )
}

const mapStateToProps = ({schools, students}) => {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Home)
