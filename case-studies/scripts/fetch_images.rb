# Script to fetch all the images from the Strapi API
require 'httparty'
require 'json'      # gem install json
require 'parallel'
require 'shellwords'

response = HTTParty.get('https://strapifeather.ngrok.io/contents')
json_text = JSON.parse(response.body)

# Writes JSON to a file for debugging purposes
File.write('../content.json', JSON.pretty_generate(json_text))

$API_URL = "http://strapifeather.ngrok.io"
$THUMB_DIR_PATH = "../assets/thumbnails/"
$IMG_DIR_PATH = "../assets/images/"

def pull_images(format_list, directory_path)

    Parallel.each(format_list) { |format, value|
        # set up img_url and path to download folder
        img_url = $API_URL + value["url"]
        img_path = directory_path + value["name"]

        img_path_escaped = Shellwords.escape(img_path)
        img_webp_path = img_path_escaped + ".webp"
        img_jpg_path = img_path_escaped + ".jpg"

        if !(File.file?(img_path+".webp"))
            puts "Fetching #{img_webp_path}"
            `convert #{img_url} -define webp:lossless=true #{img_webp_path}`
            `convert #{img_url} #{img_jpg_path}`
        end  
    }
end

def pullOneImage(image_json, directory_path)
    img_url = $API_URL + image_json["url"]
    img_path = directory_path + image_json["name"]

    img_path_escaped = Shellwords.escape(img_path)
    img_webp_path = img_path_escaped + ".webp"
    img_jpg_path = img_path_escaped + ".jpg"

    if !(File.file?(img_webp_path))
        puts "Fetching #{img_webp_path}"
        `convert #{img_url} -define webp:lossless=true #{img_webp_path}`
        `convert #{img_url} #{img_jpg_path}`
    end  
end

json_text.each{ |item| 

    # Download content images
    if item["Section1"]
        item["Section1"].each{ |section|

            if section["image"]
                pullOneImage(section["image"], $IMG_DIR_PATH)
            end
        }
    end

    # Download splash images
    if item["splash"]["splashImage"]
        pullOneImage(item["splash"]["splashImage"], $THUMB_DIR_PATH)

        # use smaller image format for thumbnails
        pull_images(item["splash"]["splashImage"]["formats"], $THUMB_DIR_PATH)

    end
}