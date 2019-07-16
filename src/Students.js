import React from 'react';
import { connect } from 'react-redux';
import { destroyStudent } from './store'

const Students = ({students, deleteStudent}) => {
  return (
    <ul>
      {
        students.students.map( student => <li key={ student.id }>
          { student.firstName } {student.lastName}
          <br />
          GPA: {student.gpa}
          <br />
          <select name='enrollAt'>
              <option>Not Enrolled</option>
            </select>
          <br />
          <button onClick={() => deleteStudent(student.id)}>Destroy Student</button>
        </li>)
      }
    </ul>
  );
};

const mapStateToProps = ({ students })=> {
    return {
      students
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: event => {
      dispatch(destroyStudent(event));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);




