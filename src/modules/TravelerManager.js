const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/travelers`)
      .then(e => e.json())
    }
}