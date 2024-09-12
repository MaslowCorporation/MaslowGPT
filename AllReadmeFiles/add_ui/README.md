
# add-ui

This command allows you to add a user interface component, within a page of your React Native application 

(A React Native app created with ```create-react-native-app``` , and a page created with ```generate```).

Let's go !

RUN THIS COMMAND THIS AT THE ROOT OF YOUR REACT NATIVE APP FOLDER !!!


Run the 

```
npx maslow
``` 

command

<p align="center">
  <img src="assets\8ef99ccfdf6b47f644921c8ec6485183.png" alt="">
</p>

Choose ```add-ui```

<p align="center">
  <img src="assets\fbe8b4242f6479e9b3563dfb3fda7f1a.png" alt="">
</p>

You can also run 

```
npx maslow add-ui
``` 

directly

<p align="center">
  <img src="assets\c1a41d5b384ce1b60a80e7b8a43aa290.png" alt="">
</p>

This tool allows you to create multiple kinds of UI, but I'm lazy so I won't go through them all ;-)

Let's create a UI that gathers text from the user.

Choose the option that says so

<p align="center">
  <img src="assets\eedc6874617f962e8b81610dccbc7a60.png" alt="">
</p>

Name this UI. I named mine ```GetUserName```

<p align="center">
  <img src="assets\65b9b083c5513c3d6c9ae4395622d72e.png" alt="">
</p>

Give an approximation of the UI list where you want to add this UI.

Each page has a UI list for:

- the page item creation

- the page item edit

Also, each subpage you create using the ```generate``` command, has it's own UI list too.

In this example, I want to add this UI to the UI list of the page item creation of the ```FancyPage``` page.

So I give as approximation the path to the corresponding page folder.

<p align="center">
  <img src="assets\1458667ed5ebf7ab8e730da55ba020df.png" alt="">
</p>

Then you will be given a choice between all the UI lists found within this approximation folder.

Choose the desired UI list. 

In my case I chose the UI list of the page item creation.

<p align="center">
  <img src="assets\9d7afb43dd195bd2531754ac415a1f96.png" alt="">
</p>

Confirm the name of the UI list file within the chose folder, by pressing <Enter>

Or type the name of another UI list file within that folder, if needed.

<p align="center">
  <img src="assets\6d3b4265a1e7c6691b89d1177669019c.png" alt="">
</p>

Press <Enter>

<p align="center">
  <img src="assets\abff8c2d5ea29dd41b336006dd8cb6f5.png" alt="">
</p>

Press <Enter> 

<p align="center">
  <img src="assets\c1a9ef29e842a322eda71d2cf1e7fc6c.png" alt="">
</p>

Type a description for this UI. That's the message the user will see when the UI is shown

<p align="center">
  <img src="assets\ac179d89ac5d66eb615b7f4c1ad0a187.png" alt="">
</p>

Press <Enter>

<p align="center">
  <img src="assets\caaf581e989302eec1ffcd5f3dcc59cc.png" alt="">
</p>

Type a error message for this UI. That's the message the user will see when the UI ioutput value is not valid, AKA when the user typed some BS


<p align="center">
  <img src="assets\690ee461d61f9bf048a3363b66dd37b5.png" alt="">
</p>

That's it ! Your text grabbing UI is now born.

<p align="center">
  <img src="assets\370ddab1e020ab439f68431148d7d02f.png" alt="">
</p>

Restart your app, and see the new UI when you're adding a new item to the page.

<p align="center">
  <img src="assets\702b0d08b37cc6c3f782aa853521b39e.png" alt="">
</p>

You can check the UI list file 

(in my case ```src/pages/FancyPage/pieces/AddItemToFancyPage/FancyPageCreationList/FancyPageCreationList.js```)

to see the new added UI

<p align="center">
  <img src="assets\d08f1fa5aac7b908cad5a92a3d4df9f0.png" alt="">
</p>

<p align="center">
  <img src="assets\551facaf592dc8abd2c099ca27ac05ce.png" alt="">
</p>

<p align="center">
  <img src="assets\e7972e6150c2a7f75e5e5b072c81be37.png" alt="">
</p>

You can go and investigate the contents of that UI. In my case, the file ```GetUserName.js```.

This UI file allows you do to some customization on the UI.

<p align="center">
  <img src="assets\6390a58dc3af7a0b5cc7f781bef4dcfe.png" alt="">
</p>

The text and number grabbing UI are pretty much identical in their creation steps. So I won't show the number UI here, I'm overwhelmed as a one man team, so I have to neglect some parts of the documentation, otherwise, I drown ;-) But, don't worry, soon, these neglected parts of the documentation, will be filled with more info ! If you need any info about something, don't hesitate, and ask for help on the Github issues page of this repo.

