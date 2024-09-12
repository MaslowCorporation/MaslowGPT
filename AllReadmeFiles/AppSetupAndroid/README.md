
# Make a Android version of your beloved app 🌞

Follow these instructions to install your app on your Android device / emulator.

https://docs.expo.dev/build/setup/

https://docs.expo.dev/develop/development-builds/create-a-build/

It's very easy and simple. We will use `EAS Build` to do so ;-)

To sum it up, here's the most important parts.

### Create an Expo account for free

EAS Build is available to anyone with an Expo account, regardless of whether you pay for EAS or use our free tier. You can create an Expo account at 

https://expo.dev/signup.

Keep note of your account email address and password. You'll need those very soon ;-)

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

### Configure the Android project

Run

```
eas build:configure
```

Additional configuration may be required for some scenarios:

Does your app code depend on environment variables? 

Do you use private npm packages? 

Does your app depend on specific versions of tools like Node, Yarn, npm ?

If you answer yes to any of those cases, Then also Follow

https://docs.expo.dev/build/setup/#configure-the-project

In this tutorial, you don't encounter such cases so you're good to go ;-)

### Add the SHA 1 from EAS to your google-services.json file

To get the SHA 1 from Expo EAS, run this command

```
eas credentials
```

Create new SHA credentials if needed.

Then copy/paste the printed SHA 1 key, to your Firebase Console settings 

...

### Create a development build for your Android device or emulator, in the cloud, and run it ;-)

[Follow these instructions for the Android emulator installation.](https://docs.expo.dev/develop/development-builds/create-a-build/#create-a-build-for-emulatorsimulator) 

[Follow these instructions for the Android device installation.](https://docs.expo.dev/develop/development-builds/create-a-build/#create-a-build-for-the-device)

(There's instructions for Android & IOS. Follow the instructions for Android specifically)

Once the app is installed in your device / simulator, make sure you have `Watchman` installed on your computer.

Installing Watchman on Windows 10, macOS, and Linux involves slightly different procedures for each operating system. Here are the instructions for each operating system:

[Watchman installation/setup for Windows users](../TipsTricks/README.md#watchman-installation-windows-10)

[Watchman installation/setup for Linux users](../TipsTricks/README.md#watchman-installation-linux)

[Watchman installation/setup for MacOS users](../TipsTricks/README.md#watchman-installation-macos)

Once Watchman is installed, run the command below 

```
npm start
```

at the root of your app folder to start Metro Bundler.

Once all that is done, then click on your app's icon in your device / emulator to start your app.

### Start the app

....

### Customize the app startup screen

See 

https://github.com/expo/expo/tree/main/packages/expo-splash-screen#-configure-android

to customize the app loading screen.

### Add a nice app icon for your Android app, if not already done. More info here:

See 

https://stackoverflow.com/a/36233546   

(OPEN THE android/ folder of your app, in Android Studio, and open the `Android` or `Project Files` project viewer, not `Project`)

### Also give a nice name to your Android app, with a capital letter as the first letter.

Edit the `app_name` string to whatever app name you want. In the following file, in your Android app folder:

android\app\src\main\res\values\strings.xml

### Add a custom notification icon to your Android app

See https://notifee.app/react-native/docs/android/appearance.

Also, open the `src/services/ShowNotification/ShowNotification.js` , and set the `smallIcon` property to the name of your desired icon.

### If you struggle ;-)

If you need help, just hit me up at 

https://github.com/MaslowCorporation/MaslowGPT/issues

and ask for help. Me ore someone from the community will gladly help you. 

Also, Google is your friend, my friend ;-)

Blessings for you and your adventure !