/* PLOP_INJECT_IMPORT */

// permet accès CRUD a DB Sqlite , + Redux associé

// permet choix conditionnel

// truc important
import { useRoute } from "@react-navigation/native";
import { React } from "react";
import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// briques de base

// item dans liste
import { DataListItem } from "src/components/DataListItem/DataListItem";

// multilingue

// constantes globales
import { Constants } from "src/constants/Constants.js";

// style a appliquer à litem par défaut de la liste ditems
import { DataListItemStyle } from "./DataListStylePieces/DataListItemStyle";

// messaage du vide
import { EmptyDBMessageLayout } from "./DataListStylePieces/EmptyDBMessageLayout";

/* PLOP_INJECT_CODE */


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
    // src\pages\FancyPage\pieces\FancyPageListOrMsg\FancyPageListOrMsg.js
    dataListScrollDirection: "vertical",
  };
};

export { getDataListStyle };
