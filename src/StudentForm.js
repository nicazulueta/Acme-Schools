import React from 'react'
import { connect } from 'react-redux';
import { createStudent } from './store'

class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: '',
      enrollAt: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange (event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.createStudent(this.state);
  }

  render() {
    return (
      <div id='form'>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name
            <input type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Last Name
            <input type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email
            <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
          </label>
          <br />
          <label>
            GPA
            <input type='text' name='gpa' value={this.state.gpa} onChange={this.handleChange} />
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default connect( null, { createStudent } )(StudentForm)
