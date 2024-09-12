
## Create the RemindMe (or Huber ? ;-) app, and install it on your Android device 

Dear adventurer, now that you have everything properly set-up, it's time for you to create your app, with the help of the

```
npx maslow create-react-native-app
```

command

<p align="center">
  <img src="assets\91c16e5c99d026c9c79ad0b2683260e9.png" alt="">
</p>

Give a name to your app.

<p align="center">
  <img src="assets\83d90afd6874cb2e2289a302e5fb90b2.png" alt="">
</p>

Once you entered your app name, press 'Enter' to create your app.
If everything was successful, you should see something like this in your Terminal.

<p align="center">
  <img src="assets\3330128bb6614d32dc6f8417823eedce.png" alt="">
</p>

Now, navigate to the root of your app folder, then install all it's dependencies using the command

```
npm install
```

<p align="center">
  <img src="assets\61178ae6505cdb1d9f64be9f66493378.png" alt="">
</p>

Before you can install your app on your Android device, you will need to link your app to Firebase.

Go to https://console.firebase.google.com/

I recommend you to create a dedicated google email address/account for this. Write this email address, and the password associated to it, on a piece of paper. We'll write down all the important credentials on paper, during this whole process. It's always a good idea to write things down on paper. Once you created your google account, you should see a screen similar this one below. Click on 'Create a project'.

<p align="center">
  <img src="assets\b5951155e1121e4e888b14b029d7036f.png" alt="">
</p>

A prompt will show up, asking you to name your Firebase project.

<p align="center">
  <img src="assets\b8fd9717894472735d0b8225251d0168.png" alt="">
</p>

Type your project's name. You can give it any name you want, but it makes sense to give it the same name as your app.

<p align="center">
  <img src="assets\d9b1ea13228c76ec4f05ed4c34b37316.png" alt="">
</p>

Press the 'Continue' button when done.

<p align="center">
  <img src="assets\b316dcfe4874e93715edf9b64f3cea2f.png" alt="">
</p>

Another prompt will show up, asking you if you want to enable analytics. It is set to true by default. Keep it that way.

<p align="center">
  <img src="assets\b31435012b054c5bfa7132605c290b0c.png" alt="">
</p>

Press the 'Continue' button.

<p align="center">
  <img src="assets\2c8f18f8a0d1da73d277ffdbe67977a1.png" alt="">
</p>

Another prompt will show up, asking you to configure Google Analytics.

<p align="center">
  <img src="assets\a5e2201280f6642bc1cb191a48205e7a.png" alt="">
</p>

Select 'Default Account for Firebase'.

<p align="center">
  <img src="assets\7e0ee99b9c4231c1940b889a49e7ae10.png" alt="">
</p>


<p align="center">
  <img src="assets\4d7949248917e6346af590927e7de70b.png" alt="">
</p>

Click on 'Create Project'

<p align="center">
  <img src="assets\9f467ff28ac6700490a9295978003542.png" alt="">
</p>

Once the project has been created successfully, press 'Continue'

<p align="center">
  <img src="assets\57d284415da4afa058488dcf2cc572c7.png" alt="">
</p>

You're now in the Dashboard of your Firebase account.
Click on the Android button to link and Android app to link an Android app to your Firebase shizzle. If you don't see the Android/IOS/etc.... buttons, click on the Home button in your page, to see them.

<p align="center">
  <img src="assets\537295f37f523e04b6456abd77c8f031.png" alt="">
</p>

You will now need to add data coming from your freshly created app, to the 'Add Firebase to your Android app' screen.

<p align="center">
  <img src="assets\c778864304cfc6c954f2178d28165ea7.png" alt="">
</p>

To do so, open the android/app/build.gradle file in your app folder, and copy the applicationId value.

<p align="center">
  <img src="assets\00de0a1cfb12df046f6bd107e00fe8d7.png" alt="">
</p>

Paste this value in the 'Android package name' field

