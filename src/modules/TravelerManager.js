const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      let userId= sessionStorage.getItem("User")
      return fetch(`${remoteURL}/travelers?userId=${userId}`)
      .then(e => e.json())
    },
    post(newTraveler) {
        return fetch(`${remoteURL}/travelers`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newTraveler)
        }).then(data => data.json())
    },
    get(id) {
      return fetch(`${remoteURL}/travelers/${id}`)
      .then(e => e.json())
  },

    put(travelerId, existingTraveler) {
      return fetch(`${remoteURL}/travelers/${travelerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(existingTraveler)
      }).then(data => data.json());
  },

    removeTraveler(id) {
      return fetch(`${remoteURL}/travelers/${id}`, {
        method: "DELETE"
      })
  }
}