#!/bin/bash

DATENOW=""
NEWDATESTR="$(node -e 'console.log( (new Date(Date.now() + 20*24*3600*1000)).toISOString().slice(0,10) )')"
echo "NEWDATESTR=$NEWDATESTR"

sed "s/ALERTDATESTRING/$NEWDATESTR/" js/mortality-issue-tmpl.js > js/mortality-issue.js


git add js/mortality-issue.js
git commit -m "Auto postpone death alert to $NEWDATESTR"
git push
