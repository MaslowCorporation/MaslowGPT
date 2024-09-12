
# Make a IOS version of your beloved app 🌞

Follow these instructions to install your app on your IPhone / IPad

First, follow this tutorial to setup

https://docs.expo.dev/build/setup/

Then follow

https://docs.expo.dev/develop/development-builds/create-a-build/

It's very easy and simple. We will use `EAS Build` to do so ;-)

To sum it up, here's the most important parts.


### Create an Expo account for free

EAS Build is available to anyone with an Expo account, regardless of whether you pay for EAS or use our free tier. You can create an Expo account at 

https://expo.dev/signup.

### Install eas-cli globally

Run 

```
npm i -g eas-cli
```

### Login to your Expo account

Run

```
eas login
```

### Configure the ios project

Run

```
eas build:configure
```

Additional configuration may be required for some scenarios:

Does your app code depend on environment variables? 

Is your project inside of a monorepo? 

Do you use private npm packages? 

Does your app depend on specific versions of tools like Node, Yarn, npm, CocoaPods, or Xcode?

If you answer yes to any of those cases, Then also Follow

https://docs.expo.dev/build/setup/#configure-the-project

### Install and Setup XCode in your computer (for MacOS users that want to run their iOS app on the iOS simulator during dev.)

Install XCode either from: 

- [the Apple Store](https://www.apple.com/us/search/xcode?src=globalnav) 

(if the XCode app from the Apple Store is compatible with your MacOS version) 

or 

- [The XCodeReleases website](https://xcodereleases.com)

(If you have a older MacOS version that is incompatible with the XCode app from the Apple Store)

Once installed, start XCode, then follow these instructions to setup the iOS simulator

[iOS Simulator setup](https://docs.expo.dev/workflow/ios-simulator/)

### Create a development build for your iOS simulator, in the cloud, and run it ;-)

Create a `GoogleService-Info.plist` file in your Firebase Console app project, and add this file inside the `ios` folder of your app.

Open this `GoogleService-Info.plist` file, and take note of the `REVERSED_CLIENT_ID` key there. It should be something like `com.googleusercontent.apps.some-id`

Run the commands below to add a URL scheme for your app. Replace `YOUR_REVERSED_CLIENT_ID` with the `com.googleusercontent.apps.some-id` from your own `GoogleService-Info.plist` file. (VERY IMPORTANT !)

```
npx uri-scheme list
npx uri-scheme add YOUR_REVERSED_CLIENT_ID
```

Then follow [these](https://docs.expo.dev/develop/development-builds/create-a-build/#create-a-build-for-emulatorsimulator) instructions, to generate a installable build for your iOS app

(follow the one for iOS specifically)

Once built successfully, you'll get a QR Code and a URL link thast allows you to download the built app.

Use the URL link to download the buit app on your computer.

Once downloaded, extract the app from the zipped file.

Then open XCode, then on the appbar, click on `Xcode => Open Developer Tool => Simulator` to start the iOS simulator. 

Once the iOS simulator has started, drag and drop the extracted app file to the iOS simulator window to install your app on the iOS simulator.

Once the app is installed in your simulator, make sure you have `Watchman` installed on your computer.

Here are the instructions for MacOS:

[Watchman installation/setup for MacOS users](../TipsTricks/README.md#watchman-installation-macos)

Then run

```
npm start
```

at the root of your app folder to start Metro Bundler.

Once all that is done, then click on your app's icon in your iOS emulator to start your app.

### Subscribe to Apple's developer program (99 €/$ per year)

In order to install your iOS app on  a physical iPhone / iPad, and also to be able to publish your iOS app to the Apple Store, you need to purchase a Apple Developer license.

To do so, go to 

https://developer.apple.com/programs/enroll/

and enroll

### Register your Apple device with your Expo account

Plug your IPhone / IPad to your computer, via USB, then run 

```
eas device:create
```

### Create a development build in the cloud, for your iOS device

Run this command, and sit back and wait ;-) Your app will be cooked in about 30 minutes

```
eas build --profile development --platform ios
```

After the build is complete, you can download it on your iOS device by scanning the QR code from the device's camera from the Expo CLI. The QR code is provided when the eas build command has finished running.

Scan the QR code using the system's camera, and install the shizzle ;-)

### Enable developer mode in your IPhone / IPad

Devices running iOS 16 and above require enabling a special OS-level Developer Mode to install development builds. If you don't have this setting enabled or are installing your first development build on your device, follow this tutorial to enable it.

https://docs.expo.dev/guides/ios-developer-mode/

### Start the app

....

### Customize the app startup screen

See 

https://github.com/expo/expo/tree/main/packages/expo-splash-screen#-configure-ios

to customize the app loading screen.

### If you struggle ;-)

If you need help, just hit me up at 

https://github.com/MaslowCorporation/MaslowGPT/issues

and ask for help. Me ore someone from the community will gladly help you. 

Also, Google is your friend, my friend ;-)

Blessings for you and your adventure !