import requests

def selectLanguages(arr: list) -> list:
  languages = []
  for i in arr:
    for e in i:
      if e in languages: pass
      else: languages.append(e)
  return languages

def statistics(arr: list) -> dict:
  statistics = {}
  languages = selectLanguages(arr)
  all = 0
  for language in languages:
    statistics[language] = 0
  for language in languages:
    for i in arr: 
      try: 
        statistics[language] += i[language]
        all += i[language]
      except KeyError:
        pass
  for language in languages:
    statistics[language] = "%.2f" % (statistics[language] / (all / 100))
  return statistics

def languageStatistics(username: str) -> dict:
  response = requests.get(f'https://api.github.com/users/{username}/repos')
  repos = response.json()
  languages = []
  for i in repos:
    url = i['languages_url']
    languages.append(requests.get(url).json()) 
  print(statistics(languages))