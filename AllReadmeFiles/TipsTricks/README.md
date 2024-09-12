
## TIPS AND TRICKS AND TROUBLESHOOT ;-)

## Micro Editor Windows 10 Setup

Go to this Github page

https://github.com/zyedidia/micro/releases

and download the ```micro-<latest version number>-win32.zip``` or ```micro-<latest version number>-win64.zip``` file

<p align="center">
  <img src="assets\9e13f0e5a5d11abd30255922509f71d8.png" alt="">
</p>

<p align="center">
  <img src="assets\6e72628731981b859f291e30d92be0d1.png" alt="">
</p>

Unzip the file...

<p align="center">
  <img src="assets\a916ba5338e36b653829ede54ef39bd7.png" alt="">
</p>

<p align="center">
  <img src="assets\c1d8695026a74d2f4334c387691896aa.png" alt="">
</p>

Inside that unzipped folder, there's a folder that contains all the good stuff.
This folder needs to be relocated

<p align="center">
  <img src="assets\87616d1f7338ccce3b5bef5e3dd58de6.png" alt="">
</p>

<p align="center">
  <img src="assets\196567725908208dca2d684c97b6f0e7.png" alt="">
</p>

Drag and drop this inner folder to the Documents folder of your Windows, or some other location if you want too

<p align="center">
  <img src="assets\dfbcbbcce953d6dc3b6cb951752b02b4.png" alt="">
</p>

Once moved to the desired location, go inside this moved folder, and copy it's path, using the File Explorer
by right clicking the name of the relocated folder that contains all our Micro stuff, then click ```Copy address as text``` .
Now the folder path is copied in your clipboard.

<p align="center">
  <img src="assets\524127867f4655b5e4a53301bb513a09.png" alt="">
</p>

type ```env``` in your windows search bar, then open the environment variable window

<p align="center">
  <img src="assets\ec0c7e8d9533f64072e221e9d61dd7b1.png" alt="">
</p>

<p align="center">
  <img src="assets\f727654fd3cf7372d50f03bdac250721.png" alt="">
</p>

Click on the ```Environment Variables``` button

<p align="center">
  <img src="assets\452a79a46dd0f47029b54eeb88df40e5.png" alt="">
</p>

In the ```User variables for <YOUR_USER_NAME>``` panel, double click on the ```Path``` line

<p align="center">
  <img src="assets\ed6fc6659c889dcda18551bd8ca55d28.png" alt="">
</p>

Click on the ```New``` button to add the path of your Micro shizzle

<p align="center">
  <img src="assets\ed6568d0e501c129a50264a711b66db2.png" alt="">
</p>

Paste the  path of your Micro folder there

<p align="center">
  <img src="assets\67223e6d175b60345cf9db03eb0c9ed3.png" alt="">
</p>

Click the OK button when done

<p align="center">
  <img src="assets\1a84c514e597eddbb544e9918fd67fef.png" alt="">
</p>

In the ```User variables for <YOUR_USER_NAME>``` panel, click on ```New```

<p align="center">
  <img src="assets\c89b60f2fc2e90f81b7eb45d3fbf10b6.png" alt="">
</p>

Create a variable named ```EDITOR``` , it's value is ```micro```. Then click OK

<p align="center">
  <img src="assets\2b68908943a292972ced5b66ead99bc6.png" alt="">
</p>

Click OK on the parent page

<p align="center">
  <img src="assets\d72b97e086cb951ddc8a61c693ed09a8.png" alt="">
</p>

Then Click OK on the parent of all pages ;-)

<p align="center">
  <img src="assets\cbe81c9b63374fdd341dea91de07b452.png" alt="">
</p>

Close and reopen your Terminal, then run the ```micro``` command to test your shizzle

<p align="center">
  <img src="assets\414546a669f26bb64e2a6e1901501e29.png" alt="">
</p>

This command opens the Micro editor, if your shizzle is correctly done ;-)

To close the Micro Editor, press ```F10``` (or CTRL + Q) then ```y```

<p align="center">
  <img src="assets\ecd8f5cc67dc2bc0c0391612fecb494d.png" alt="">
</p>

Test your MaslowGPT. for example ```ask-question``` ,  and you will see that it now uses ```micro``` as the default editor.


## Micro Editor Linux Setup

Run this command to install Micro

```
sudo apt install micro
```

Test the ```micro``` command, to test micro. This command opens the Micro editor.

