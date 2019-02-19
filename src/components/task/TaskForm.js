import React, { Component } from "react"
import "./Tasks.css"

export default class TaskForm extends Component {
  state = {
   taskName: "",
   dueDate: "",
   complitionDate:"",
   userId: sessionStorage.getItem("User")
  }

  handleTaskFieldChange = (evt) => {
    evt.preventDefault()
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  constructTask = (evt) => {
    evt.preventDefault()
    const newTask = {
      taskName: this.state.taskName,
      dueDate: this.state.dueDate,
      complitionDate:this.state.complitionDate,
      userId: sessionStorage.getItem("User")
    }
      this.props.addNewTask(newTask)
        .then(() => this.props.history.push("/tasks"))
  }

  render() {
    return (
  <React.Fragment>
    <form className="taskForm">
      <div>
        <label htmlFor="taskName">Task Name</label>
        <input type="text" required id="taskName"
         onChange={this.handleTaskFieldChange}
        />
      </div>
      <div>
        <label htmlFor="dueDate">Due Date</label>
        <input type="date" required id="dueDate"
         onChange={this.handleTaskFieldChange}
        />
      </div>
      <div>
        <label htmlFor="complitionDate">Complition Date</label>
        <input type="date" required id="complitionDate"
         onChange={this.handleTaskFieldChange}
        />
      </div>
      <button className="form-btn" type="Save" onClick={this.constructTask} > Save </button>
    </form>
  </React.Fragment>
    )
  }
}