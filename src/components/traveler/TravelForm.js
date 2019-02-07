import React, { Component } from "react"

export default class TravelerForm extends Component {
  state = {
   firstName: "",
   lastName: "",
    numberOfFamily: ""
  }

  handleTravelerFieldChange = (evt) => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructTrveler = (evt) => {
    evt.preventDefault()
    const newTraveler = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      numberOfFamily: this.state.numberOfFamily
    }
      this.props.addNewTraveler(newTraveler)
        .then(() => this.props.history.push("/travelers"))
  }

  render() {
    return (
  <React.Fragment>
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" required id="firstName"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" required id="lastName"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <div>
        <label htmlFor="numberOfFamily">Number Of Family</label>
        <input type="text" required id="unumberOfFamilyrl"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <button type="Save" onClick={this.constructTrveler} > Save </button>
    </form>
  </React.Fragment>
    )
  }
}