const status = require("./status")
const getfetch = require('./fetch')

let get_languages_status = (user) => {
  var langues = []
  getfetch(`https://api.github.com/users/${user}`, (response) => {
  getfetch(response.repos_url, (response) => {
    console.log(response[0]["id"]);
    for (i in response) {
      getfetch(response[i].languages_url, (response) => {
        if (!response["documentation_url"]) {
          langues.push(response)
        }
        console.log(status(langues));
         
      })
    }
  }
  )
})
}



get_languages_status("nik19ta")

// module.exports = get_languages_status
