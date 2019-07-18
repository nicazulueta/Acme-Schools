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

  // break //

  return (
    <div>
      <h2>Home</h2>
  Our most popular school is {

<Link to={`/schools/${largest.id}`}>{popularName}</Link>}
      with ( {popularCount} ) students.
      <br />
      Our top performing school is <Link>---</Link> with an average GPA of -.
      <br />
      <br />
      <div id='info'>
        <h4>Can Do:</h4>
          <ul>
            <li>List schools</li>
            <li>List students</li>
            <li>List single school detail (including students and count)</li>
            <li>Create student</li>
            <li>Delete student</li>
            <li>Add student to a school</li>
            <li>Remove student from a school</li>
            <li>Show the most popular school</li>
          </ul>
          <br />
          <h4>To Do:</h4>
          <ul>
            <li>Show school with the highest GPA</li>
            <li>Enroll student on creation / on school pages</li>
            <li>Add validation and other error handling</li>
            <li>Permanently save data to the database</li>
            <li>Actually make it look nice (in Prof's words: "it's not going to win any style awards")</li>
          </ul>
      </div>
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
