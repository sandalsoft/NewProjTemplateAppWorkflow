#!/bin/bash

cd output;

CURRENTDIR=${PWD##*/}
GITHUBUSER=$(git config github.user)
GITHUB_TOKEN=$(git config github.token)


# Get user input
read -p "New repo name (enter for ${PWD##*/}):" REPONAME
read -p "Git Username (enter for ${GITHUBUSER}):" USER
read -p "Repo Description:" DESCRIPTION



echo "Creating ${USER:-${GITHUBUSER}}/${REPONAME:-${CURRENTDIR}} on Github.com"

curl -u $GITHUB_TOKEN:x-oauth-basic https://api.github.com/user/repos -d "{\"name\": \"${REPONAME:-${CURRENTDIR}}\", \"description\": \"${DESCRIPTION}\", \"private\": true, \"has_issues\": true, \"has_downloads\": true, \"has_wiki\": true}"

# Set the freshly created repo to the origin and push
# You'll need to have added your public key to your github account
echo "Setting remote origin for ${USER:-${GITHUBUSER}}/${REPONAME:-${CURRENTDIR}}"
git remote set-url origin git@github.com:${USER:-${GITHUBUSER}}/${REPONAME:-${CURRENTDIR}}.git

echo "Pushing new repo to Github"
git push --set-upstream origin master

