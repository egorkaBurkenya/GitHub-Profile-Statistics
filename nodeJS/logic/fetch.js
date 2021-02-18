const fetch = require("node-fetch");

let getfetch = (url, callback, thencallback) => {
  fetch(`${url}`, {
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          method: "GET",
      })
      .then(response => response.text())
      .then((response) => {
          response = JSON.parse(response)
          callback(response)
      })
      .catch(err => console.log(err))
}

module.exports = getfetch
