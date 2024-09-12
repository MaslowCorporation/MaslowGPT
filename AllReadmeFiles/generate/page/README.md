
# generate (a page in a React Native app)

This command allows you to generate a page in a React Native app (a React Native app created with the ```create-react-native-app``` command)

Let's go !

RUN THIS COMMAND THIS AT THE ROOT OF YOUR REACT NATIVE APP FOLDER !!!

Run the 

```
npx maslow
``` 

command

<p align="center">
  <img src="assets\44d0a148456127f66096802d8c70bac3.png" alt="">
</p>

Select ```generate```

<p align="center">
  <img src="assets\898a0565efcd6933783b4d5ce47b13b3.png" alt="">
</p>

You can also run 

```
npx maslow generate
``` 

directly.

<p align="center">
  <img src="assets\ce4e7e91675b83956cdeebdecec323fb.png" alt="">
</p>

Choose ```Create a page```

<p align="center">
  <img src="assets\4db53e40280d637a230fceadbd320547.png" alt="">
</p>

Give a name to this page. In this example, I call this page `FancyPage`

<p align="center">
  <img src="assets\0fc29bb51528ab63cdccfd3338174609.png" alt="">
</p>

Pages are typically created in the ```src/pages``` folder of your React Native app.

<p align="center">
  <img src="assets\8161fd11cdb744d29d1bf1964b14f693.png" alt="">
</p>

When asked for an approximation of the folder where you want to create your page, type ```src``` or ```src/pages```

<p align="center">
  <img src="assets\e361f347d8f0f8f8571c506896c3878f.png" alt="">
</p>

In the folder list based on your approximation, choose ```src/pages```

<p align="center">
  <img src="assets\80d21717089d7301f31460a0c6aaaca8.png" alt="">
</p>

When asked for the name of the string repository of your React Native app, just press <Enter> to choose the default ```AppStrings``` in your RN app.

<p align="center">
  <img src="assets\a5c8c130459b72ebd7bb1ba725e0005f.png" alt="">
</p>

When asked for the name of string of the appbar, press <Enter> to choose the random name generated.

<p align="center">
  <img src="assets\3f1e38605586a416f3bdce5c298f787a.png" alt="">
</p>

Type the text you want to see in the appbar of your page. I typed ```My Fancy Page```

<p align="center">
  <img src="assets\20d7dc4ab99c7863517a73284bc4830f.png" alt="">
</p>

When asked for the name of string of the empty page message, press <Enter> to choose the random name generated.

<p align="center">
  <img src="assets\72922491ec0cef6500c4c25d1e2ff418.png" alt="">
</p>

Type the text you want to see when your page is empty. I typed ```Fill me up, please. I'm hungry for data.```

<p align="center">
  <img src="assets\d1167905dfaad8aebd34d929e80f3f79.png" alt="">
</p>

When asked for the name of string of the page item creation button message, press <Enter> to choose the random name generated.

<p align="center">
  <img src="assets\cba29d1136054511f34bc48b84d76fe2.png" alt="">
</p>

Type the text of the page item creation button message. I typed ```Fill me.```

<p align="center">
  <img src="assets\9699d560a8ee696e51b5691cf8dc743e.png" alt="">
</p>

When asked for the name of string of the item creation UI message, press <Enter> to choose the random name generated.

<p align="center">
  <img src="assets\80910d9919ab880a141f1fef5e9cd8dd.png" alt="">
</p>

Type the text of the item creation UI message. I typed ```Give a name to this new item```

<p align="center">
  <img src="assets\ef05eca516c579f0a8d1f7282fe374ed.png" alt="">
</p>

When asked for the name of string of the item creation UI error message, press <Enter> to choose the random name generated.

<p align="center">
  <img src="assets\530cadea191f309d9c335850073e137d.png" alt="">
</p>

Type the text of the item creation UI error message. I typed ```This item name is not valid```

<p align="center">
  <img src="assets\843814303cb07f2f75780fef8be9896e.png" alt="">
</p>

Success ! The page is now created !

<p align="center">
  <img src="assets\81bbc33a36d2a49c6a2d2c7026caeb66.png" alt="">
</p>

In order to make this page the main page of your React Native app 

(AKA the page the users sees first when opening the app)

Open the ```AppPieces/AppMainComponent.js``` file in your React Native app.

Edit the ```initialRouteName``` property of the ```<Stack.Navigator />``` component.

