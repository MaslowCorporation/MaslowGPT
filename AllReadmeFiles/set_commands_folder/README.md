
# set-commands-folder

This command allows you to set the folder containing your own custom commands, or the custom commands created by the MaslowGPT community.

Run the `npx maslow` command

<p align="center">
  <img src="assets\9d989f32812bd280cc9f6eb6f0f347e5.png" alt="">
</p>

Choose `set-commands-folder`

<p align="center">
  <img src="assets\604d55955890722947656499d6c9c73a.png" alt="">
</p>

Type the full, absolute path of the folder that will contain your custom commands.

<p align="center">
  <img src="assets\7f3d5e561eeeac7b5f9c4618e7303c91.png" alt="">
</p>

For example, you can create a folder in your Desktop (or elsewhere too), named whatever you want. I named mine `MyMaslowCommands`

<p align="center">
  <img src="assets\f93a50c9ae000dae18575074b40d6bce.png" alt="">
</p>

To get the full path of a folder on Windows, You can navigate inside this created folder, with your File Explorer, then right click the name of the folder, on top of the File Explorer window, then click `Copy address as text` , to copy the full absolute path of that folder, to your clipboard.

<p align="center">
  <img src="assets\e17f26fcfdb66a8948593d16fdd882f6.png" alt="">
</p>

To get the full path of a folder on Linux and MacOS machines, 
you can use a combination of cd (change directory) and pwd (print working directory) commands.
First you navigate to the folder you want the full path of

```
cd ./the/folder/path
``` 

Then you use the 

```
pwd
```

command inside this folder, to print the current working directory, which essentially shows the full path of the folder you're in.

Paste this full folder path when prompted

<p align="center">
  <img src="assets\53fb7d7d7e00aef2d60b69752e54ac5c.png" alt="">
</p>

Mission accomplished ! Now, the commands you will create with `npx maslow create-command` , and the commands you will install using `npx maslow add-command-from-github` , will be installed in this folder you just specified

<p align="center">
  <img src="assets\6a0a6ab35da1dd8b1fa569b4b99fa9eb.png" alt="">
</p>

