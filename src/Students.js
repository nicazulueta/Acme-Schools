import React from 'react';
import { connect } from 'react-redux';

const Students = (students) => {
  return (
    <ul>
      {
        students.students.students.map( student => <li key={ student.id }>
          { student.firstName } {student.lastName}
          <br />
          GPA: {student.gpa}
          <br />
          <select name='enrollAt'>
              <option>Not Enrolled</option>
            </select>
          <br />
          <button>Destroy Student</button>
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

export default connect(mapStateToProps)(Students);


