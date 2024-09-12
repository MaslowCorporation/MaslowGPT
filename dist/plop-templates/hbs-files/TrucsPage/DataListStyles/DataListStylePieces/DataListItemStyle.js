import { HowLongAgo } from "src/services/HowLongAgo/HowLongAgo";
import i18next from 'i18next';
import { Constants } from "src/constants/Constants.js";
import { GoToEditItemInTutoriels } from "../../pieces/NavHelpers/GoToEditItemInTutoriels";
import { useRoute } from "@react-navigation/native";
import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

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
