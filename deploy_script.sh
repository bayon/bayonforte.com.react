#!/bin/sh

echo "hi "
git fetch || git pull origin mmaster || npm run-script build || echo "ok now mv build to correct location."