<p align="center">
  <img src="assets\8ad281f50736f4e143cdddf4caa17143.png" alt="">
</p>

You can ignore the 'App nickname' field. Keep it empty, or add a nickname if you want.

<p align="center">
  <img src="assets\6aca6426515a7542e212e9b00215a2c7.png" alt="">
</p>

Now it's time to generate a SHA 1 key for your Android app

<p align="center">
  <img src="assets\5a61404a896e2ecbb282ba5d7b1ea5fc.png" alt="">
</p>

At the root of your Android app folder, run the following commands to generate a fresh SHA 1 key for your app.

```
npm run del-sha-keys; npm run gen-sha-keys; npm run get-sha-keys
```

Add a first and last name. You can type something like Dingle McDingleberry ;-)

<p align="center">
  <img src="assets\012d4ad97e1308fa7b5b016df9946def.png" alt="">
</p>

<p align="center">
  <img src="assets\31b7732de512d67f15f94447af011f4b.png" alt="">
</p>

Give a organizational unit name. Same shizzle, you can write your app's name, or your business name, anything you want.

<p align="center">
  <img src="assets\cb8928eb64940c326112ea6d95f19c25.png" alt="">
</p>

Give a organization name. you can write the same as the organizational unit.

<p align="center">
  <img src="assets\9ef91072d8d319899c4ab7cce01dfe43.png" alt="">
</p>

Write your city's name. You can write anything you want. 'Pallet Town', 'Gotham City', 'New York', 'Sovngarde', whatever ;-)

<p align="center">
  <img src="assets\f66f3491b2a04f9a7f3d271a8f35f647.png" alt="">
</p>

Write your state's name. You can write anything you want.

<p align="center">
  <img src="assets\d44fb9b0a463e6abf53bd1d3b1201136.png" alt="">
</p>

Write your country's code. You can write anything you want.

<p align="center">
  <img src="assets\2a85caad958ec0fdbb05934231f5e460.png" alt="">
</p>

Now confirm the data you entered. By typing 'y' (or 'o' , or whatever you're prompted to type to confirm, depending on your computer's language)

<p align="center">
  <img src="assets\209428770018c3a6756138cbfbfd7986.png" alt="">
</p>

Once the commands are done running, scroll up until you find the all mighty SHA 1 key, and copy it.

<p align="center">
  <img src="assets\e2d154ad3ef0f4529ee7afc49d486f9c.png" alt="">
</p>

<p align="center">
  <img src="assets\529dddcf9ad2d4727aa0d4688c031bc7.png" alt="">
</p>

<p align="center">
  <img src="assets\8a59e4f3ecef21aec80c644164aa73d7.png" alt="">
</p>

Paste this SHA 1 key in the 'Debug signing certificate' field

<p align="center">
  <img src="assets\6dc4b2378a3b797f55ac21194a30ebb5.png" alt="">
</p>

Now press 'Register app'

<p align="center">
  <img src="assets\9b7a992b3fbfac317f609d68b959657b.png" alt="">
</p>

You'll be asked to download the 'google-services.json' file. Don't download it ! We have other stuff to do before downloading this file. Press 'Next'.

<p align="center">
  <img src="assets\adf5f09701565d98bfe80e9eb006bb20.png" alt="">
</p>

Skip the 'Add Firebase SDK' part and click 'Next'

<p align="center">
  <img src="assets\58667e13feea0657399599378ca76087.png" alt="">
</p>

<p align="center">
  <img src="assets\d4c2f58e45aac16ae1814190ace15f4b.png" alt="">
</p>

Press the 'Continue to console' button

<p align="center">
  <img src="assets\7323e1be4a037bbc7e4e02c39b085e90.png" alt="">
</p>

Yay ! Now we're back to the Dashboard

<p align="center">
  <img src="assets\155f11c06393088f36eec3f2616d5887.png" alt="">
</p>

Scroll down a little bit, and click on 'Cloud Firestore'

