import { Route, Redirect } from "react-router-dom"
import React, { Component } from "react"
import TravelerList from "./traveler/TravelerList"
import TaskList from "./task/TaskList"
import TripList from "./trip/TripList"
import LoginList from "./login/LoginList"
import Registration from "./login/RegistrationList"
import TravelerForm from "./traveler/TravelForm"
import TripForm from "./trip/TripForm"
import TaskForm from "./task/TaskForm"
import TravelerEditForm from "./traveler/TravelerEditForm"
import TripEditForm from "./trip/TripEditForm"
import TaskEditForm from "./task/TaskEditForm"
import LoginForm from "./login/LoginForm"
// import LogOutList from "./login/LogOutList"
import RegistrationForm from "./login/RegistrationForm"
import TravelerManager from "../modules/TravelerManager"
import TaskManager from "../modules/TaskManager"
import TripManager from "../modules/TripManager"
import LoginManager from "../modules/LoginManager"
import TravelerTripManager from "../modules/TravelerTripManager"
import LogOut from "./login/Logout"

export default class ApplicationViews extends Component {
    state = {
      travelers: [],
      trips: [],
      tasks: [],
      users:[],
      travelerTrips:[],
      userId:sessionStorage.getItem("User")
     }

     isAuthenticated = () => sessionStorage.getItem("User") !==null

    getUsers = () => {
      return LoginManager.getAllUsers("users")
      // .then(users =>
      //   this.setState({
      //     users: users
      //   })
      // )
    }

    postUser = (newUser) => {
      return LoginManager.post(newUser)
        .then(() => LoginManager.getAllUsers("users"))
    }

    setUserState = () => {
      return LoginManager.getAllUsers()
      .then(() =>
        this.setState({
          userId: sessionStorage.getItem("User")
        })
      )
    }

    verifyExistingUser = (username, password) => {
      return LoginManager.verifyUser(username, password)
      // .then(users =>
      //   this.setState({
      //     users: users
      //   })
      // )
    }

     addNewTraveler = (traveler) =>{
      return TravelerManager.post(traveler)
        }

     setTravelerState = () => {
       return TravelerManager.getAll()
        .then(travelers =>
          this.setState({
            travelers: travelers
          })
        )
     }   

     updateTraveler = (travelerId, editedTravelerObj) =>{
      return TravelerManager.put(travelerId, editedTravelerObj)
        .then(() => TravelerManager.getAll())
        .then(travelers =>
          this.setState({
            travelers: travelers
          })
        )
        }
        
     deleteTraveler = (id) => {
      return TravelerManager.removeTraveler(id)
        .then(() => TravelerManager.getAll())
        .then(travelers => 
          this.setState({
            travelers: travelers
          })
        )
        }   

