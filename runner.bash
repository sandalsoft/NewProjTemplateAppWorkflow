#!/usr/bin/env bash

# Save the script arguments
SCRIPT_NAME=$0
APP_TYPE=$1 #node or react
APP_NAME=$2 # Name of app

cd output;

git init;

git remote add origin https://github.com/sandalsoft/bashme

git pull origin master

touch popo.txt

git add .

git commit -m "INITIAL COMMIT"

git push origin master

