import React, { Component } from "react"

export default class LoginList extends Component {
    render() {
        return (
          <section>
            <p>LogOut</p>
            {/* <button type="Save" onClick={this.props.constructUsers} > Register </button> */}
            <a href="/" onClick={() => this.props.getUsers}> LogOut </a>
          </section>
        )
      }
    }