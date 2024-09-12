
# generate (a subpage for a React Native app)

This command allows you to generate a subpage in a React Native app (a React Native app created with the ```create-react-native-app``` command)

RUN THIS COMMAND THIS AT THE ROOT OF YOUR REACT NATIVE APP FOLDER !!!

Run the 

```
npx maslow
``` 

command.

<p align="center">
  <img src="assets\19576123a6a33269deb69e67d01c346a.png" alt="">
</p>

Select ```generate```

<p align="center">
  <img src="assets\63e6da10518a3c1b1104eb08a4f7682c.png" alt="">
</p>

Choose ```Create a subpage```

<p align="center">
  <img src="assets\df6d7fe113b2d1785c13a30079935196.png" alt="">
</p>

Give a name to this subpage. I named mine ```CoolSubpage```

<p align="center">
  <img src="assets\923461bd63e38f5095c36625fdf42e37.png" alt="">
</p>

Give an approximation of the path of the folder where you want to create this subpage. In this example, I plan on using this subpage in the ```FancyPage``` page, so a good place to create this subpage folder is somewhere within the ```src/pages/FancyPage``` folder of the RN app.

<p align="center">
  <img src="assets\5e9fe55cbc1836bba80880d600d5682b.png" alt="">
</p>

Each page of the React Native app has a ```pieces``` subfolder containing it's major parts, so it's a good idea to create your subpage in the ```src/pages/YOUR_PAGE_NAME/pieces``` folder. Choose it in the list.

<p align="center">
  <img src="assets\99c59ec81c112fc991f46865cc23594b.png" alt="">
</p>

Give an approximation of the folder containing the page file where you will use this page.

To clarify things, each page in your React Native app, has a ```src/pages/YOUR_PAGE_NAME/YOUR_PAGE_NAME.js``` file being the entry point of this page. The main component rendering the whole page.

So here, in my case, I want to use this subpage in ```FancyPage```, specifically in the 

```src/pages/FancyPage/FancyPage.js``` 

file, so an appoximation of this file is ```src/pages/FancyPage```

<p align="center">
  <img src="assets\2f1296077b24b9d4d44e961f0d57984b.png" alt="">
</p>

Then, in the list of files based on this approximation, choose 

```src/pages/YOUR_PAGE_NAME/YOUR_PAGE_NAME.js```

in my case 

```src/pages/FancyPage/FancyPage.js``` 

<p align="center">
  <img src="assets\3828b166156f7ca1f3d42ebc8cff706d.png" alt="">
</p>

Press <Enter>, choose the default AppStrings

<p align="center">
  <img src="assets\4bcc67041ba58fdf98b536f0976afa26.png" alt="">
</p>

Press <Enter>, choose the default appbar string name

<p align="center">
  <img src="assets\fb981823bd20cc5723657ab877f0216f.png" alt="">
</p>

Type the text to show in the subpage's appbar. Here, in this dummy subpage, I typed ```Cool```

<p align="center">
  <img src="assets\6469c13a206ece2b98230ce72ad6f990.png" alt="">
</p>

Type the name of the page where you use this subpage. In my case, ```FancyPage```

<p align="center">
  <img src="assets\6c1aeaf1fb5d1ae8c3477ff182d422eb.png" alt="">
</p>

Success !

<p align="center">
  <img src="assets\4b3773c54e6d9c943ffe700bcbd1cfd9.png" alt="">
</p>

In order to make this subpage the first subpage seen when the page is displayed, we need to edit the ```chosenOne``` property of the page's state.

Open the ```src/reduxState/YOUR_PAGE_NAMEState/DatabaseInfo.js``` file.

<p align="center">
  <img src="assets\8b8d3952d0b75c94b97a83fe71c2f0ff.png" alt="">
</p>

edit the ```chosenOne``` property of the ```defaultValues``` object.

<p align="center">
  <img src="assets\01bf3fce3b7dc5a7be269e898622a157.png" alt="">
</p>

<p align="center">
  <img src="assets\bfa7bea18c45cfd56a9156580559ce7a.png" alt="">
</p>

Set it to the name of your subpage. In my case ```CoolSubpage```

<p align="center">
  <img src="assets\117195d6f6e60d0a2b51a4d8140b3487.png" alt="">
</p>

Restart your React Native app with 

```
npm start
``` 

at the root of your RN app folder, and see the changes for yourself !

<p align="center">
  <img src="assets\641aca7b7429cf075b3d59f84a52a2b0.png" alt="">
</p>


Success, amigo, the world is yours !

I'm aware that some parts of the documentations are critically under-documented, but in due time, things will get a lot more documented ;-)

In the meantime, check this part of the README, if you want to see more about page creation

[More info about page creation here](../../../AllReadmeFiles/BuildAppUI/README.md)