<p align="center">
  <img src="assets\db30014b108ccaecbf6ab58b7da930b5.png" alt="">
</p>

Set it to the name of the page you just created (Here mine is called ```FancyPage```, yours may vary ;-)

<p align="center">
  <img src="assets\ba58235956a85fa65036e4f12d40a02b.png" alt="">
</p>

Restart your React Native app, and see the changes for yourself !

You will see the page screen.

Now let's see how to customize this page. In the `src/pages` folder, there's a folder with the same name as your page.

In this example, that folder will be `src/pages/FancyPage` . This folder contains all the page UI stuff that allows us to edit the page's color, text font, etc...

The starting point of the page is the file `src/pages/FancyPage/FancyPage.js`

### App Bar Style

To edit the page's appbar, check out the `src/pages/FancyPage/DataListStyles/appbarStyle.js`

This file contains a `getAppbarStyle` function that returns an object that allows you to style the appbar. Have fun with it.


```
export const getAppbarStyle = () => {
  /* PLOP_INJECT_CODE */
  const route = useRoute();
  const navigation = useNavigation();

  return {
    // Is the app bar distinct from the body (false)
    // or mixed together (true)?
    appbarLayoutOverlaid: false,

    // Click sound player
    clickSound: PlayerGTAInstance.GetSound(),

    // Size of the app bar icons
    appbarIconSize: 35,

    // Size of the app bar text
    appbarTextSize: 20,

    // Height of the app bar
    appbarHeight: Constants.defaultBarHeight,

    // Height/Width of the icons
    appbarIconWidth: 60,

    // Ideally the same size as the app bar
    appbarIconHeight: 75,

    // Should the app bar be displayed?
    showAppbar: true,

    // Show the menu icon (3 dots)?
    showAppbarMenuIcon: false,

    // The title of the app bar
    appbarTitle: i18next.t("xaZu1Hw"),

    // Design of the app bar text and menu app bar
    appbarFont: Constants.defaultFontFamily,

    // Show the icon to the left of the menu icon (3 dots)?
    showAppbarIcon: true,

    // Icons coming from https://materialdesignicons.com/
    // The icon in question if showAppbarIcon = true
    // set this to 'refresh' if you use cloud firestore
    appbarIcon: "tools",

    // Background color of the app bar
    appbarBackgroundColor: Constants.defaultBackgroundColor,

    // Background color of the app bar icons
    appbarContentBackgroundColor: "transparent",

    // Border color of the app bar icons
    appbarContentBorderColor: "transparent",

    // If greater than 0, raises the app bar to have a relief effect between body and app bar
    appbarElevation: 0,

    // Color of everything in the app bar (title, icons, etc...)
    appbarContentColor: Constants.defaultContentColor,

    // Callback actions to perform when clicking on the app bar text
    onAppbarTitleClicked: () => { },

    // Callback actions to perform when clicking on the app bar icon
    onAppbarIconClicked: () => {
      // if you use cloud firestore, 
      // RefreshScreen can refresh the data
      // RefreshScreen();

      navigation.navigate("Toolbox");
    },

    // Callback actions to perform when clicking on the back arrow
    // of the app bar.
    onBackPressed: () => {
      navigation.goBack();
    },

    // List of menu choices displayed when clicking on the 3 dots of the app bar
    appbarOptionMenuList: AppbarOptionsMenuList(),
  };
};
```

### Data List Style

To edit the page's body (the list of data), check out the `src/pages/FancyPage/DataListStyles/dataListStyle.js`

This file contains a `getDataListStyle` function that returns an object that allows you to style the body of the page. Have fun with it.


