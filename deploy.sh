#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git config user.email "yigit@erol.co"
git config user.name "Yigit Erol"

git add -A
git commit -m 'deploy'

git push --no-verify --set-upstream origin

cd -
