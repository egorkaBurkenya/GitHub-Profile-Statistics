const getfetch = require('./fetch')

async function get_repos_commits(repo){
  let commits = []
  let response = getfetch(`https://api.github.com/repos/${repo}/commits`)
  response.then(value => {
    console.log(value);
  });
}

let repo = 'egorkaBurkenya/WLbot'

a = get_repos_commits(repo)

console.log(a); 