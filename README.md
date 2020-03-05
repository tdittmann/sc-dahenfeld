# SC Dahenfeld 1946 e.V.
[![Build Status](https://travis-ci.org/tdittmann/sc-dahenfeld.svg?branch=master)](https://travis-ci.org/tdittmann/sc-dahenfeld)

# Version update

Don't forget the following files:
* config.xml
* package.json
* imprint.page.ts

# How to release

First build the project and copy files:
```
ionic build --prod
npx cap copy
```

## Android
Open Android Studio
```
npx cap open android
```
change version code & version name and generate a signed apk or bundle: Build -> Generate signed APK / Bundle. Select keystore, set password 
and alias and click "next". After that the apk or bundle should be created. Locate the file, upload it on https://play.google.com/apps/publish 
with a new release. 

## iOS
Open 
```
npx cap open ios
```
change version. Select "Generic iOS Device" in dropdown at the top. Then use Product -> Archive to upload the file. After that you can continue the release
process on https://itunesconnect.apple.com/.