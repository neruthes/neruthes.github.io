#!/bin/bash

REPODIR="$PWD"

node sitemap.js

# cd $REPODIR/resume
# bash build.sh

cd $REPODIR/blog
bash run-me-before-publish.sh

cd $REPODIR/album
node album_sitemap.js
