import React from 'react'

class StudentForm extends React.Component {
  constructor () {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      gpa: 1,
      enrollAt: ''
    }
  }

  render () {
    const { firstName, lastName, email, gpa, enrollAt } = this.state
    return (
      <div id='form'>
        <form>
          <label>
            First Name
            <input type='text' name='firstName' value={firstName} />
          </label>
          <br />
          <label>
            Last Name
            <input type='text' name='lastName' value={lastName} />
          </label>
          <br />
          <label>
            Email
            <input type='text' name='email' value={email} />
          </label>
          <br />
          <label>
            GPA
            <input type='text' name='GPA' value={gpa} />
          </label>
          <br />
          <label>
            Enroll at
            <select name='enrollAt'>
              <option>Not Enrolled</option>
            </select>
          </label>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default StudentForm
