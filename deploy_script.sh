#!/bin/sh

echo "hi first run git fetch, enter password then run this script. sudo sh deploy_script.sh "
git pull origin mmaster || 
npm run-script build || 
echo "ok now mv build to correct location." ||
rm -rf /var/www/bayonforte.com/build  ||
mv build /var/www/bayonforte.com/
