import React, { Component } from "react"
import TripManager from "../../modules/TripManager"

export default class TripEditForm extends Component {

    state = {
        place: "",
        tripYear: ""
       }

    handleEditTripFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTrip = evt => {
      evt.preventDefault()
      const existingTrip = {
        place: this.state.place,
        tripYear: this.state.tripYear
      }

    this.props.updateTrip(this.props.match.params.tripId, existingTrip)
    .then(() => this.props.history.push("/trips"))      
    }

    componentDidMount() {
      TripManager.get(this.props.match.params.tripId)
      .then(trips => {
        this.setState({
            place: trips.place,
            tripYear: trips.tripYear,
        });
      });
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div>
                        <label htmlFor="place">Place</label>
                        <input type="text" required id="place" value = {this.state.place}
                          onChange={this.handleEditTripFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="tripYear">Trip Year</label>
                        <input type="text" required id="tripYear" value={this.state.tripYear}
                          onChange={this.handleEditTripFieldChange} />
                    </div>
                    <button type="submit" onClick={this.updateExistingTrip} >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}