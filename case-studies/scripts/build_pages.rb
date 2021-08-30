require 'httparty'  # gem install httparty
require 'json'      # gem install json
require 'mustache'  # gem install mustache

response = HTTParty.get('https://strapifeather.ngrok.io/contents?_sort=listOrder:DESC')
json_text_pages = JSON.parse(response.body)
json_text_cards = { page: json_text_pages }

# Writes JSON to a file for debugging
#File.write('../content.json', JSON.pretty_generate(json_text_pages))

Mustache.template_file='../templates/page-component.mustache'

json_length=json_text_pages.length()

json_text_pages.each_with_index{ |item, index|

    # if it is not the last case study, do a second pass through
    if index != json_length-1

        # triggers conditional block in template
        item[:nextStudy] = true

        temp_output = Mustache.render(item)
        File.write("../" + item["filename"] + ".js", Mustache.render(temp_output, json_text_pages[index+1]))
    else 
        File.write("../" + item["filename"] + ".js", Mustache.render(item))
    end
}

Mustache.template_file="../templates/card-component.mustache"
File.write('../../work-container.js', Mustache.render(json_text_cards))