To close the Micro Editor, press ```Ctrl+Q``` or ```F10``` then ```y```

Add an environment variable called ```EDITOR``` in your environment variables. Give it ```micro``` as value.

To do so, do the following:

Run this command to know what kind of Terminal you're using:

```
echo $SHELL
```

This command will display the path to your default shell. It might output something like ```/bin/bash```, ```/bin/zsh```, or another shell path (rare)

If the output is ```/bin/bash```, use the 

```
nano ~/.bashrc
``` 

command to open the settings file

If the output is ```/bin/zsh```, use the 

```
nano ~/.zshrc
``` 

command to open the settings file

Scroll to the end of the file and add a new line for your environment variable in the format `export VARIABLE_NAME="value"`.

In our case, to add a variable named `EDITOR` with the value `micro`, add this line:

```bash
export EDITOR="micro"
```

Save the file and exit the text editor, by pressing CTRL+X, then ```y```

Then If the output is ```/bin/bash```, use the 

```
source ~/.bashrc
``` 

command to add the environment variable.

If the output is ```/bin/zsh```, use the 

```
source ~/.zshrc
``` 

command to add the environment variable.

After following these steps, the environment variable will be permanently set and available whenever you open a new terminal session or start a new process.

You can test if the `EDITOR` variable is set correctly by running:

```bash
echo $EDITOR
```

It should display `micro`.

Test your MaslowGPT. for example ```ask-question``` ,  and you will see that it now uses ```micro``` as the default editor, instead of ugly Vim ;-)

## Micro Editor MacOS Setup

Open Terminal and install Homebrew, if not already installed

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Run the following command to install Micro:

```bash
brew install micro
```

This will download and install Micro on your macOS system using Homebrew.

To set the `EDITOR` environment variable to use Micro as the default editor, follow these steps:

Run this command to know what kind of Terminal you're using:

```
echo $SHELL
```

This command will display the path to your default shell. It might output something like ```/bin/bash```, ```/bin/zsh```, or another shell path (rare)

If the output is ```/bin/bash```, use the 

```
nano ~/.bashrc
``` 

command to open the settings file

If the output is ```/bin/zsh```, use the 

```
nano ~/.zshrc
``` 

command to open the settings file

Scroll to the end of the file and add a new line for your environment variable in the format `export VARIABLE_NAME="value"`.

In our case, to add a variable named `EDITOR` with the value `micro`, add this line:

```bash
export EDITOR="micro"
```

Save the file and exit the text editor, by pressing CTRL+X, then ```y```

Then If the output is ```/bin/bash```, use the 

```
source ~/.bashrc
``` 

command to add the environment variable.

If the output is ```/bin/zsh```, use the 

```
source ~/.zshrc
``` 

command to add the environment variable.

Now, `EDITOR` should be set to Micro, allowing various command-line utilities or programs that rely on the `EDITOR` environment variable to use Micro as the default text editor.

You can test if the `EDITOR` variable is set correctly by running:

```bash
echo $EDITOR
```

It should display `micro`.

With Micro installed and the `EDITOR` environment variable set, you can now use Micro as the default editor in MaslowGPT

## To install Ubuntu on Windows 10 (WSL 2)

More info here: https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10

Here's a quick summary

Open CMD as administrator, then run this command:

```
wsl.exe --install
```

Virtualization must be enabled in your computer for this installation to be successful

Once this command is successfully executed, Ubuntu is installed on your Windows 10 device !

To finish the installation, Reboot your computer. Log in to Windows 10 and the command prompt will open again. This time you’ll be walked through setting up Ubuntu with a username and password (these don’t need to be the same as your Windows username and password).

Once done you can you can launch the ‘Ubuntu’ app from the Start Menu to get started, or install the Microsoft Terminal app to start exploring your newly-installed Ubuntu install — don’t forget to run an apt update && apt upgrade though — this is a REAL Ubuntu system, after all!


In your Ubuntu terminal, run ```cd /; ls``` to get at the root folder of your Ubuntu shizzle, and to see what's there.

The picture below is a visual representation of the contents of the root folder of an Ubuntu install

<p align="center">
  <img src="assets\1e776352aac99585c07462cc46567303.jpg" alt="">
</p>

Typically, you do your thing in the ```/home/YOUR_USER_NAME/``` folder, so navigate to this folder using ```cd /home/YOUR_USER_NAME/``` , and do your shizzle there.

