import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class TaskList extends Component {
    render() {
        return (
          <section>
            {this.props.tasks.map(task => (
              <div key={task.id}>
                  <p> {task.taskName} </p>
                  <p> {task.dueDate} </p>
                  <p> {task.complitionDate}</p>
                  <Link to={`/tasks/${task.id}/edit`}>Edit</Link>
                  <a href="#" onClick={() => this.props.deleteTask(task.id)}> Delete </a>
              </div>
            ))}
            <div>
              <button type="button"
                  onClick={() => {
                      this.props.history.push("/newTask")
                  }
                  }>
                  Add New Task
              </button>
            </div>
          </section>
        );
      }
    }