```

/**
 * Styles for the body of the data list.
 *
 * Styles for the app bar and bottom bar must be provided,
 * as the height and width of the data list depend on the styles applied to the app bar and bottom bar.
 */
const getDataListStyle = () => {
  const route = useRoute();

  return {
    // Default background color of the data list.
    backgroundColor: Constants.defaultBackgroundColor,

    // Default text color of the data list.
    contentColor: Constants.defaultContentColor,

    // Click sound player.
    clickSound: PlayerGTAInstance.GetSound(),

    // Styles to apply to the empty database message.
    emptyDBMsgData: EmptyDBMessageLayout(),

    // Layout of an individual item in the data list.
    // DataListItem is the default component used for the list items, but you can of course use any component  you want there.
    // You can also edit/modify the DataListItem component as you wish.
    renderDataListItem: ({ item, index }) => {
      return (
        <DataListItem
          itemData={item}
          // The styling of the data lit items
          itemStyle={DataListItemStyle(item, index)}
        />
      );
    },

    // If renderOnlyItemOnScreen = true
    // and dataListScrollDirection == "vertical_one_by_one" or "horizontal_one_by_one",
    // what to render for the items surrounding the item visible on the screen.
    // DataListItem is the default component used for the NPC list items, but you can of course use any component  you want there.
    // You can also edit/modify the DataListItem component as you wish.
    renderNPCDataListItem: ({ item, index }) => {
      return (
        <DataListItem
          itemData={item}
          // The styling of the data lit items
          itemStyle={DataListItemStyle(item, index)}
        />
      );
    },

    // What to do when reaching the end of the list?
    onListEndPushed: () => {

    },

    // Display only the item at the current viewing index?
    renderOnlyItemOnScreen: true,

    // If renderOnlyItemOnScreen = true
    // howManyNPCSOnEachSide represents how many NPCs surround the item displayed on the screen?
    // How many on the left and on the right.
    // (for example: if howManyNPCSOnEachSide = 1, there is one NPC component on the left and one on the right.
    // the rest of the elements in the FlatList are = null.
    //
    // ..... null => NPC => Thing on the screen => NPC => null => .....
    //
    // This mechanism helps not to overload our UI
    // when displaying a list of 'heavy' components
    // (like a video, etc.).
    // By default, FlatList displays everything at once, which can be problematic.
    howManyNPCSOnEachSide: 1,

    // Which direction does the scroll go?
    //
    // vertical, horizontal, vertical_one_by_one, horizontal_one_by_one
    //
    // if you set this to vertical_one_by_one or horizontal_one_by_one , 
    // you must also uncomment some code in the file
    // src/pages/FancyPage/pieces/FancyPageListOrMsg/FancyPageListOrMsg.js
    dataListScrollDirection: "vertical",
  };
};
```

### Data List Items Style

To edit the individual items displayed in the page's body (the list of data), check out the `src/pages/FancyPage/DataListStyles/DataListStylePieces/DataListItemStyle.js`

This file contains a `DataListItemStyle` function that returns an object that allows you to style the individual items displayed in the page's body. Have fun with it.


```
/**
 *
 * @param {*} item, the individual element in the database item list.
 * @param {*} index, the position of this item in the list
 *
 * @returns the styles and callbacks,
 * to apply to the default UI of the item,
 * in the data list
 */
export const DataListItemStyle = (item, index) => {
  // Creation date of the item
  const creationDate = new Date(
    item.creation_year,
    item.creation_month,
    item.creation_day,
    item.creation_hour ?? 0,
    item.creation_minute ?? 0,
    item.creation_second ?? 0
  );

  // Creation date of the item, text format
  const howLongAgo = HowLongAgo({ creationDate: creationDate });

  // React-navigation stuff
  const route = useRoute();
  //const navigation = useNavigation();

  return {
    // Text color and related, in the DataListItem
    contentColor: Constants.defaultContentColor,

    // Text style
    contentFont: Constants.defaultFontFamily,

    // Background color
    backgroundColor: Constants.defaultBackgroundColor,

    // URL or local path of the item's thumbnail
    thumbUrl: null,
    thumbPath: route.params.images.baby,

    // Name of the item
    itemName: `${item.name}`,

    // Click sound player
    clickSound: PlayerGTAInstance.GetSound(),

    // One or more lines of information about the item
    itemsInfos: [
      {
        // URL or local path of the item's info line (optional)
        infoIconUrl: null,
        infoIconPath: null,

        // the info line text
        infoTxt: `${i18next.t("DOB")} ${howLongAgo}`,
      },
    ],
    // callback when the item is clicked
    onItemClicked: () => {
      /* Uncomment this to navigate to a specific page when clicked
      
      navigation.navigate("<SomeFancyNewPage>", {
        data: {},
      });

      */
    },
    // callback when the item is long pressed
    onItemLongPress: () => {
      GoToEditItemInFancyPage(item.uniqueId);
    },
  };
};

```

### Bottom Bar Style

To edit the page's bottom bar , check out the `src/pages/FancyPage/DataListStyles/bottomBarStyle.js`

This file contains a `getBottomBarStyle` function that returns an object that allows you to style the bottom bar of the page. Have fun with it.


