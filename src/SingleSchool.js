import React from 'react';
import { connect } from 'react-redux';

const SingleSchool = (schools, match) => {
  const singleSchool = schools.schools.schools.filter(school => school.id === schools.match.params.id);
  console.log(singleSchool)
  return (
    <div id='single-school'>
      <h2>{singleSchool[0].name} (- Students Enrolled)</h2>
      <select>
        <option>--Add Student--</option>
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