There's another type of UI, the custom UI's, that allow for more customization.

The creation steps and points of interests are different, so I'll show one more example, where I create a custom UI,  to show the little differences.

Let's see an example.

<p align="center">
  <img src="assets\2579b45e2bcbdf9579a67385b7026533.png" alt="">
</p>

Choose the option that mentions custom stuff

<p align="center">
  <img src="assets\8394391fa1129fe34d882dd08e30e941.png" alt="">
</p>

You can choose from a list of different UI that gives you different powers ;-)

Lets create a 'async work' UI, for fun and profit.

<p align="center">
  <img src="assets\345813f15034b37dde9a6b900d78d517.png" alt="">
</p>

Name this UI. I name mine ```GrabDataAsync```

<p align="center">
  <img src="assets\5f78fb70f6f3614e93f83115bec3c02d.png" alt="">
</p>

Again, same as before, give an approximation of the folder containing the UI list where you want to add this UI

<p align="center">
  <img src="assets\b3cf202e6e0a56a78434766830e99a62.png" alt="">
</p>

Choose the UI list folder you want

<p align="center">
  <img src="assets\dd3aa7204bc7c07fafd71d14f47bc0a0.png" alt="">
</p>

Press <Enter>

<p align="center">
  <img src="assets\4464b347118bb1c50239b908061c9f0b.png" alt="">
</p>

Press <Enter>

<p align="center">
  <img src="assets\90d73ac88952a28b2fd22d0f9aea7253.png" alt="">
</p>

Press <Enter>

<p align="center">
  <img src="assets\43c96fa488fa90f0ab2cbb1fb27a0234.png" alt="">
</p>

Type a UI error message, in case the UI output is invalid

<p align="center">
  <img src="assets\7b69ecfacee9260a954a817031812360.png" alt="">
</p>

Your UI is born !

<p align="center">
  <img src="assets\82f0d4f26776f0b4eab6e672339eeb16.png" alt="">
</p>

Check your UI list file again, you should see the new UI added

<p align="center">
  <img src="assets\ca243c4f2e003c07de176f89984f05b5.png" alt="">
</p>

<p align="center">
  <img src="assets\1df214f94f534a910cdff4648cab000f.png" alt="">
</p>

<p align="center">
  <img src="assets\a7c6c553d45faea2fedfb55ef401804e.png" alt="">
</p>

You can check the UI file. In my case ```GrabDataAsync.js``` , to edit some stuff related to this UI

<p align="center">
  <img src="assets\133db4cc71a84759e0df3f95e44f910b.png" alt="">
</p>

also, check the ```custom.js``` file within this UI, to see the actual component that's displaying the UI. That's why these kinds of UI are called custom, because you can edit the underlying component as you wish, unlike the text and number UI that are limited only to their UI file for customization, since they have no custom.js

<p align="center">
  <img src="assets\09b29ce9279da4fda98b57e869a93a8b.png" alt="">
</p>

Restart your React Native app, and see the new UI

<p align="center">
  <img src="assets\666f21ae658dee5b1f48bb1677c7f002.png" alt="">
</p>

Here's a list of all the custom UI's available to you

### FormUI: A UI that allows you to collect user data, using prompts and/or buttons, and then perform an asynchronous task.

### SwitchPagesUI: A UI that allows you to switch between a mini web browser and a UI of your choice.

### ListUI: A UI that allows you to display a scrollable list of items to choose from.

### EmptyCustomUI: A skeletal custom UI that you will fill in from scratch.

### TextReaderUI: A UI that allows you to display some text, with a fancy animation.

### CodeEditorUI: A UI that allows you to write/edit text.

### ScanQRCodeUI: A UI that allows you to scan a QR code, and do fancy stuff with it.

### GenerateQRCodeUI: A UI that allows you to generate a QR code, then download it.

### FilePickerUI: A UI that allows you to pick a file from a button, and also download a file from an iframe component.

Simply check the `custom.js` file for your UI, and you're figure things out easily. If you need help figuring things out, ask for help at

https://github.com/MaslowCorporation/MaslowGPT/issues

Bravo ! You made it all the way down here.

P.S.: I'm aware that this part of the documentation is ridiculously underdocumented, but I need to prioritize things because the workload is weighing down on my back, as a one man team ;-) Yeah, I know, I said a trillion times that I'm a one man team, and everyone is tired of hearing about it ;-)

If you need any help, tell me about it on the issues section of this Github repo, and I'll be happy to help you figure things out.

In the meantime, check this part of the README, if you want to see more about page/UI creation

[More info about page creation here](../BuildAppUI/README.md)