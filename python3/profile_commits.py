import requests

def takeCommits(repo_name: str) -> list:
  response = requests.get(f'https://api.github.com/repos/{repo_name}/commits')
  commitsJson = response.json()
  commits = {}
  num = 0
  for i in commitsJson:
    commit = {}
    commit["author"] = i["commit"]["author"]["name"]
    commit["date"] = i["commit"]["author"]["date"]
    commit["message"] = i["commit"]["message"]
    commits[num] = commit
    num += 1
  return commits
