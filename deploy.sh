#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

git add -A
git commit -m 'deploy'

git push -f git@github.com:vuexp/vuexp.git master

cd -
