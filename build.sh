#!/bin/bash

sass --style compressed scss/style.scss style.css

if [ $# == 1 ] && [ $1 == all ];
then
cd case-studies/scripts && bash build.sh all
else 
cd case-studies/scripts && bash build.sh
fi
