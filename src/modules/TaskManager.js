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

    
}