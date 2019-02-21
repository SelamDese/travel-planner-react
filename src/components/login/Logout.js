import React, { Component } from "react"

export default class LogOut extends Component {
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

//   constructLogOut = (evt) => {
//     evt.preventDefault()
//     this.props.getUsers()
//     // .then(user => {
//     //     if (user.length > 0) { 
//             // sessionStorage.clear()
//              sessionStorage.removeItem("User")
//     //       user.forEach(use => {
//     //         let loggedOut = false;
//     //         if (this.state.Users > 0 ) {
//     //           loggedOut = true;
//     //         }
//     //         if (loggedOut === true) {
//     //             // sessionStorage.removeItem("User")
//     //           this.props.history.push("/travelers")
//             }
//         //   })
//     //    }
//     //   })
//     // }

logout() {
    sessionStorage.clear()
}

    // constructLogOut = (evt) => {
    //     evt.preventDefault()
    //     this.logout()
        // this.props.verifyExistingUser(this.state.username, this.state.password)
        // .then(user => {
        //     if (user.length === 0) { 
        //       user.forEach(use => {
        //         let loggedIn = false;
        //         if (this.state.username === use.username && this.state.password === use.password) {
        //           loggedIn = true;
        //         }
        //         if (loggedIn === true) {
        //           sessionStorage.setItem("User", use.id)
        //         //   sessionStorage.removeItem("User")
        //           sessionStorage.clear()
        //           this.props.history.push("/travelers")
        //         }
        //       })
        //    }
        //   })
        // } 

   render() {
    return (
  <React.Fragment>
    <form className="logOutForm">
      <p>logOut</p>
      <button type="Save" onClick={this.logout}> LogOut </button>
    </form>
  </React.Fragment>
        )
    }   
}