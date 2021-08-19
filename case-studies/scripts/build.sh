#!/bin/bash

#installs for ruby scripts
gem install httparty && \
gem install json && \
gem install mustache

ruby fetch_images.rb
ruby build_pages.rb