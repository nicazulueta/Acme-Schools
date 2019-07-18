import React from 'react';
import { connect } from 'react-redux';
import { destroyStudent, updateStudent } from './store'

const SingleSchool = (schools) => {
  const singleSchool = schools.schools.schools.filter(school => school.id === schools.match.params.id);
  const studentsAtSchool = schools.students.students.filter(student => {return student.schoolId === schools.match.params.id});
  return (
    <div id='single-school'>
      <h2>{singleSchool[0].name} ({(schools.students.students.filter(student => {return student.schoolId === schools.match.params.id})).length} Students Enrolled)</h2>
      <ul>
      {
        studentsAtSchool.map( student => <li key={ student.id }>
          { student.firstName } {student.lastName}
          <br />
          GPA: {student.gpa}
        </li>)
      }
    </ul>
    </div>
  );
};

const mapStateToProps = ({ schools, students})=> {
  return {
    schools,
    students
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: event => {dispatch(destroyStudent(event))},
    enrollStudent: event => {dispatch(updateStudent(event))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleSchool);