These installation steps were taken from this tutorial. Read it if you encounter problems during the installation.

https://www.omgubuntu.co.uk/how-to-install-wsl2-on-windows-10

## To install NVM, to properly reinstall node, so the correct permissions are set for read/write access to usr/ , in order to avoid EACCES: permission denied, errors

### NVM installation on Windows

First, follow the steps outlined here:

https://www.geeksforgeeks.org/how-to-install-and-use-nvm-on-windows/

Once done, open a Terminal, and verify that nvm is installed by running this command:

```bash
nvm --version
```

it should output the current nvm version if everything is OK

Then run the ```nvm install node``` command to install the latest node version, with proper read/write access

Finally, run the ```nvm use node``` command to setup node.

### NVM installation on Linux

Open a terminal, and run this command to download the nvm installation script:

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Close and reopen the terminal to apply the changes, once the installation succeeds.

Verify that nvm is installed by running this command:

```bash
nvm --version
```

it should output the current nvm version if everything is OK

Then run the ```nvm install node``` command to install the latest node version, with proper read/write access

Finally, run the ```nvm use node``` command to setup node.

That's it ! Now you can install MaslowGPT, and other packages, without annoying read/write access errors !

### NVM installation on macOS

Open a terminal, and run this command to install Brew, if not already installed.

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Run this command to install NVM:

```
brew install nvm
```

Run this command, to create a .nvm directory at ~/.nvm location:

```
mkdir ~/.nvm
```

Run this command to know what kind of Terminal you're using:

```
echo $SHELL
```

This command will display the path to your default shell. It might output something like ```/bin/bash```, ```/bin/zsh```, or another shell path (rare)

If the output is ```/bin/bash```, use the 

```
nano ~/.bashrc
``` 

command to open the settings file

If the output is ```/bin/zsh```, use the 

```
nano ~/.zshrc
``` 

command to open the settings file

Add the following code to the file:

```
export NVM_DIR=~/.nvm
 source $(brew --prefix nvm)/nvm.sh
```

Press CTRL + X , then ```y``` to save the changes and exit from editor:

Then If the output is ```/bin/bash```, use the 

```
source ~/.bashrc
``` 

command to add the environment variable.

If the output is ```/bin/zsh```, use the 

```
source ~/.zshrc
``` 

command to add the environment variable.

Verify that nvm is installed by running:

```bash
nvm --version
```

it should output the current version of nvm if everything is OK

Then run the ```nvm install node``` command to install the latest node version, with proper read/write access

Finally, run the ```nvm use node``` command to setup node.

That's it ! Now you can install MaslowGPT, and other packages, without annoying read/write access errors !


These steps should successfully install nvm on your Linux or macOS system.

### Git Installation Steps for Windows

1. Visit the official Git website at https://git-scm.com and click on the "Downloads" button.

2. This will automatically download the latest version of Git for Windows.

3. Once the download is complete, locate the downloaded installer and double-click on it.

4. A setup wizard will appear, follow the instructions in the wizard to install Git.

5. Make sure to select "Use Git from the Windows Command Prompt" during the installation process to enable Git commands from the command line.

6. Once the installation is complete, you can verify the installation by opening the command prompt and typing "git --version". It should display the installed Git version.

### Git Installation Steps for Linux

1. Open a terminal window.

2. For Debian-based distributions (e.g., Ubuntu), run the command: sudo apt-get install git

3. For Red Hat-based distributions (e.g., CentOS), run the command: sudo yum install git

4. Provide your password if prompted and wait for the installation to complete.

5. To verify the installation, type "git --version" in the terminal. It should display the installed Git version.

### Git Installation Steps for MacOS

1. Open the Terminal application.

2. Install the Homebrew package manager (if not already installed) by running the command: 

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

3. Once Homebrew is installed, run the command: 

```
brew install git
```

4. Wait for the installation to complete.

5. To verify the installation, type "git --version" in the terminal. It should display the installed Git version.

These steps should help you install Git on your respective operating systems. Remember to follow any additional instructions or prompts during the installation process.

### To debug a React Native app (breakpoints are ESSENTIAL in the life of a frontend/backend developer ;-)

Windows 10 instructions:

Download Flipper Desktop (version 0.192.0 specifically)

https://github.com/facebook/flipper/releases/tag/v0.192.0

