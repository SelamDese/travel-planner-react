import React, { Component } from "react"

export default class LoginList extends Component {
    render() {
        return (
          <section>
            <p>please register</p>
            <a href="/newUser" onClick={() => this.props.registerNewUser()}> Register </a>
          </section>
        )
      }
    }