
# generate (a persistent SqliteRedux state in a React Native app)

This command allows you to generate a persistent SqliteRedux state in a React Native app (a React Native app created with the ```create-react-native-app``` command)

Let's go !

RUN THIS COMMAND THIS AT THE ROOT OF YOUR REACT NATIVE APP FOLDER !!!

Run the 

```
npx maslow
``` 

command 

<p align="center">
  <img src="assets\8167e71e06dca61da8912bb0e9fa26ae.png" alt="">
</p>

Choose ```generate```

<p align="center">
  <img src="assets\3c43a9f3b739f6b1feb789e58b3b30fe.png" alt="">
</p>

You can also run the 

```
npx maslow generate
``` 

command directly

<p align="center">
  <img src="assets\6368c649998a744e0426399a1739e80d.png" alt="">
</p>

Choose ```Create a persistent state (with Redux and SQLITE)```

<p align="center">
  <img src="assets\515b424cdefcc9bcc7d2f5cf5d5495a9.png" alt="">
</p>

Give a name to your SqliteRedux state. I named mine ```MyCustomState```

<p align="center">
  <img src="assets\4e12783c7db23e61bd0635ae1f27f8cb.png" alt="">
</p>

Give an approximation of the folder where the state will be created. All SqliteRedux states must be added to the ```src/reduxState``` folder of your React Native app.

<p align="center">
  <img src="assets\10e235987159dcabe01c7ee161c0a411.png" alt="">
</p>

<p align="center">
  <img src="assets\59ad396856be8b7b2260424dc320f03d.png" alt="">
</p>

In the folder list based on the approximation, choose ```src/reduxState```

<p align="center">
  <img src="assets\1310354b27846de557692acbf0b03981.png" alt="">
</p>

Here, you can OPTIONALLY give an aproximation of a folder containing a file where you want to use this SqliteRedux state. Leave this field empty

<p align="center">
  <img src="assets\d59f8fd74c6b9d2a81f55f056ba2b9e8.png" alt="">
</p>

Choose ```Je veux rien, capiche amigo ?``` to indicate that you don't want to add the optional imports and code use in some file.

<p align="center">
  <img src="assets\c175854f4bb834f1197f41d8556418c7.png" alt="">
</p>

Success !

<p align="center">
  <img src="assets\30cad75cd3891dec37e6cd3e29391501.png" alt="">
</p>

Now you should see the new SqliteRedux state folder in ```src/reduxState/YOUR_STATE_NAME```

<p align="center">
  <img src="assets\95830a11e8b21d5876f6bed51221f2dc.png" alt="">
</p>

Open the file ```src/reduxState/YOUR_STATE_NAME/DatabaseInfo.js``` to create the rows of your state.

In the ```rowNamesAndTypes``` object, you set the row names and corresponding data types for these.

<p align="center">
  <img src="assets\17df42442509b4336a49634fb2754e0d.png" alt="">
</p>

In the ```defaultValues``` object, you set the default values for each row of your state. Simple as that !

<p align="center">
  <img src="assets\437eac91cc041321c81191022ab45405.png" alt="">
</p>

Now you can use this state anywhere in your app, to store data permanently, and update the UI automatically on data changes.

To do so, you have an object `SqliteReduxYOUR_STATE_NAME` available. In this example, the object is named `SqliteReduxMyCustomState` , based on the name we gave to the state.

Simply import this object in whatever file of your app, and check it's methods out !

This object contains various CRUD methods that allow you to store data permanently, and also edit the UI on the fly ;-) Combining the best features of Sqlite and Redux in one neat little object ;-)

Let's investigate those CRUD methods (When you'll create your own state, the methods will have that your state name instead of `MyCustomState` ;-)

Please note that the object contains more methods than those described below, I just describe the relevant ones for state manipulation

## The Getter Methods

### GetItemByUniqueID

Here's an example of how to get the `MyCustomState` state

```
import { SqliteReduxMyCustomState } from "src/reduxState/MyCustomState/MyCustomStateGetterSetter";

const myCustomState = SqliteReduxMyCustomState.GetItemByUniqueID("MyCustomState");
```

The myCustomState variable contains your lovely state

## The Setter Methods

### SaveItemInDB

Here's an example of how to set the `MyCustomState` state

```
import { SqliteReduxMyCustomState } from "src/reduxState/MyCustomState/MyCustomStateGetterSetter";
import { SaveItemInDB } from "src/services/SaveItemInDB/SaveItemInDB";


SaveItemInDB({
  // item contains the current state
  itemRows: (item) => {
    return { ...item, rowName: rowValue }
  },
  SqliteReduxObject: SqliteReduxMyCustomState,
  uniqueId: "MyCustomState",
  onSuccess: (qtyRowsAffected) => {

  },
  onError: (e) => {

  }
});
```




I'm aware that some parts of the documentations are critically under-documented, but in due time, things will get a lot more documented ;-)

In the meantime, check this part of the README, if you want to see more about page creation

[More info about page creation here](../../../AllReadmeFiles/BuildAppUI/README.md)