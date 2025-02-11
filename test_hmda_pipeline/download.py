import requests

hmda = requests.get('https://api.consumerfinance.gov/data/hmda.json')

hmda_file = open('hmda.json', 'w')

hmda_file.write(unicode(hmda.json()))
