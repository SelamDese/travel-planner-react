import React, { Component } from "react"

export default class LoginForm extends Component {
  state = {
   userName: "",
   password: ""
  }
  handleFieldChange = (evt) => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructLogin = (evt) => {
    evt.preventDefault()
    this.props.verifyExistingUser(this.state.username, this.state.password)
    .then(user => {
        if (user.length === 0) {
          alert("please register below")
        } else { 
          user.forEach(use => {
            let loggedIn = false;
            if (this.state.username === use.username && this.state.password === use.password) {
              loggedIn = true;
            }
            if (loggedIn === true) {
              sessionStorage.setItem("User", use.id)
              let sessionUser = sessionStorage.getItem("User")
              //let sessionUserNumber = Number(sessionUser)
              console.log("sessionUser:", sessionUser)
              this.props.history.push("/travelers")
            }
          })
       }
      }) 
  //   this.props.setUserState()
  //    .then(users =>
  //       this.setState({
  //         users: users
  //       })
  //     )
  //     .then(() => {
  //       this.props.history.push("/")
  //     })

  //   this.props.getUsers()
  //   .then(() => {
  //     this.props.history.push("/")
  //   })
  // }
    }

   render() {
    return (
  <React.Fragment>
    <form className="logInForm">
      <div>
        <label htmlFor="userName">User Name </label>
        <input type="text" required id="userName"
         onChange={this.handleFieldChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" required id="password"
         onChange={this.handleFieldChange}
        />
      </div>
      <button type="Save" onClick={this.constructLogin} > Login </button>
    </form>
  </React.Fragment>
        )
    }   
}