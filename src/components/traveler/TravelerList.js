import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class TravelerList extends Component {
    render() {
        return (
          <section>
            {this.props.travelers.map(traveler => (
              <div key={traveler.id}>
                   <p> {traveler.firstName} </p>
                   <p> {traveler.lastName} </p>
                   <p> {traveler.numberOfFamily}</p>
                  {this.props.travelerTrips.map(travelerTrip => {
                    if (traveler.id == travelerTrip.traveler.id) {
                   return <p key={travelerTrip.id}>{travelerTrip.trip.place}</p> 
                  }
                })}
                   <Link to={`/travelers/${traveler.id}/edit`}>Edit</Link>
                   <a href="#" onClick={() => this.props.deleteTraveler(traveler.id)}> Delete </a>
              </div>
            ))}
              <div>
                <button type="button"
                    onClick={() => {
                        this.props.history.push("/newTraveler")
                    }
                    }>
                    Add Traveler
                </button>
              </div>
          </section>
        )
      }
    }