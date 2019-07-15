import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  schools: [],
  students: []
}

const GET_SCHOOLS = 'GET_SCHOOLS';
const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const DESTROY_STUDENT = 'DESTROY_STUDENT';

const schoolsReducer = (state = initialState, action)=> {
  switch(action.type){
    case GET_SCHOOLS:
      return {...state, schools: action.schools};
  }
  return state;
};

const studentsReducer = (state = initialState, action)=> {
  switch(action.type){
    case GET_STUDENTS:
      return {...state, students: action.students};
    case CREATE_STUDENT:
      return { ...state, students: [...state.students, action.student]};
    case DESTROY_STUDENT:
      const newStudents = state.students.filter(student => student.id !== action.studentId);
      return {...state, students: newStudents}
    default:
      return state
  }
};

const reducer = combineReducers({
  schools: schoolsReducer,
  students: studentsReducer
});

const _getSchools = (schools)=> ({
  type: GET_SCHOOLS,
  schools
});

const _getStudents = (students)=> ({
  type: GET_STUDENTS,
  students
});

const _createStudent = (student) => ({
  type: CREATE_STUDENT,
  student
})

const _destroyStudent = (studentId) => ({
  type: DESTROY_STUDENT,
  studentId
})

const getSchools = ()=> {
  return async(dispatch)=> {
    const res = await axios.get('/api/schools');
    return dispatch(_getSchools(res.data));
  };
};

const getStudents = ()=> {
  return async(dispatch)=> {
    const res = await axios.get('/api/students');
    return dispatch(_getStudents(res.data));
  };
};

const createStudent = student => {
  return async(dispatch) => {
    const res = await axios.post('/api/students', student);
    dispatch(_createStudent(res.data));
  };
};

const destroyStudent = studentId => {
  console.log(studentId)
  return async(dispatch) => {
    await axios.delete('/api/students/', studentId);
    dispatch(_destroyStudent(studentId));
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { getSchools, getStudents, createStudent, destroyStudent };
