const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/trips`)
      .then(e => e.json())
    }
}