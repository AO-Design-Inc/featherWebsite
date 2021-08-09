require 'httparty'  # gem install httparty
require 'json'      # gem install json

response = HTTParty.get('https://strapifeather.ngrok.io/contents')
jsontext= JSON.parse(response.body)
File.write('./content.json', JSON.dump(jsontext))
