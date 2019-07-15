import React from 'react';
import { connect } from 'react-redux';

const Schools = (schools) => {
  return (
    <ul>
      {
        schools.schools.schools.map( school => <li key={ school.id }>
          { school.name }
        <br />
        Student Count
        <br />
        <select name='addStudent'>
              <option>Add Student</option>
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
