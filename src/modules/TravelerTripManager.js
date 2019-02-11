const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/travelerTrips`)
      .then(e => e.json())
    },
    post(newTravelerTrips) {
        return fetch(`${remoteURL}/travelerTrips`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTravelerTrips)
        }).then(data => data.json())
      }
}