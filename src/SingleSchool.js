import React from 'react';
import { connect } from 'react-redux';

const SingleSchool = (schools) => {
  const singleSchool = schools.schools.schools.filter(school => school.id === schools.match.params.id);
  return (
    <div id='single-school'>
      <h2>{singleSchool[0].name} (- Students Enrolled)</h2>
      <select>
        <option>--Add Student--</option>
        {schools.students.students.map(student => <option>{student.firstName} {student.lastName}</option>)}
      </select>
    </div>
  );
};

const mapStateToProps = ({ schools, students })=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(SingleSchool);