Extract the archive into a dedicated folder.

Move this folder to a safe location
(you can also leave it in the Downloads folder, but make sure not to delete this folder)

Open this folder and run Flipper.exe

Click on 'Setup Doctor'.

If you have warnings related to OpenSSL and Watchman,
Open a cmd or powershell AS AN ADMINISTRATOR
(VERY IMPORTANT, WITHOUT ADMIN PRIVILEGES, there will be issues)
then execute this command to install these 2 tools:

```
choco install openssl; choco install watchman
```

Select 'Yes for all'

Refresh the 'Setup Doctor' to see if the warnings are resolved.

Visit the android/gradle.properties file and set FLIPPER_VERSION to 0.182.0:

```
# Version of flipper SDK to use with React Native
FLIPPER_VERSION=0.182.0
```

VERY IMPORTANT !! MUY IMPORTANTE !!
VERY IMPORTANT !!

If your React Native app has already been installed on your device,
then uninstall it, then connect your device to your computer via USB,
then run this command to launch the app:

```
npm run start-debug
```

Once the app is installed and running, shake your device,
or press .... (if you're using an emulator),
to bring up the dev menu.

Select 'Settings', then 'Debug server host & port for device'

Enter the IP address of your local device (your Windows 10/Linux/MacOS computer)
accompanied by port 8081, like this:

<PHONE_IP_ADDR>:8081

for example:

100.126.102.122:8081

Then press OK to save.

Finally, reload your app.

Once installed and set up, you can set breakpoints in your code and finally stop and watch your code, as sane developers do! Without headaches, and without suicidal thoughts... Because yes, a developer who doesn't use breakpoints in their code is either depressed/masochistic/suicidal, or an ultra-evolved extraterrestrial whose intellect surpasses mine ;-)

So, RULE #1: ALWAYS USE A DEBUGGER AND BREAKPOINTS !!!!!!

Flipper is really a great tool! I tried various debugging methods for React Native (via VS CODE, React Native Debugger, Chrome DevTools, Reactotron, etc...) But unfortunately, I couldn't get the breakpoints mechanism to work correctly... Until I heard about Flipper... and bingo! 

To work on a React Native app, armed with the Flipper debugger ;-)

Connect your phone to your device via USB.

Run this command

```
npm run start-debug-android
```

### To cleanup your Github commit history, and only keep your current folder as the first commit visible

See https://stackoverflow.com/a/26000395

### to close evrything on port 6379 (Redis connection error fix)

To stop everything running on port 6379 on Windows, Linux, and macOS, you can use different commands depending on the operating system.

#### Windows:

You can use the `netstat` and `taskkill` commands in the Command Prompt to find and stop processes on a specific port.

```cmd
netstat -ano | findstr :6379
taskkill /PID <process_id> /F
```

Replace `<process_id>` with the actual process ID you obtained from the `netstat` command.

#### Linux and macOS:

You can use the `lsof` and `kill` commands in the terminal to find and stop processes on a specific port.

```bash
lsof -i :6379
kill -9 <process_id>
```

Replace `<process_id>` with the actual process ID you obtained from the `lsof` command.

Note: You may need root (sudo) privileges to use `kill` if the process is owned by a different user.

In both cases, the commands above first identify the process ID (PID) of the process using port 6379, and then forcefully terminate (kill) that process.

Choose the appropriate set of commands based on your operating system. Always exercise caution when using the `kill` command, especially with the `-9` option, as it forcefully terminates the process without allowing it to perform cleanup operations.

### Useful Regexes

To find all strings with 2 or more words in it.

```
(['"`])/b/w+(?: /w+)+/b.*?/1
```

To find all one-line `console.log` statements.

```
console/.log/(([^)]+)/);
```

If you want to use Visual Studio Code's find and replace feature to remove the single quotes between two letters, because like me, your native language uses single quotes inside words, and like me, you like to write your code without worrying about internationalization, then you painstakingly go hunt for rogue un-internationalized strings in your code, during production preparation, to put them in your AppStrings file one by one, and you're pissed because all the words with quotes in your native language create false positive for string regexes, and you want to eradicate those pesky single quotes in words. (Yeah Yeah, I know, it's a very peculiar and stupid situation, but my fellow Frenchmen know the struggle ;-) 

then follow these steps:

Open the Find and Replace dialog (Ctrl + H).
Ensure the ".*" button (which enables regex mode) is selected in the find bar.
Enter the regex: `(/p{L})'(/p{L})` in the "Find" field.
In the "Replace" field, enter: `$1$2` (this preserves the matched letters and removes the single quote).
Click the "Replace All" button.
This regex captures the two letters and the single quote in between, and the replacement `$1$2` puts back the captured letters without the single quote.

