/* PLOP_INJECT_IMPORT */

// identifiant unique

// permet de générer des noms aléatoires

// permet accès CRUD a DB Sqlite , + Redux associé

// multilingue

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// constantes globales
import { useRoute } from "@react-navigation/native";
import { Constants } from "src/constants/Constants.js";

// la liste dicones du bas
import { BottomBarIconsList } from "./BottomBarStylePieces/BottomBarIconsList";

/* PLOP_INJECT_CODE */

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
