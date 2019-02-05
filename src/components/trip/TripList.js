import React, { Component } from "react"

export default class TripList extends Component {
    render() {
        return (
            <section>
            {this.props.trips.map(trip => (
              <div key={trip.id}>
                   <p> {trip.place} </p>
                   <p> {trip.tripYear} </p>
              </div>
            ))}
          </section>
        )
      }
    }