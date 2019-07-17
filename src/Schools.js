import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

const Schools = (schools) => {
  return (
    <ul>
      {
        schools.schools.schools.map( school => <li key={ school.id }>
          <Link to={`/schools/${school.id}`}>{ school.name }</Link>
        <br />
        Student Count
        <br />
        <select name='addStudent'>
              <option>Add Student</option>
              {schools.students.students.map(student => <option>{student.firstName} {student.lastName}</option>)}
            </select>
        </li>)
      }
    </ul>
  );
};

const mapStateToProps = ({ schools, students })=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(Schools);
