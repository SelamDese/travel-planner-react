const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/tasks`)
      .then(e => e.json())
    },

    post(newTask) {
      return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
      }).then(data => data.json())
    },

    get(id) {
        return fetch(`${remoteURL}/tasks/${id}`)
        .then(e => e.json())
    },

    put(taskId, existingTask) {
        return fetch(`${remoteURL}/tasks/${taskId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(existingTask)
        }).then(data => data.json());
    },

    removeTask(id) {
        return fetch(`${remoteURL}/tasks/${id}`, {
          method: "DELETE"
        })
    }
}