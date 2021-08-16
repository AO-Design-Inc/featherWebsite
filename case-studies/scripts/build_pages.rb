require 'httparty'  # gem install httparty
require 'json'      # gem install json
require 'mustache'  # gem install mustache

response = HTTParty.get('https://strapifeather.ngrok.io/contents')
json_text_pages = JSON.parse(response.body)
json_text_cards = { page: json_text_pages }

# Writes JSON to a file for debugging
#File.write('../content.json', JSON.pretty_generate(json_text_pages))

# creates case study pages
#Mustache.template_file='../templates/content.mustache'

#json_text_pages.each{ |item| 
#    File.write("../" + item["filename"] + ".html", Mustache.render(item))
#}

Mustache.template_file="../templates/card-component.mustache"
File.write('../../work-container.js', Mustache.render(json_text_cards))

