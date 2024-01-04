# SC Dahenfeld 1946 e.V.

![Build Status](https://github.com/tdittmann/sc-dahenfeld/actions/workflows/main.yml/badge.svg)
![Known Vulnerabilities](https://snyk.io/test/github/tdittmann/sc-dahenfeld/badge.svg)
[![codecov](https://codecov.io/gh/tdittmann/sc-dahenfeld/graph/badge.svg?token=CdPZyndcfi)](https://codecov.io/gh/tdittmann/sc-dahenfeld)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=bugs)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=tdittmann_sc-dahenfeld&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=tdittmann_sc-dahenfeld)

## Requirements

To run the app you need to create a `credentials.ts` file which contains the credentials to access the backend in the
folder `src/environments` with the following content:

```typescript
export const credentials = {
    authUsername: 'USERNAME',
    authPassword: 'PASSWORD'
};
```

## Development server

Run `npm run start` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you
change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests.

## Release Guide

Before releasing the apps to the stores you need to update the following files and increment to the correct version:

* config.xml
* package.json
* imprint.page.ts

After that you need to build the project and copy files:

```
ionic build --prod
npx cap copy
```

### Android

Open Android Studio with the following command

```
npx cap open android
```

Change version code & version name and generate a signed apk or bundle: Build -> Generate signed APK / Bundle. Select
keystore, set password
and alias and click "next". After that the apk or bundle should be created. Locate the file, upload it
on https://play.google.com/apps/publish
with a new release.

#### Push-Notifications

In order to use push notificiations you need an `google-services.json` in the directory `android/app/`. The file can be
found in [Google Firebase](https://firebase.google.com/).

### iOS

Open the project in XCode with

```
npx cap open ios
```

change version. Select "Generic iOS Device" in dropdown at the top. Then use Product -> Archive to upload the file.
After that you can continue the release
process on https://itunesconnect.apple.com/.

#### Push-Notifications

You need to enable the push notifications in XCode. Add them as Capability, then you are ready to go.
