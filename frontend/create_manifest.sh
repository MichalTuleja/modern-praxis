#!/bin/bash

MANIFEST_FILE='mp.appcache'
MAINFEST_REGEX='mp\.appcache'
CURRENT_DATE=`date`

echo -n 'Creating manifest file...'

echo 'CACHE MANIFEST' > $MANIFEST_FILE
echo '# Manifest file for Modern Praxis app' >> $MANIFEST_FILE
echo "# Created at ${CURRENT_DATE}" >> $MANIFEST_FILE
find ./ -type f >> $MANIFEST_FILE
sed -i "s/${MAINFEST_REGEX}//g" $MANIFEST_FILE
sed -i "s/create\_manifest\.sh//g" $MANIFEST_FILE
sed -i "s/\.\///g" $MANIFEST_FILE

echo 'done.'