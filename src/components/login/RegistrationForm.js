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
    this.props.getUsers()
      .then(allUsers => {
        let usersArray = allUsers.filter(user => {
          return (user.userName === this.state.userName)
      })
      if (usersArray.length > 0) {
          alert("please register")
      } else {
          alert(`Welcome ${this.state.userName}!`)
    const newUser = {
        userName: this.state.userName,
        password: this.state.password
        }
        this.props.postUser(newUser)
          .then(() => {
            this.props.getUsers()
              .then(() => {
                this.props.history.push("/")
              })
          })
      }
    })
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