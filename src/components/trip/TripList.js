import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class TripList extends Component {
    render() {
        return (
          <section>
          {this.props.trips.map(trip => (
            <div key={trip.id}>
                 <p> {trip.place} </p>
                 <p> {trip.tripYear} </p>
                 <Link to={`/trips/${trip.id}/edit`}>Edit</Link>
            </div>
          ))}
          <div>
            <button type="button"
                onClick={() => {
                    this.props.history.push("/newTrip")
                }
                }>
                Add New Trip
            </button>
          </div>
         </section>
        )
      }
    }