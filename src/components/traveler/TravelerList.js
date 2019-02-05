import React, { Component } from "react"

export default class TravelerList extends Component {
    render() {
        return (
          <section>
            {this.props.travelers.map(traveler => (
              <div key={traveler.id}>
                   <p> {traveler.firstName} </p>
                   <p> {traveler.lastName} </p>
                   <p> {traveler.numberOfFamily}</p>
              </div>
            ))}
          </section>
        )
      }
    }