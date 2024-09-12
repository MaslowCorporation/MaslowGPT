
### React Native Setup for Linux

I will make a more refined Linux section, soon, but for now, just follow this setup, but ignore the part at the very beginning of the setup, where you're supposed to install Node, because if you followed the early MaslowGPT setup, you should have NVM already installed, so there's no  need to install Node.

https://reactnative.dev/docs/environment-setup?guide=native&os=linux

Once you've done this setup, Now it's time to get yourself an IDE, to begin your programming journey.

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