You would typically want to exclude the following files/folders, in an Android app made with `npx maslow create-react-native-app`:

```
android,  AppStrings.js, strings_en.js, AllLanguages.js
```

In a command line Node.js program, you would exclude

```
plop-templates, AppStrings.js, strings_en.js, AllLanguages.js
```

Include `.js` files for both cases

## Watchman Installation

Installing Watchman on Windows 10, macOS, and Linux involves slightly different procedures for each operating system. Here are the instructions for each:

### Watchman Installation Windows 10

1. **Install Chocolatey (Package Manager):**
   - Open PowerShell as Administrator.
   - Run the following command to install Chocolatey:
     ```
     Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
     ```

2. **Install Watchman using Chocolatey:**
   - Once Chocolatey is installed, you can install Watchman by running the following command:
     ```
     choco install watchman
     ```

### Watchman Installation macOS

1. **Install Homebrew (Package Manager):**
   - Open Terminal.
   - Run the following command to install Homebrew:
     ```
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

2. **Install Watchman using Homebrew:**
   - Once Homebrew is installed, you can install Watchman by running the following command:
     ```
     brew install watchman
     ```

### Watchman Installation Linux

1. **Using Package Manager:**
   - Depending on your Linux distribution, you can install Watchman using the package manager specific to your distribution.
   - For example, on Ubuntu or Debian-based systems, you can use apt:
     ```
     sudo apt-get install watchman
     ```
   - On Fedora or CentOS, you might use dnf or yum:
     ```
     sudo dnf install watchman    (or)
     sudo yum install watchman
     ```

2. **Building from Source:**
   - Alternatively, you can build Watchman from source if your distribution doesn't provide a package:
     - Clone the Watchman repository:
       ```
       git clone https://github.com/facebook/watchman.git
       ```
     - Navigate into the cloned directory:
       ```
       cd watchman
       ```
     - Follow the instructions in the README file for building and installing Watchman.


- After installation, you may need to restart your terminal or shell for changes to take effect.
- To verify that Watchman is installed correctly, you can run `watchman --version` in your terminal or command prompt. If installed properly, it should display the version of Watchman installed.

Following these steps should get Watchman up and running on your Windows 10, macOS, or Linux system.



## Python installation

To install Python on your computer, follow these instructions

### Python installation Windows

1. **Download the Installer**:
   - Go to the [Python Downloads page](https://www.python.org/downloads/windows/).
   - Click on the latest version under "Looking for a specific release?".

2. **Run the Installer**:
   - Double-click the downloaded file to run the installer.
   - Ensure you check the box "Add Python to PATH".
   - Click "Install Now".

3. **Verify the Installation**:
   - Open Command Prompt and run:
     ```sh
     python --version
     ```

### Python installation macOS

1. **Using the Official Installer**:
   - Go to the [Python Downloads page](https://www.python.org/downloads/macos/).
   - Download the latest version for macOS.
   - Double-click the downloaded file and follow the instructions to install.

2. **Using Homebrew**:
   - Open Terminal and run:
     ```sh
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     brew install python
     ```

3. **Verify the Installation**:
   - Open Terminal and run:
     ```sh
     python3 --version
     ```

### Python installation Linux

**For Debian-based distributions (e.g., Ubuntu):**

1. **Update Package Lists**:
   ```sh
   sudo apt update
   ```

2. **Install Python**:
   ```sh
   sudo apt install python3 python3-pip
   ```

3. **Verify the Installation**:
   ```sh
   python3 --version
   ```

**For Red Hat-based distributions (e.g., CentOS, Fedora):**

1. **Update Package Lists**:
   ```sh
   sudo dnf update
   ```

2. **Install Python**:
   ```sh
   sudo dnf install python3 python3-pip
   ```

3. **Verify the Installation**:
   ```sh
   python3 --version
   ```

**For Arch Linux:**

1. **Install Python**:
   ```sh
   sudo pacman -S python python-pip
   ```

2. **Verify the Installation**:
   ```sh
   python --version
   ```

### Thank you for existing ;-)