<p align="center">
  <img src="assets\ada1c920c6f276cc2df3be5e32266de2.png" alt="">
</p>

Click the 'Create database' button

<p align="center">
  <img src="assets\0482e8758d73fd1d2ec14dc55a1c660e.png" alt="">
</p>

A prompt will show up. You can set the 'Cloud Firestore location' if you want. Press 'Next'

<p align="center">
  <img src="assets\ad0ec29f20ac112fe3ba5d56917b5fe8.png" alt="">
</p>

Next, you'll be prompted to choose between 'Production mode' and 'Test mode'. Choose 'Production mode' , and press 'Enable'

<p align="center">
  <img src="assets\d6c268d97f002e50ee1a74d978dcb531.png" alt="">
</p>

Now you'll be at the 'Cloud Firestore' screen, where you can interact with your cloud database, where your app user data will be stored.


<p align="center">
  <img src="assets\e926033eac952dbc5cc92318761af28c.png" alt="">
</p>


Click on the 'Rules' section of the 'Cloud Firestore' page

<p align="center">
  <img src="assets\e2cbd6eba877147132d8137b6d2936c3.png" alt="">
</p>

Delete the default rules

<p align="center">
  <img src="assets\0ff3b72cea0749f018eb4faf6b30b6a2.png" alt="">
</p>

<p align="center">
  <img src="assets\c4f4c6b4b63fa61447719d1403f40d03.png" alt="">
</p>

Copy/paste the rules below as the new rules, 

Replace `yourappname` in `SqliteReduxDatabases_yourappname` , with the name of your app, as seen in the name property of the `package.json` file in your app

then click on 'Publish' to save those new rules.

