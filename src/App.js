import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'
import { getSchools, getStudents } from './store';
import { connect } from 'react-redux';
import Home from './Home'
import Header from './Header'
import StudentForm from './StudentForm'
import Students from './Students'

class App extends React.Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const { schools, students } = this.props;
    return (
      <div>
          <HashRouter>
            <Route path='/' component={ Header} />
            <Route path='/' component={ StudentForm } />
            <Route exact path='/students' component={Students} />
            <Route exact path='/' component={ Home } />
          </HashRouter>
      </div>
    )
  }
}

const mapStateToProps = ({ schools, students})=> {
  return {
    schools,
    students
  };
};

const mapDispatchToProps = (dispatch)=> {
  return {
    loadData: ()=> {
      dispatch(getSchools());
      dispatch(getStudents());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
