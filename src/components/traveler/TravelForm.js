import React, { Component } from "react"

export default class TravelerForm extends Component {
  state = {
   firstName: "",
   lastName: "",
   numberOfFamily: "",
   place:""
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
      numberOfFamily: this.state.numberOfFamily,
      // place: this.state.place
    }
  
      this.props.addNewTraveler(newTraveler)
        .then((any) => {
console.log(any)
      const newTravelerTrip = {
        place: this.state.place,
        travelerId:any.id
      }    

        this.props.addTravelerTrip(newTravelerTrip)
        .then(() => this.props.history.push("/travelers"))
    })
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
        <input type="text" required id="numberOfFamily"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <div>
        <label htmlFor="place">Trip Place</label>
        <select value="" id="place"
         onChange={this.handleTravelerFieldChange}>
          {this.props.trips.map(trip=> <option key={trip.id}>{trip.place}</option>)}
        </select>
      </div>
      <button type="Save" onClick={this.constructTrveler} > Save </button>
    </form>
  </React.Fragment>
    )
  }
}