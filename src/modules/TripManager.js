const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/trips`)
      .then(e => e.json())
    },
    post(newTrip) {
      return fetch(`${remoteURL}/trips`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTrip)
      }).then(data => data.json())
    }
}