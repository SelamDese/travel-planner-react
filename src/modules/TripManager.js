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
    },

    get(id) {
      return fetch(`${remoteURL}/trips/${id}`)
      .then(e => e.json())
    },

    put(tripId, existingtrip) {
      return fetch(`${remoteURL}/trips/${tripId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(existingtrip)
      }).then(data => data.json());
  },
}