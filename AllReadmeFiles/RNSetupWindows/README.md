
### React Native Setup: Windows 10

Open Powershell with admin privileges


<p align="center">
  <img src="assets\f5ec239521f0c443d30a670730ecb108.png" alt="">
</p>

<p align="center">
  <img src="assets\63c992eeba37d96acac69bb792c32cac.png" alt="">
</p>

Enter the following command in Powershell, to install Chocolatey:

```
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

<p align="center">
  <img src="assets\106f1af4a49e8710edd122ad7491353e.png" alt="">
</p>

<p align="center">
  <img src="assets\d1b4dcbbf67738215d81ce0dcdd364cb.png" alt="">
</p>

Once installed successfully, close Powershell, then re-open it with admin privileges. 

If you haven't already, make sure you install ```NVM (Node Version Manager)```, and node.js.

This is extremely simple. Follow these steps:

[NVM installation for Windows users](../TipsTricks/README.md#nvm-installation-on-windows)

Run this command in Powershell, to install the Java Development Kit (JDK):

```
choco install -y microsoft-openjdk11
```

<p align="center">
  <img src="assets\d01728f401a9debfb4aa98c37379e1f1.png" alt="">
</p>

<p align="center">
  <img src="assets\c1369abfae94f0f88448588652cdf70a.png" alt="">
</p>

Once installed successfully, close Powershell.

Go to https://developer.android.com/studio and download the latest Android Studio. At the time when you will follow this tutorial, the name may change, so don't worry if instead of 'giraffe' , there's some other nickname. Download whatever the latest animal is ;-)

<p align="center">
  <img src="assets\6c378907027054c9a78f3f2f761a9ec9.png" alt="">
</p>

Once downloaded, run the downloaded .exe file to install Android Studio

<p align="center">
  <img src="assets\3f9023c5b3c3018920ad061f78df87b2.png" alt="">
</p>

Press 'Next' for all the installation steps, then finally press 'Finish' to complete the installation.

<p align="center">
  <img src="assets\f40ef444d2b6f94e46b1a4439bafc3dc.png" alt="">
</p>

Once installed, this will show up, asking you if you want to import previous Android Studio settings or not.
Make sure 'Do not import settings' is chosen, then press 'Ok'.

<p align="center">
  <img src="assets\7f1d7d3dfabf7e9cca32e1cd2f469dba.png" alt="">
</p>

Then the Setup Wizard screen will show up. Press "Next"

<p align="center">
  <img src="assets\372616910babbbe8d5de2de8ea31252c.png" alt="">
</p>

Choose 'Standard' then press 'Next'

<p align="center">
  <img src="assets\a9212916b344c3959d2f89be84168164.png" alt="">
</p>

Select a UI Theme you like, then press 'Next'

On the 'Verify Settings' screen, Press 'Next'

On the 'License Agreement' screen, accept all the terms,
and press 'Finish'

<p align="center">
  <img src="assets\939838fb55a3311bdc19d182df28e7e3.png" alt="">
</p>

Wait while the stuff is being downloaded.

Once the download is done, press 'Finish'

The Welcome screen will show up.

<p align="center">
  <img src="assets\cd7238736852f78b474ab5921ab0bfb7.png" alt="">
</p>

Press the 'More Actions' button, and select 'SDK Manager'.

Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 13 (Tiramisu) entry, then make sure the following items are checked:

- Android SDK Platform 33
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

<p align="center">
  <img src="assets\fe12ae904b5800812155e5223e7f64d0.png" alt="">
</p>

Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the Android SDK Build-Tools entry, then make sure that 33.0.0 is selected.

<p align="center">
  <img src="assets\b49842cf505cce3f2ffa007bb99ab4e1.png" alt="">
</p>

Finally, click "Apply" to download and install the Android SDK and related build tools.

Okay, now the last 2 things we need to do is to add a new environment variable called ANDROID_HOME, and we also need to add platform-tools to Path.

Open 'More Actions/SDK Manager' then copy the Android SDK Path in your clipboard (CTRL+C)

<p align="center">
  <img src="assets\3161616f289b34eae80c3878479303de.png" alt="">
</p>

Type 'env' in the search bar of Windows 10 to open the
'Edit the system environment variables' screen

<p align="center">
  <img src="assets\1adfb3f9ff3cdf2b55ade6d52abf55fe.png" alt="">
</p>

<p align="center">
  <img src="assets\d03c6219e5043518fe588c696d83ab2c.png" alt="">
</p>

Click on 'Environment variables' at the bottom of the window

<p align="center">
  <img src="assets\aee47e85e78963949ee800801806b921.png" alt="">
</p>

On the 'User variables for <YOUR_USERNAME>' menu, click on 'New' to add a new environment variable.

<p align="center">
  <img src="assets\5581908f5fe387900c49b2e02cdfae00.png" alt="">
</p>

Name this environment variable 'ANDROID_HOME' , and give it as value the ANDROID SDK folder path you copied earlier in Android Studio. Then press Ok to create it.

<p align="center">
  <img src="assets\a58600a4ec4998f292297e3b94b42688.png" alt="">
</p>

Press the 'OK' button at the very bottom of the 'Environment variables' window to complete the env variable creation.

<p align="center">
  <img src="assets\b6cfdb84f783ce18f9ad39e5fc0be57f.png" alt="">
</p>

Open Powershell, then enter the ```Get-ChildItem -Path Env:/``` command to check that the environment variable has been successfully created.

<p align="center">
  <img src="assets\59a7cf4fb1042289e95fdee9a5969b6f.png" alt="">
</p>

Go back to the 'Environment variables' window you just closed, and this time, edit the existing 'Path' environment variable

<p align="center">
  <img src="assets\a8861d391e361bc3b607d3af6ce9afd4.png" alt="">
</p>

On the 'Edit environment variable' window, press 'New' , and give it as value the Android SDK folder path, with 'platform-tools' appended to it. Then press 'OK' to add the shizzle, my nizzle.

<p align="center">
  <img src="assets\0eaff05e9096e419fba7c6135dd40f97.png" alt="">
</p>

Close the 'Environment variables' window by pressing 'OK'

<p align="center">
  <img src="assets\ba81e627b1d8f38797883fd5dd82de70.png" alt="">
</p>

The React Native setup work is done ! 

Now it's time to get yourself an IDE, to begin your programming journey.

I Recommend Visual Studio Code. Download and install it.

https://code.visualstudio.com/

Also, install the 'Eslint' extension for VS Code, to get syntax highlighting

To lint the whole folder, to know where the dirty code errors are located, use the 

```
npm run lint
``` 

command at the root of the app folder.

You can also do it via VS Code's UI. To do so, Press 'CTRL+SHIFT+P' , 
then type ```Open Workspace Settings (JSON)``` in the search bar, open it,
the add this line of code in it:

```
{
  // add these 2 lines of code below,
  // alongside the other existing code.
  // don't add this stoopid comments, just the code.
  // Thanks to the 
  // "editor.formatOnSave": true 
  // line of code, 
  // your own code will also be reformatted 
  // every time you save the code's file, so it always looks pretty
  "eslint.lintTask.enable": true, 
  "editor.formatOnSave": true,

  // ....OTHER CODE, DON'T TOUCH THE OTHER CODE like "editor.codeActionsOnSave": and such
  "editor.codeActionsOnSave": ........,
  .........
  ..........
  ...........
}
```

After you added the shizzle, you can go to 'Terminal/Run Task/eslint/eslint: lint whole folder'
to lint the whole folder currenly opened in VS CODE !

Great ! The React Native setup is done !

Now it's time to create an Android app, and to install it on your device.

[Let's go to the next section !](../CreateRNApp/README.md)