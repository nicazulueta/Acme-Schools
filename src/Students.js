import React from 'react';
import { connect } from 'react-redux';

const Students = ({students}) => {
  console.log(students)
  return (
    <ul>
      {
        students.map( student => <li key={ student.id }>
          { student.name }
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