     addTravelerTrip = (travelerTrip) =>{
      return TravelerTripManager.post(travelerTrip)
        // .then(() => TravelerTripManager.getAll())
        // .then(travelerTrips =>
        //   this.setState({
        //     travelerTrips: travelerTrips
        //   })
        // )
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
        
     updateTask = (taskId, editedTaskObj) => {
      return TaskManager.put(taskId, editedTaskObj)
        .then(() => TaskManager.getAll())
        .then(tasks => {
          this.setState({
            tasks: tasks
          })
        })
        }  

     deleteTask = (id) => {
      return TaskManager.removeTask(id)
        .then(() => TaskManager.getAll())
        .then(tasks => 
          this.setState({
            tasks: tasks
          })
        )
        }
        
        addNewTrip = (trip) =>{
          return TripManager.post(trip)
            .then(() => TripManager.getAll())
            .then(trips =>
              this.setState({
                trips: trips
              })
            )
            }

        updateTrip = (tripId, editedTripObj) =>{
          return TripManager.put(tripId, editedTripObj)
            .then(() => TripManager.getAll())
            .then(trips =>
              this.setState({
                trips: trips
              })
            )
            }
            
        deleteTrip = (id) => {
          return TripManager.removeTrip(id)
            .then(() => TripManager.getAll())
            .then(trips => 
              this.setState({
                trips: trips
              })
            )
            }

     componentDidMount() {

        TravelerManager.getAll().then(allTravelers => {
          this.setState({
            travelers: allTravelers
          })
        })

        TravelerTripManager.getAll().then(allTravelerTrips => {
          this.setState({
            travelerTrips: allTravelerTrips
          })
        })

        TaskManager.getAll().then(allTasks => {
          this.setState({
              tasks: allTasks
          })
        })

        TripManager.getAll().then(allTrips => {
          this.setState({
              trips: allTrips
          })
        })

        LoginManager.getAllUsers().then(allUsers => {
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
                return ( <Registration {...props} users={this.state.users} getUsers={this.getUsers} postUser={this.postUser}/> )
              }}
            />
            <Route
              exact path="/newUser" render={props => {
                return ( <RegistrationForm {...props} users={this.state.users} getUsers={this.getUsers} postUser={this.postUser} /> )
              }}
            />
              <Route
                exact path="/" render={props => {
                   return ( <LoginList {...props} users={this.state.users} getUsers={this.getUsers} 
                                                  verifyExistingUser={this.verifyExistingUser} /> )
                }}
              />
              <Route
                exact path="/" render={props => {
                   return ( <LogOut {...props} users={this.state.users} getUsers={this.getUsers} 
                                                  verifyExistingUser={this.verifyExistingUser} /> )
                }}
              />
              {/* <Route
                exact path="/" render={props => {
                   return ( <LogOutList {...props} users={this.state.users} getUsers={this.getUsers} 
                                                  verifyExistingUser={this.verifyExistingUser} /> )
                }}
              /> */}
            <Route
              path="/userLogin" render={props => {
                 return ( <LoginForm {...props} users={this.state.users} getUsers={this.getUsers} 
                         verifyExistingUser={this.verifyExistingUser} setUserState={this.setUserState}
                         addTravelerTrip={this.addTravelerTrip} /> )
              }}
            />
            <Route
              exact path="/travelers" render={props => {
                return ( <TravelerList {...props} deleteTraveler={this.deleteTraveler} 
                  travelers={this.state.travelers} travelerTrips={this.state.travelerTrips} trips={this.state.trips}/> )
              }}
            />
            <Route
              exact path="/newTraveler" render={props => {
                return ( <TravelerForm {...props} addNewTraveler={this.addNewTraveler} 
                  travelerTrips={this.state.travelerTrips} trips={this.state.trips}
                  addTravelerTrip={this.addTravelerTrip} setTravelerState={this.setTravelerState}/> )
              }}
            />
             <Route
              path="/travelers/:travelerId(\d+)/edit" render={props => {
                return <TravelerEditForm {...props} updateTraveler={this.updateTraveler} trips={this.state.trips}/>
              }}
            />
            <Route
              exact path="/tasks" render={props => {
                return <TaskList {...props} {...props} deleteTask={this.deleteTask} tasks={this.state.tasks}/>
              }}
            />
            <Route
              path="/newTask" render={props => {
                return <TaskForm {...props} addNewTask={this.addNewTask}/>
              }}
            />
            <Route
              path="/tasks/:taskId(\d+)/edit" render={props => {
                return <TaskEditForm {...props} updateTask={this.updateTask}/>
              }}
            />
            <Route
              exact path="/trips" render={props => {
                 return ( <TripList {...props} deleteTrip={this.deleteTrip} trips={this.state.trips} /> )
              }}
            />
            <Route
              path="/newTrip" render={props => {
                 return ( <TripForm {...props} addNewTrip={this.addNewTrip} /> )
              }}
            />
            <Route
              path="/trips/:tripId(\d+)/edit" render={props => {
                return <TripEditForm {...props} updateTrip={this.updateTrip}/>
              }}
            />
        </React.Fragment>
        )}
}