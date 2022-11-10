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

### _Splash Screen_

React Native Splash Screen has been installed and configured to work out of the box.

#### Android

Replace the file `android/app/src/main/res/drawable/launch_screen.png` with your Splash Screen.

#### iOS

Splash Screen has to be added using xcode [https://blog.logrocket.com/splash-screen-react-native/]

# Enable EAS Updates

EAS and Expo are used to enable expo updates and update the code by running `yarn setup-eas-updates`.
If everything worked, you should be able to publish updates OTA that don't require native compilation by running `eas update` command
