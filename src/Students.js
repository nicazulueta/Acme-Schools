import React from 'react';
import { connect } from 'react-redux';
import { destroyStudent, updateStudent } from './store'

const Students = ({schools, students, deleteStudent, enrollStudent}) => {
  console.log(students.students)
  return (
    <ul>
      {
        students.students.map( student => <li key={ student.id }>
          { student.firstName } {student.lastName}
          <br />
          GPA: {student.gpa}
          <br />
          <select name='schoolId' defaultValue={student.schoolId}
              onChange={(event) =>
                enrollStudent({
                  schoolId: event.target.value,
                  studentId: student.id
                })
              }>
              <option>Not Enrolled</option>
              {schools.schools.map(school => <option key={school.id} value={school.id}>
                  {school.name}
                </option>)}
            </select>
          <br />
          <button onClick={() => deleteStudent(student.id)}>Destroy Student</button>
        </li>)
      }
    </ul>
  );
};

const mapStateToProps = ({ schools, students})=> {
    return {
      students,
      schools
    }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: event => {dispatch(destroyStudent(event))},
    enrollStudent: event => {dispatch(updateStudent(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);




