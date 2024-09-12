/* PLOP_INJECT_IMPORT */

// permet daccéder a des globales
import { useNavigation, useRoute } from "@react-navigation/native";
import i18next from 'i18next';
import { Constants } from "src/constants/Constants.js";

// la liste doptions de lappbar
import { AppbarOptionsMenuList } from "./AppbarStylePieces/AppbarOptionsMenuList";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

import { RefreshScreen } from "./AppbarStylePieces/RefreshScreen";

/**
 * les styles de la topbar
 */
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
