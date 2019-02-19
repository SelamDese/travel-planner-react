import React, { Component } from "react"

export default class LoginList extends Component {
    render() {
        return (
          <section>
            <p>please Login</p>
            {/* <button type="Save" onClick={this.props.constructUsers} > Register </button> */}
            <a href="/userLogin" onClick={() => this.props.getUsers}> Login </a>
          </section>
        )
      }
    }