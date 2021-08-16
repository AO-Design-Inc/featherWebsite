# Script to fetch all the images from the Strapi API

require 'httparty'  # gem install httparty
require 'json'      # gem install json
require 'shellwords'

response = HTTParty.get('https://strapifeather.ngrok.io/contents')
json_text = JSON.parse(response.body)

# Writes JSON to a file for debugging purposes
#File.write('../content.json', JSON.pretty_generate(json_text))

API_URL = "https://strapifeather.ngrok.io"
THUMB_DIR_PATH = "../assets/thumbnails/"
IMG_DIR_PATH = "../assets/images/"

json_text.each{ |item| 

    # Download thumbnail images
    if item["thumbnail"]
        img_thumbnail_format = item["thumbnail"]["formats"]["medium"]

        # get image url and set up image path
        img_url = API_URL + img_thumbnail_format["url"]
        img_path = THUMB_DIR_PATH + img_thumbnail_format["name"]

        # set up escaped path for webp conversion
        img_path_escaped = Shellwords.escape(img_path)
        img_webp_path = img_path_escaped + ".webp"

        # check if images exists already
        if !(File.file?(img_path)) || !(File.file?(img_webp_path))
            File.write(img_path , HTTParty.get(img_url))

            # write webp version with shell script
            `convert #{img_path_escaped} -define webp:lossless=true #{img_webp_path}`
        end

    end
    
}