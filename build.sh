#!/bin/bash

sass --style compressed scss/style.scss style.css
cd case-studies/scripts && bash build.sh