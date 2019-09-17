#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'vuexp.com' > CNAME

git init
git config user.email "yigit@erol.co"
git config user.name "Yigit Erol"
git add -A
git commit -m 'Generated Docs Deploy [ci skip]'

git push -f git@github.com:vuexp/vuexp.git master:gh-pages

cd -