```
/* Styles and callbacks to apply to the bottom bar */
export const getBottomBarStyle = () => {
  const route = useRoute();
  return {
    // Click sound player.
    clickSound: PlayerGTAInstance.GetSound(),

    // Is the bottom bar distinct from the body (false)
    // or mixed together (true)?
    bottomBarLayoutOverlaid: false,

    // Should the bottom bar be displayed?
    showBottomBar: true,

    // Height of the bottom bar.
    bottomBarHeight: Constants.defaultBarHeight,

    // Background color of the bottom bar.
    bottomBarBackgroundColor: Constants.defaultBackgroundColor,

    // If > 0, allows elevation effect of the bottom bar.
    bottomBarElevation: 0,

    // Color of the bottom bar icons.
    bottomBarIconsColor: Constants.defaultContentColor,

    // Text style.
    bottomBarFont: Constants.defaultFontFamily,

    // Icons to display in the bottom bar.
    bottomBarIconsList: BottomBarIconsList(),
  };
};

```

### Item Creation Subpage Style

To style the subpage that allows you to create a page item , check out the `src/pages/FancyPage/pieces/AddItemToFancyPage/AddItemToFancyPage.js` file

This file contains a `AddItemToFancyPage` function that returns a `GetUserInput` component that allows you to style the subpage.

Edit the props of the `GetUserInput` component to edit the style to your heart's desire. Have fun !

Have fun !

```
/**
 *
 * @returns a component that conditionally displays
 * a GetUserInput for item creation in FancyPage.
 */
export const AddItemToFancyPage = () => {
  /* PLOP_INJECT_CODE */

  // List of questions
  const questions = FancyPageCreationList();

  // Getter, contains the current state
  const FancyPageState =
    SqliteReduxFancyPageState.GetFreshestFancyPageStateFirstRow();

  const route = useRoute();
  const navigation = useNavigation();

  /**
   *
   * Camouflage, it's a conditional invisibility cloak,
   * if chosenOne == name, we show content, otherwise nothing
   *
   */
  return (
    <Camouflage
      chosenOne={FancyPageState.chosenOne}
      name={"AddItemToFancyPage"}
      refreshed={true}
    >
      {/* A UI for data retrieval/modification */}
      <GetUserInput
        /* UI data persistence */
        persistenceID={FancyPageState.itemUniqueId}
        /* direction in which the scroll goes */
        scrollDirection={"horizontal_one_by_one"}
        /* show app bar, or not? */
        showAppbar={true}
        /* app bar title text */
        appbarTitle={i18next.t("Add")}
        /* click sound */
        clickSound={PlayerGTAInstance.GetSound()}
        /* app bar background color */
        appbarBackgroundColor={Constants.defaultBackgroundColor}
        /* app bar title text size */
        appbarTextSize={20}
        /* app bar text + icons color */
        appbarContentColor={Constants.defaultContentColor}
        /* app bar title text font */
        appbarFont={Constants.defaultFontFamily}
        /* list of questions to transform into UI */
        questions={questions}
        /* body background color */
        bodyBackgroundColor={Constants.defaultBackgroundColor}
        /* body content color */
        bodyContentColor={Constants.defaultContentColor}
        /* body text font */
        bodyFont={Constants.defaultFontFamily}
        /* bottom bar background color */
        bottomBarBackgroundColor={Constants.defaultBackgroundColor}
        /* bottom bar icons color */
        bottomBarIconsColor={Constants.defaultContentColor}
        /* callback if item creation is cancelled */
        onCancel={() => {
          cancelItemCreation();
        }}
        /* callback if valid data is successfully obtained, via UI questions */
        onSuccess={(answers) => {
          onItemCreationSuccess(answers, FancyPageState.itemUniqueId);
        }}
        /* callback if input data is invalid */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg, questions);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};

```

### Item Editing Subpage Style

To style the subpage that allows you to edit a page item , check out the `src/pages/FancyPage/pieces/EditItemInFancyPage/EditItemInFancyPage.js` file

This file contains a `EditItemInFancyPage` function that returns a `GetUserInput` component that allows you to style the subpage. 

Edit the props of the `GetUserInput` component to edit the style to your heart's desire. Have fun !

