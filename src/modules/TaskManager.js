const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/tasks`)
      .then(e => e.json())
    }
}