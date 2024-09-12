import { useRoute } from "@react-navigation/native";
import i18next from 'i18next';

import { Constants } from "src/constants/Constants.js";
import { GoToAddItemToTutoriels } from "../../pieces/NavHelpers/GoToAddItemToTutoriels";
import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

/**
 *
 *
 * @returns le layout à appliquer à la page
 * qui saffiche quand la liste de données est vide
 */
export function EmptyDBMessageLayout() {
  const route = useRoute();

  return {
    messageText: i18next.t("ZeMuthafuckinEmptyMsg"),

    // la couleur/font/etc... du texte
    messageTextColor: Constants.defaultContentColor,
    messageTextFont: Constants.defaultFontFamily,
    messageTextSize: 22,
    messageMarginLateral: 30,

    // le lecteur audio de clic
    clickSound: PlayerGTAInstance.GetSound(),

    // la couleur darrière plan
    backgroundColor: Constants.defaultBackgroundColor,

    // limage au dessus du texte
    iconPath: route.params.images.app_icon,

    // hauteur/largeur de limage
    iconWidth: 100,
    iconHeight: 100,

    // la couleur darrière plan du bouton
    buttonBackgroundColor: "pink",

    // des icones venant de https://materialdesignicons.com/
    // le logo du bouton
    buttonLogoName: "plus",

    // la taille du logo du bouton
    buttonLogoSize: 30,

    // la couleur du logo du bouton
    buttonLogoColor: Constants.defaultContentColor,

    // le texte a afficher dans le bouton
    buttonText: i18next.t("ZeMuthafuckinEmptyBtnMsg"),

    // la couleur du texte du bouton
    buttonTextColor: Constants.defaultContentColor,

    // le font du texte du bouton
    buttonTextFont: Constants.defaultFontFamily,

    // la marge latérale du bouton
    buttonLateralMargin: 25,

    // que faire quand le bouton est appuyé ?
    onButtonClicked: () => {
      GoToAddItemToTutoriels();
    },
  };
}
