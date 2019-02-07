import React, { Component } from "react"

export default class TaskForm extends Component {
  state = {
   taskName: "",
   dueDate: "",
   complitionDate:""
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
      complitionDate:this.state.complitionDate
    }
      this.props.addNewTask(newTask)
        .then(() => this.props.history.push("/tasks"))
  }

  render() {
    return (
  <React.Fragment>
    <form>
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
      <button type="Save" onClick={this.constructTask} > Save </button>
    </form>
  </React.Fragment>
    )
  }
}