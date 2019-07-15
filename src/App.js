import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './Home'
import Header from './Header'
import StudentForm from './StudentForm'
import Students from './Students'

class App extends React.Component {
  constructor () {
    super();
  };

  render() {
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

export default App
