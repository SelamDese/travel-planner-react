const remoteURL = "http://localhost:5002"

export default {
    getAll() {
      return fetch(`${remoteURL}/travelers`)
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
      }
}