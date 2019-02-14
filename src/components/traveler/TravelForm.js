import React, { Component } from "react"
import "./Traveler.css"

export default class TravelerForm extends Component {
  state = {
   firstName: "",
   lastName: "",
   numberOfFamily: "",
   payment:false,
   place:1
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
      userId:1
    }
  
      this.props.addNewTraveler(newTraveler)
        .then((any) => {
         console.log(any)
      const newTravelerTrip = {
        tripId: this.state.place,
        payment: this.state.payment,
        travelerId:any.id
      }    

        this.props.addTravelerTrip(newTravelerTrip)
        .then((anyThing) =>{ this.props.history.push("/travelers")
        console.log(anyThing)})
    })
  }

  render() {
    return (
  <React.Fragment>
    <form className="travelerForm">
      <div>
        <label htmlFor="firstName"> First Name </label>
        <input type="text" required id="firstName"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <div>
        <label htmlFor="lastName"> Last Name </label>
        <input type="text" required id="lastName"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <div>
        <label htmlFor="numberOfFamily"> Number Of Family </label>
        <input type="text" required id="numberOfFamily"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <div>
        <label htmlFor="place">Trip Place</label>
        <select value={this.state.place} id="place"
         onChange={this.handleTravelerFieldChange}>
          {this.props.trips.map(trip=> <option value={trip.id} key={trip.id}>{trip.place}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="payment">payment</label>
        <input type="checkbox" required id="payment"
         onChange={this.handleTravelerFieldChange}
        />
      </div>
      <button className="form-btn" type="Save" onClick={this.constructTrveler} > Save </button>
    </form>
  </React.Fragment>
    )
  }
}