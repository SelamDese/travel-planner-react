import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import TravelerList from "./traveler/TravelerList"
import TaskList from "./task/TaskList"
// import TripList from "./trip/TripList"
import LoginList from "./login/LoginList"
import Registration from "./login/Registration"
import TravelerForm from "./traveler/TravelForm"
// import TripForm from "./trip/TripForm"
import TaskForm from "./task/TaskForm"
import TaskEditForm from "./task/TaskEditForm"
import LoginForm from "./login/LoginForm"
import RegistrationForm from "./login/RegistrationForm"
import TravelerManager from "../modules/TravelerManager"
import TaskManager from "../modules/TaskManager"
// import TripManager from "../modules/TripManager"
import LoginManager from "../modules/LoginManager"

export default class ApplicationViews extends Component {
    state = {
      travelers: [],
      trips: [],
      tasks: [],
      users:[]
     }
     addNewTraveler = (traveler) =>{
      return TravelerManager.post(traveler)
        .then(() => TravelerManager.getAll())
        .then(travelers =>
          this.setState({
            travelers: travelers
          })
        )
        }
     addNewTask = (task) =>{
      return TaskManager.post(task)
        .then(() => TaskManager.getAll())
        .then(tasks =>
          this.setState({
            tasks: tasks
          })
        )
        } 

       registerNewUser(users){
          return LoginManager.post(users)
            //   .then(() => {
            //   return LoginManager.getAll()})
            //   .then(users =>
            //   this.setState({
            //   users: users
            //   })
            // )
          }

     componentDidMount() {

        TravelerManager.getAll().then(allTravelers => {
          this.setState({
            travelers: allTravelers
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
                return ( <Registration {...props} users={this.state.users} /> )
              }}
            />
            <Route
              path="/newUser" render={props => {
                return ( <RegistrationForm {...props} registerNewUser={this.registerNewUser} /> )
              }}
            />
              <Route
                exact path="/" render={props => {
                   return ( <LoginList {...props} users={this.state.users} /> )
                }}
              />
            <Route
              path="/userLogin" render={props => {
                 return ( <LoginForm {...props} registerNewUser={this.registerNewUser} /> )
              }}
            />
            <Route
              exact path="/travelers" render={props => {
                return ( <TravelerList {...props} travelers={this.state.travelers} /> )
              }}
            />
            <Route
              exact path="/newTraveler" render={props => {
                return ( <TravelerForm {...props} addNewTraveler={this.addNewTraveler} /> )
              }}
            />
            <Route
              path="/tasks" render={props => {
                return <TaskList {...props} {...props} deleteTask={this.deleteTask} tasks={this.state.tasks}/>
              }}
            />
            <Route
              path="/newTask" render={props => {
                return <TaskForm {...props} addNewTask={this.addNewTask}/>
              }}
            />
        </React.Fragment>
        )}
}