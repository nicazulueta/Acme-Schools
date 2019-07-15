import React from 'react';
import { connect } from 'react-redux';

const SingleSchool = (schools) => {
  console.log(schools)
  return (
    <div>School here</div>
  );
};

const mapStateToProps = ({ schools, students })=> {
  return {
    schools,
    students
  };
};

export default connect(mapStateToProps)(SingleSchool);
