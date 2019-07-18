import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Schools = ({schools, students}) => {
  let count;
  return (
    <div id='school-list'>
      <ul>
      {
        schools.schools.map(school => <li key={school.id}>
          <Link to={`/schools/${school.id}`}>{school.name}</Link>
          <br />
          Student Count: {(students.students.filter(student => {return student.schoolId === school.id})).length}
          </li>
      )}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ schools, students }) => {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Schools);
