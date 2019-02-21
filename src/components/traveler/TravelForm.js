import React, { Component } from "react"
import "./Traveler.css"

export default class TravelerForm extends Component {
  state = {
   firstName: "",
   lastName: "",
   numberOfFamily: "",
   payment:false,
   userId: sessionStorage.getItem("User")
  }
 componentDidMount(){
this.setState({
  place:this.props.trips.id
})
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
      userId: this.state.userId
    }
  
      this.props.addNewTraveler(newTraveler)
      .then((travelerTrip) => {
      const newTravelerTrip = {
        tripId: this.state.place,
        payment: this.state.payment,
        travelerId:travelerTrip.id
      } 

    this.props.addTravelerTrip(newTravelerTrip)
      .then ( ()=>{this.props.setTravelerState()
      .then(() => {
        this.props.history.push("/travelers")
      })
    })
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