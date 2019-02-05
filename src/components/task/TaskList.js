import React, { Component } from "react"

export default class TaskList extends Component {
    render() {
        return (
            <section>
            {this.props.tasks.map(task => (
              <div key={task.id}>
                   <p> {task.taskName} </p>
                   <p> {task.dueDate} </p>
                   <p> {task.complitionDate}</p>
              </div>
            ))}
          </section>
        );
      }
    }