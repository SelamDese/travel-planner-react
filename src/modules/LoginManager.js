const remoteURL = "http://localhost:5002"

export default {
    getAllUsers() {
      return fetch(`${remoteURL}/users`)
      .then(e => e.json())
    },
    
    post(newUser) {
      return fetch(`${remoteURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
      }).then(data => data.json())
    },

    verifyUser(username, password) {
      return fetch(`${remoteURL}/users?username=${username}&password=${password}`)
        .then(res => res.json())
        
    }
}