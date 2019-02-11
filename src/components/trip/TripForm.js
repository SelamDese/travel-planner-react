import React, { Component } from "react"

export default class TripForm extends Component {
  state = {
   place: "",
   tripYear: ""
  }

  handleTripFieldChange = (evt) => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructTrip = (evt) => {
    evt.preventDefault()
    const newTrip = {
      place: this.state.place,
      tripYear: this.state.tripYear
    }
      this.props.addNewTrip(newTrip)
        .then(() => this.props.history.push("/trips"))
  }

  render() {
    return (
  <React.Fragment>
    <form>
      <div>
        <label htmlFor="place">Place</label>
        <input type="text" required id="place"
         onChange={this.handleTripFieldChange}
        />
      </div>
      <div>
        <label htmlFor="tripYear">Trip Year</label>
        <input type="text" required id="tripYear"
         onChange={this.handleTripFieldChange}
        />
      </div>
      <button type="Save" onClick={this.constructTrip} > Save </button>
    </form>
  </React.Fragment>
    )
  }
}