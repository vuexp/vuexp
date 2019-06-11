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
git commit -m 'Generated Docs Deploy [ci skip]'

cd -

git push --no-verify --set-upstream origin ${CIRCLE_BRANCH}
