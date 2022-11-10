# Installation

BaseApp requires [Node.js](https://nodejs.org/) v16+ to run. If you have nvm installed, simply run `nvm use` and it will change the node version in the current project.

- Install the dependencies and devDependencies.

```sh
yarn install
```

### _iOS (Only for Mac OS Users)_

- Install Pods.

```sh
npx pod-install
```

- Start Metro Instance in one terminal

```sh
yarn start
```

Open the app in your ios Simulator

```sh
npx react-native run-ios
```

### _Android_

Start a Metro instance in a terminal

```sh
yarn start
```

Open the app in your Android Simulator

```sh
npx react-native run-android
```

# Customizing

### _Custom Fonts_

Any downloaded fonts have to be moved to the `assets/fonts` directory, then run `npx react-native-asset` to link them.

Once the fonts are linked, change the mapping in `theme/fonts` to match the fonts loaded.