```
/**
 *
 *
 * @returns a component that conditionally displays
 * a GetUserInput for item creation in FancyPage.
 */
export const EditItemInFancyPage = () => {
  /* PLOP_INJECT_CODE */


  const route = useRoute();
  const navigation = useNavigation();

  // Getter, contains the current state
  const FancyPageState =
    SqliteReduxFancyPageState.GetFreshestFancyPageStateFirstRow();

  // List of questions
  const questions = FancyPageEditList();

  // currentItem is the item that just got long clicked in the list of data
  const currentItemUniqueId = FancyPageState.itemUniqueId;
  const currentItem =
    SqliteReduxFancyPage.GetItemByUniqueID(currentItemUniqueId);

  return (
    <Camouflage
      chosenOne={FancyPageState.chosenOne}
      name={"EditItemInFancyPage"}
      refreshed={true}
    >
      {/* A UI for data retrieval/modification */}
      <GetUserInput
        /* allows persistence of data for this item, during */
        persistenceID={currentItem?.uniqueId}
        /* direction in which the scroll goes */
        scrollDirection={"horizontal_one_by_one"}
        /* show app bar, or not? */
        showAppbar={true}
        /* app bar title text */
        appbarTitle={i18next.t("Edit")}
        /* click sound */
        clickSound={PlayerGTAInstance.GetSound()}
        /* app bar background color */
        appbarBackgroundColor={Constants.defaultBackgroundColor}
        /* app bar title text size */
        appbarTextSize={20}
        /* app bar text + icons color */
        appbarContentColor={Constants.defaultContentColor}
        /* app bar title text font */
        appbarFont={Constants.defaultFontFamily}
        /* list of questions to transform into UI */
        questions={questions}
        /* body background color */
        bodyBackgroundColor={Constants.defaultBackgroundColor}
        /* body content color */
        bodyContentColor={Constants.defaultContentColor}
        /* body text font */
        bodyFont={Constants.defaultFontFamily}
        /* bottom bar background color */
        bottomBarBackgroundColor={Constants.defaultBackgroundColor}
        /* bottom bar icons color */
        bottomBarIconsColor={Constants.defaultContentColor}
        /* callback if item creation is cancelled */
        onCancel={() => {
          cancelItemCreation();
        }}
        /* callback if valid data is successfully obtained, via UI questions */
        onSuccess={(answers) => {
          onItemCreationSuccess(answers);
        }}
        /* callback if input data is invalid */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg, questions);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};

```

### Customize the data stored in database for the data list items displayed

To add rows to the data list items , check out the `src/reduxState/FancyPage/DatabaseInfo.js` file.

This file contains a `rowNamesAndTypes` object that contains the row names and types for the list items.

Add new rows there as you wish.

```
// Names and types of values stored in the DB
// (there are 3 possible types: TEXT (string), INTEGER (integer), and REAL (decimal number))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // item name
  name: "TEXT",

  // item creation date
  creation_year: "INTEGER",
  creation_month: "INTEGER",
  creation_day: "INTEGER",
  creation_hour: "INTEGER",
  creation_minute: "INTEGER",
  creation_second: "INTEGER",

  // Which index is this item at ?
  itemIndex: "INTEGER",

  // Does this item belong to a group?
  // If yes,
  // this represents the name of the group it belongs to
  groupName: "TEXT",

  // unique Identifier for this item
  uniqueId: "TEXT",
};

```

During the item's creation, don't forget to add the row in the following file,

`src/pages/FancyPage/pieces/AddItemToFancyPage/AddItemToDB.js`

so it gets saved in the database.

Add the row in the `item` object in the `AddItemToDB` function

---

During the item's editing, don't forget to add the row in the following file,

`src/pages/FancyPage/pieces/EditItemInFancyPage/EditItemInFancyPageDB.js`

so it gets saved in the database.

Add the row in the `editedItem` object in the `EditItemInFancyPageDB` function

---

If you want to use some custom dqtq for your dqtq list, other thqn the default `SqliteRedux` database, check the file 

`src/pages/FancyPage/pieces/FancyPageListOrMsg/FancyPageListOrMsg.js`

and edit the value of the variable

```
const MyFancyPageList = SqliteReduxMyFancyPage.GetFreshestMyFancyPage();
```

to what you want (some Cloud Firestore data, etc... whatever suits your needs ;-)

This variable's value should be an array of objects, each object being an individual item in the list of items.

### Mission accomplished !

I'm aware that some parts of the documentations are critically under-documented, but in due time, things will get a lot more documented ;-)

In the meantime, check this part of the README, if you want to see more about page creation

[More info about page creation here](../../../AllReadmeFiles/BuildAppUI/README.md)