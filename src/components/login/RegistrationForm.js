import React, { Component } from "react"

export default class RegistrationForm extends Component {
  state = {
   userName: "",
   password: ""
  }
  handleRegistrationFieldChange = (evt) => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructUsers = (evt) => {
    evt.preventDefault()
    const newUser = {
        userName: this.state.userName,
        password: this.state.password
        }
        this.props.registerNewUser(newUser)
        .then(() => this.props.history.push("/"))
   }

   render() {
    return (
  <React.Fragment>
    <form>
      <div>
        <label htmlFor="userName">User Name </label>
        <input type="text" required id="userName"
         onChange={this.handleRegistrationFieldChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" required id="password"
         onChange={this.handleRegistrationFieldChange}
        />
      </div>
      <button type="Save" onClick={this.constructUsers} > Register </button>
    </form>
  </React.Fragment>
        )
    }   
}