This Cloud Firestore rule is necessary for the database backup mechanism to work properly ;-)

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /SqliteReduxDatabases_yourappname/{document} {
      // Allow read, update and delete access only if the user is authenticated and the document's ID matches the user's UID
      allow read, update, delete: if request.auth != null && request.auth.uid == resource.id;
          
      // allow authenticated users to create some work
      allow create: if request.auth != null;
    }
  }
}
```

<p align="center">
  <img src="assets\0a2fa36b0c72e37685d7efc27d94a61c.png" alt="">
</p>

Click on the 'Home' button to go back to the Dashboard, then scroll down and click on 'Authentication'

<p align="center">
  <img src="assets\fc1d20b1996bd7904468585747838190.png" alt="">
</p>

<p align="center">
  <img src="assets\328544c512f1a0fb5a3142bb621c8316.png" alt="">
</p>

Click on 'Get started'

<p align="center">
  <img src="assets\a25dc88a7b9e2f5488722f0e0581c4e3.png" alt="">
</p>

Click on 'Sign in method'

<p align="center">
  <img src="assets\b1b50b1c7752a66b38cf4fbd1a4716b1.png" alt="">
</p>

Click on 'Google'

<p align="center">
  <img src="assets\f786141a74bd96657e07bc8fb1f8944b.png" alt="">
</p>

Enable Google Sign-In

<p align="center">
  <img src="assets\20e65de2497406b31c8c7ab669e77890.png" alt="">
</p>

<p align="center">
  <img src="assets\f39e099245c71bc3837780c8baa5c120.png" alt="">
</p>

Select an email address in the 'Support email for project' menu.

<p align="center">
  <img src="assets\79de8863e69d4d059211e2ddb5e0655a.png" alt="">
</p>

<p align="center">
  <img src="assets\0e96e872c08d15a9807e7aa2ec17ee0d.png" alt="">
</p>

<p align="center">
  <img src="assets\24ad9368ad12978e8d5fabf4d96f55e6.png" alt="">
</p>

Press 'Save'

<p align="center">
  <img src="assets\34fe67a409a9e6b8751d424aaee2d200.png" alt="">
</p>

Once again, you'll get a prompt asking you to download google-services.json. Don't download it ! We have one last thing to do before downloading this file. Press 'Done'

<p align="center">
  <img src="assets\a9588857260abf99357c10a919a1f0e0.png" alt="">
</p>

Click on the 'Provider: Google / Status: Enabled' bar

<p align="center">
  <img src="assets\502f8ddd778e9e152ac48910fd5fdd89.png" alt="">
</p>

<p align="center">
  <img src="assets\6e4b12e4eb37cfd5841fc57192b054ae.png" alt="">
</p>

Click on the 'Web SDK configuration'

<p align="center">
  <img src="assets\6fe7cee980bb59c93bc41ad3f6cba426.png" alt="">
</p>

Copy the 'Web Client ID'

<p align="center">
  <img src="assets\26f1ec068ad0cc0f92b754c50f98bce0.png" alt="">
</p>

Click on 'Cancel'

<p align="center">
  <img src="assets\56cf0a84ccd4d0abbb3dd212e8036818.png" alt="">
</p>

In your app folder, open the `AppPieces/Fetchers/FetchGoogleSignIn.js` file, then replace the '<GGL_CLIENT_ID>' text with the Web Client ID you just copied earlier. Paste it as shown below.

NOTE: I know this is a bad practice to put important credentials like this in code, and I will soon edit this part of the tutorial, so it uses the `react-native-dotenv` package, to put important credentials like this in a `.env` file that's not being commited to your Github repo. More info here:

https://www.npmjs.com/package/react-native-dotenv

<p align="center">
  <img src="assets\a3555624e78f87685a6233b2c20a5c68.png" alt="">
</p>

<p align="center">
  <img src="assets\0193985c4b414418d0efbf1c6e8bc5e3.png" alt="">
</p>

Press the 'Home' button to go back to the Dashboard

<p align="center">
  <img src="assets\b2d61d3ebac43e99d8d74099a0a62d1c.png" alt="">
</p>

Click on the part where your applicationId is written

<p align="center">
  <img src="assets\07b925db1c77fe44fd42407d21f979d6.png" alt="">
</p>

Click on the gear icon

<p align="center">
  <img src="assets\218b5172b4d72b7c7b8b27c97b38b8e7.png" alt="">
</p>

In the 'Project settings' page, scroll down until you find the button that allows you to download the google-services.json file.

<p align="center">
  <img src="assets\c2853abf948b03435b784dcf99f7cb2d.png" alt="">
</p>

Press that download button to finally download this google-services.json file.

<p align="center">
  <img src="assets\734a47e6482f7251481d798204ab2133.png" alt="">
</p>

Go to your Downloads folder, and copy this freshly downloaded google-services.json file (using CTRL+C)

<p align="center">
  <img src="assets\c71f501aa81cdb1af99fa6bfdd42ab14.png" alt="">
</p>

Go to the 'android/app' folder of your app, and paste this file there.

<p align="center">
  <img src="assets\6dbeaf39a6c5ac639cc8a22f732c8a4a.png" alt="">
</p>

Now it's time to install this app on your Android device.

### Android app install via USB

First, turn USB debugging on your Android device.

Follow these instructions: 

https://www.lifewire.com/enable-usb-debugging-android-4690927

Please note that the process varies for some manufacturers like Xiaomi.

If the link above is not valid for your phone/tablet, just Google 
"How to enable USB debugging for <YOUR PHONE/TABLET>"

Once USB debugging is turned on, plug your Android device to your computer, via USB.

On the first plug, a popup will show up on your phone, asking you if you want to allow USB debugging. Press 'Yes'. Make sure you toggle 'always allow' so it doesn't show up everytime you plug it.

<p align="center">
  <img src="assets\8c6e71c3803713d7598c9cab1db83802.png" alt="">
</p>

Once plugged and allowed, run the 

```
npm run android
``` 

command, at the root of your app folder.

<p align="center">
  <img src="assets\4ac2fe4f557ceb1fabc4313de87d12d3.png" alt="">
</p>

<p align="center">
  <img src="assets\b548a8575fb46b4f102091b44b044136.png" alt="">
</p>

<p align="center">
  <img src="assets\e68b2b04fa6ee0ddec7f746c7aca6f0f.png" alt="">
</p>

The Metro Bundler window will open. Don't close this window. This will allow us to make changes in our code , and see the results immediately in our app. (Fast Refresh)

<p align="center">
  <img src="assets\9077b954df5613e9f10036492461edfa.png" alt="">
</p>

Wait for the installation process. It should take about 3-4 minutes to complete.

<p align="center">
  <img src="assets\c8d1b16f4f6a063092ed05ff75f9e65b.png" alt="">
</p>

When the installation has successfully completed, you should see this in your terminal.

<p align="center">
  <img src="assets\d9f6a75504a56defe4268fd8bf26d2e4.png" alt="">
</p>

Your app will start ;-)

Once your app is installed on your Android device, you can continue the tutorial, to the `Fast Refresh Setup` section ;-)

### Android app install on emulator

If you have a powerful computer with virtualization enabled, Follow the `Using an Emulator` section of this tutorial:

https://www.waldo.com/blog/run-a-react-native-app

Once your app is installed on the emulator, you can continue the tutorial, to the `Fast Refresh Setup` section ;-)

### Android app install via APK

Run the following command, to generate a debug APK of your Android app.

```
npm run build-android-debug
```

Then run 

```
npm run copy-apk-windows
```

or

```
npm run copy-apk-linux
```

or

```
npm run copy-apk-macos
```

to move this generated APK from the depths of your Android app folder to your Desktop.

From there, install this APK on your Android device. 

To do so,  move the APK file from your Desktop to your Android device (via USB, or using Google Drive or Dropbox, whatever suits you ;-)

Then open the APK on your Android device to install it. Once installed, open the app by clicking the app icon, like with any other Android app. Your app will start.

Once your app is installed on your Android device, you can continue the tutorial, to the `Fast Refresh Setup` section ;-)

### Fast Refresh Setup

Okay, now your app is installed on your Android device or your Android emulator ! We need to do something important before we begin developing the app. We need to establish a wireless connection between your Android device and your Metro Bundler. It's very simple.

In order to do code changes, then see the changes in your Android device instantly, run the following command at the root of your Android app folder.

```
npm start
``` 

This command starts `Metro Bundler`,  the live reloading mechanism made out of magic ;-) , if it's not already running. If it's already running somewhere, it'll give an error

Once you have installed your app on a device/emulator, and Metro Bundler is running, you can work on your app and see changes whenever you save the code file you just edited. But before we can enjoy the convenience of Metro Bundler, we need to do some simple setup as described below. Let's go ;-)

### Fast Refresh Setup With Tailscale

Sometimes, setting up React Native wirelessly can be difficult, but thanks to Tailscale, it becomes very easy.

Install `Tailscale` on your computer. Tailscale is available for Windows, Linux, and MacOS computers, and for iOS and Android phones/tablets/emulators

Downloads are available at

https://tailscale.com/downloads

Once downloaded and installed on your computer, start Tailscale, and create a Tailscale account using Google or the other providers available.

<p align="center">
  <img src="assets\4d5bc1600ee8b85b94435728ffb3442c.png" alt="">
</p>

<p align="center">
  <img src="assets\cc8b99c78e9da4489021177a52475297.png" alt="">
</p>

Install `Tailscale` on your Android device.

Downloads are available at

https://tailscale.com/downloads

Once downloaded and installed on your Android device, start Tailscale, and create a Tailscale account using Google or the other providers available.

Use the same account as the one you used on your computer !

Once done, toggle the button at the top left of your Tailscale app, from `Stopped` to `Active`

<p align="center">
  <img width="300" src="assets\f8f130c26f726e80a06fea25485249bd.jpg" alt="">
</p>

<p align="center">
  <img width="300" src="assets\9667a0c84ea6ff2d912d5c7429888e1c.jpg" alt="">
</p>

In the `MY DEVICES` field, you will see all the devices where you have installed Tailscale.

Tailscale assigns an IP address for each device. We need the Taiscale IP address of your computer. 

In my case my computer is named `shadow-vu103jgc` , so click on the name of your computer in the list, to copy the corresponding IP address to your clipboard.

<p align="center">
  <img width="300" src="assets\dad809f590cecb080e9436a2ec7d599d.jpg" alt="">
</p>

Click on your app's icon to start it. 

<p align="center">
  <img width="300" src="assets\c7aa322419201795e8cab1f7f8e4fe5b.jpg" alt="">
</p>

Once you start your app, you should see a screen similar to this one. This screen allows you to setup some things in your app during the debug / development phase. In production, this screen will be gone, don't worry ;-)

<p align="center">
  <img width="300" src="assets\1b8e9487d3c0326d1e5d4a1765173c59.jpg" alt="">
</p>

Expand the `Enter URL manually` field.

<p align="center">
  <img width="300" src="assets\86d1149f451d10e19a53f94e74e32740.jpg" alt="">
</p>

Paste the Tailscale IP address in the `Enter URL manually` field. 

Add `:8081` to it, like shown below, then click on the `Connect` button:

<p align="center">
  <img width="300" src="assets\72edd7273cc57db6f20290e5d87ee5e2.jpg" alt="">
</p>

Your app will then start ! ;-)

<p align="center">
  <img width="300" src="assets\ebf9ee6d4f1fffa2ff267b0cb6cf5c63.jpg" alt="">
</p>

You can now debug without the need for a USB cable!

### CRUD and Cloud Backup testing

Okay, now you're going to test both the CRUD (Create, Read, Update, Delete) and the cloud backup features of your app. Let's go, soldier ;-)


So the first screen you should see when your app just got installed, is a dummy list of data for testing purposes. The list is obviously empty right now because we just installed the app. 


Press the + button in the bottom bar, or the 'Fill me up' button, to add an item to your list of data.

<p align="center">
  <img width="300" src="assets\5240f5e1933174cdbd4d0fbb5e949c18.jpg" alt="">
</p>

Now you're in the item creation screen

<p align="center">
  <img width="300" src="assets\80b2cc7b60865f95fed09d68ada2da4c.jpg" alt="">
</p>

Give a name to your dummy item, then press the checkmark icon to create the item.

<p align="center">
  <img width="300" src="assets\bfdcf686829a7274ce7c2d6d8ecec0a6.jpg" alt="">
</p>

Now, back to the item list. Now there's an item in it ! In order to edit the existing item, you can 'long press' it.

<p align="center">
  <img width="300" src="assets\7c39f854a9dfd3fbe7b9142e7bddcb57.jpg" alt="">
</p>

Now you're in the item editing page.

<p align="center">
  <img width="300" src="assets\a0c14494bdd1a58b2e6387e5f2ea4b86.jpg" alt="">
</p>

Rename it to whatever you want. Then press the checkmark icon to save the changes.

<p align="center">
  <img width="300" src="assets\92440c988c5d359d17f92f3601d5edc3.jpg" alt="">
</p>

As you can see, the item has been successfully edited. If you want to delete the item, you can 'long press' it, then scroll to the deletion screen

<p align="center">
  <img width="300" src="assets\855a8b5f47357d227faa9625b7e706af.jpg" alt="">
</p>

Scroll to the second screen

<p align="center">
  <img width="300" src="assets\72399959dfac9b7f4a503743bf37c229.jpg" alt="">
</p>

Click the 'Heading to the cosmic trash bin' button to delete the shizzle.

<p align="center">
  <img width="300" src="assets\a27b01de867293350673e4c5a634e7fb.jpg" alt="">
</p>

Choose 'Yes'

<p align="center">
  <img width="300" src="assets\1e2fd82574f78b320a0420ad4996fcc2.jpg" alt="">
</p>

Boom ! Now your item is gone from the list ;-)

<p align="center">
  <img width="300" src="assets\31ba397cef90856dd6f959ff27dc6618.jpg" alt="">
</p>

Okay, now that we have tested the CRUD features, it's time to test the 'cloud backup' feature. Create another item

<p align="center">
  <img width="300" src="assets\f53dc268480e4dc86430754de29683cb.jpg" alt="">
</p>

Now that your item has been created, press the 'Toolbox' icon in the top right corner of your app

<p align="center">
  <img width="300" src="assets\f9d31423efdf2c4abd575a3e03f863cc.jpg" alt="">
</p>

Press the 'Save your user data in the cloud' button.

<p align="center">
  <img width="300" src="assets\9f87194dc47aa3f17467d78449462932.jpg" alt="">
</p>

You'll be asked to login to your Google Account. Log yourself in.

<p align="center">
  <img width="300" src="assets\af7ea43ce9c2a850be074a9d75d4fd77.jpg" alt="">
</p>

Once you logged in successfully, you should get a notification in your phone, telling you that the cloud save was successful. You can go to your Cloud Firestore page and you will see that new stuff has been added. That's your user data.

<p align="center">
  <img width="300" src="assets\f6e73974c425fdf740438c0e48812626.jpg" alt="">
</p>

Now, we will delete all the app data, in order to test the backup feature. Locate your app icon in your phone, and 'long press' it

<p align="center">
  <img width="300" src="assets\e7c271b37ebe818db7fd584771f3ef20.jpg" alt="">
</p>

A tiny little menu will appear. Click on 'App info'

<p align="center">
  <img width="300" src="assets\db89ae48cf33d8dd2fd2b92d80f66422.jpg" alt="">
</p>

Click on 'Storage & cache'

<p align="center">
  <img width="300" src="assets\ab2ad6f4db0870a55b4e9c9ab7058409.jpg" alt="">
</p>

Click on 'Clear storage'

<p align="center">
  <img width="300" src="assets\44d86f32184ccd39d81debc5b808ff27.jpg" alt="">
</p>


Now restart the app, then paste the Tailscale IP address in the `Enter URL manually` field again. The reason why we need to redo this step is because we deleted the app data for this cloud backup testing. In other situations, you will not need to redo this step every time you want to work on your app ;-)

Add `:8081` to the Tailscale IP address, like shown below, then click on the `Connect` button:

<p align="center">
  <img width="300" src="assets\5fd844539979bae69a484b1c4fd63b48.jpg" alt="">
</p>

Your app will then start ! ;-)

<p align="center">
  <img width="300" src="assets\ff653d552e0587edcbb367fc8d7938be.jpg" alt="">
</p>

As you can see, you data is now gone, disappeared, John Doe'd ;-)
But you can get it back ! Press the 'Toolbox' icon

<p align="center">
  <img width="300" src="assets\17f0de53e76f02f6542f49cb88ab896d.jpg" alt="">
</p>

Click on 'Recover your user data stored in the cloud'

<p align="center">
  <img width="300" src="assets\4a8c78696c136209c5efc910d5510681.jpg" alt="">
</p>

Once the restoring is successfully done, you'll get a notification

<p align="center">
  <img width="300" src="assets\039b3eaf15b8fb151fa191484cbe7217.jpg" alt="">
</p>

Go back to the list of data, and..... surprise ! Your data is there, back from the dead ;-)

<p align="center">
  <img width="300" src="assets\01f4fe2c212b631d4342b10e9c99155c.jpg" alt="">
</p>

So that's it ! We have tested the CRUD & the cloud backup features of your app. Now it's time to actually create our own shizzle !

Let's go to the next section, where you will create UI (User Interface) for your app

[Let's go to the next section !](../BuildAppUI/README.md)
