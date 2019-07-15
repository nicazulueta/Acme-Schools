import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  schools: [],
  students: []
}

const GET_SCHOOLS = 'GET_SCHOOLS';
const GET_STUDENTS = 'GET_STUDENTS';

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
      console.log(action)
      return {...state, students: [...state.students, ...action.students]};
  }
  return state;
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

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export { getSchools, getStudents };
