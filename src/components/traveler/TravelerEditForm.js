import React, { Component } from "react"
import TravelerManager from "../../modules/TravelerManager"
import "./Traveler.css"

export default class TravelerEditForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        numberOfFamily: "",
        place:"",
        userId: sessionStorage.getItem("User")
       }

    handleEditTravelerFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTraveler = evt => {
      evt.preventDefault()
      const existingTraveler = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        numberOfFamily: this.state.numberOfFamily,
        
        place: this.state.place,
        userId: this.state.userId
      }

    this.props.updateTraveler(this.props.match.params.travelerId, existingTraveler)
    .then(() => this.props.history.push("/travelers"))      
    }

    componentDidMount() {
      TravelerManager.get(this.props.match.params.travelerId)
      .then(travelers => {
        this.setState({
            firstName: travelers.firstName,
            lastName: travelers.lastName,
            numberOfFamily: travelers.numberOfFamily,
            place: travelers.place
        });
      });
    }

    render() {
        return (
            <React.Fragment>
                <form className="travelrForm">
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" required id="firstName" value = {this.state.firstName}
                          onChange={this.handleEditTravelerFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" required id="lastName" value={this.state.lastName}
                          onChange={this.handleEditTravelerFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="numberOfFamily">Number Of Family</label>
                        <input type="text" required id="numberOfFamily" value={this.state.numberOfFamily}
                          onChange={this.handleEditTravelerFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="place">Trip Place</label>
                        <select id="place"
                        onChange={this.handleTravelerFieldChange}>
                        {this.props.trips.map(trip=> <option key={trip.id}>{trip.place}</option>)}
                        </select>
                    </div>
                    <button className="form-btn" type="submit" onClick={this.updateExistingTraveler} >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}