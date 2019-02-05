import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import TravelerList from "./traveler/TravelerList"
import TaskList from "./task/TaskList"
import TripList from "./trip/TripList"
import LoginList from "./login/LoginList"
import LoginForm from "./login/LoginForm"
import TravelerManager from "../modules/TravelerManager"
import TaskManager from "../modules/TaskManager"
import TripManager from "../modules/TripManager"
import LoginManager from "../modules/LoginManager"

export default class ApplicationViews extends Component {
    state = {
      travelers: [],
      trips: [],
      tasks: [],
      users:[]
     }

     registerNewUser(users){
        return LoginManager.post(users)
            .then(() => LoginManager.getAll())
            .then(users =>
            this.setState({
                users: users
               })
            ) 
        }

     componentDidMount() {

        TravelerManager.getAll().then(allTravelers => {
          this.setState({
            travelers: allTravelers
          })
        })

        TripManager.getAll().then(allTrips => {
            this.setState({
                trips: allTrips
            })
          })

          TaskManager.getAll().then(allTasks => {
            this.setState({
                tasks: allTasks
            })
          })

          LoginManager.getAll().then(allUsers => {
            this.setState({
                users: allUsers
            })
          })
    }

    render() {
        return (
          <React.Fragment>
    
            <Route
              exact path="/" render={props => {
                 return ( <LoginList {...props} registerNewUser={this.registerNewUser} users={this.state.users} /> )
              }}
            />
            <Route
              path="/newUser" render={props => {
                 return ( <LoginForm {...props} registerNewUser={this.registerNewUser} /> )
              }}
            />
            <Route
              exact path="/travelers" render={props => {
                return ( <TravelerList {...props} travelers={this.state.travelers} /> )
              }}
            />
            <Route
              path="/trips" render={props => {
                 return ( <TripList {...props} trips={this.state.trips} /> )
              }}
            />
            <Route
              path="/tasks" render={props => {
                return <TaskList {...props} tasks={this.state.tasks}/>
              }}
            />
        </React.Fragment>
        )}
}