#!/bin/bash

# installs for ruby scripts
if [ $# == 1 ] && [ $1 == "all" ];
then
gem install httparty && \
gem install json && \
gem install mustache
fi

echo Fetching images...
ruby fetch_images.rb

echo Building pages...
ruby build_pages.rb