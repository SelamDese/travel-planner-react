import React, { Component } from "react"
import TaskManager from "../../modules/TaskManager"
import "./Tasks.css"

export default class TaskEditForm extends Component {

    state = {
        taskName: "",
        dueDate: "",
        complitionDate: "",
        userId: sessionStorage.getItem("User")
       }

    handleEditTaskFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingTask = evt => {
      evt.preventDefault()
      const existingTask = {
        taskName: this.state.taskName,
        dueDate: this.state.dueDate,
        complitionDate: this.state.complitionDate,
        userId:sessionStorage.getItem("User")
      }

    this.props.updateTask(this.props.match.params.taskId, existingTask)
    .then(() => this.props.history.push("/tasks"))      
    }

    componentDidMount() {
      TaskManager.get(this.props.match.params.taskId)
      .then(tasks => {
        this.setState({
            taskName: tasks.taskName,
            dueDate: tasks.dueDate,
            complitionDate: tasks.complitionDate
        });
      });
    }

    render() {
        return (
            <React.Fragment>
                <form className="tasksEditForm">
                    <div>
                        <label htmlFor="taskName">Task Name</label>
                        <input type="text" required id="taskName" value = {this.state.taskName}
                          onChange={this.handleEditTaskFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="dueDate">Due Date</label>
                        <input type="date" required id="dueDate" value={this.state.dueDate}
                          onChange={this.handleEditTaskFieldChange} />
                    </div>
                    <div>
                        <label htmlFor="complitionDate">Complition Date</label>
                        <input type="date" required id="complitionDate" value={this.state.complitionDate}
                          onChange={this.handleEditTaskFieldChange}
                           />
                    </div>
                    
                    <button className="form-btn" type="submit" onClick={this.updateExistingTask} >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}