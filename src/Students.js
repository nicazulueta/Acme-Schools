import React from 'react';
import { connect } from 'react-redux';
import { destroyStudent } from './store'

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
          <button onClick={() => destroyStudent(student.id)}>Destroy Student</button>
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: student => dispatch(destroyStudent(student.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);




