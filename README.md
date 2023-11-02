### React + Capacitor Web App Template

This project serves as a 'starter for 10' when creating a new React application which can run the browser and on native devices.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Technologies](#technologies)
- [Installation](#installation)
- [Setup](#setup)
- [Testing](#testing)

## Technologies

- [React](https://react.dev/) - project framework
- [Typescript](https://www.typescriptlang.org/) - main language
- [Vite](https://vitejs.dev/) - project build tool
- [Capacitor](https://capacitorjs.com/) - native runtime for iOS and Android
- [Sass](https://sass-lang.com/) - styling
- [Vitest](https://vitest.dev/) - testing framework

## Installation

This module is distributed via [npm](https://www.npmjs.com/package/npm) and needs to be installed on your device.

Installing project dependencies:

```
npm install
```

## Setup

Running local web development build:

```
npm run dev
```

Running local iOS development build:

```
npm run dev:ios
```

Running local Android development build:

```
npm run dev:android
```

> NOTE: The running of local native builds for iOS and Android uses the [Ionic CLI](https://ionicframework.com/docs/cli)
> This facilitates hot reloading without the need for any additional configuration. 

In order to view local builds for native devices, [X Code](https://apps.apple.com/us/app/xcode/id497799835?mt=12) will need to be installed to open an iOS simulator and [Android Studio](https://developer.android.com/studio?gclid=Cj0KCQiA6vaqBhCbARIsACF9M6lZHr9nnGn8CM_GHyPpHVgMvKClI2bOoQO3aPQBXoTPYNd6IU5rNA0aAsRoEALw_wcB&gclsrc=aw.ds) for an Android simulator.

## Testing

Running tests:

```
npm run test
```

Viewing test coverage:

```
npm run test:coverage
```

Viewing Vitest UI:

```npm run test:ui``` and navigate to [http://localhost:51204/__vitest__/#/](http://localhost:51204/__vitest__/#/)
