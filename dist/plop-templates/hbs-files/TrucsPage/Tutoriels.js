/* PLOP_INJECT_IMPORT */
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

// permet du state local
import { React } from "react";

// des blocs de base
import { StatusBar } from "react-native";

// styles de base
import { styles } from "./Tutoriels.style.js";

// permet affichage correct sur lécran
import { View } from "react-native";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet lifecycle
import { OnComponentLifeAndDeath } from "./pieces/OnComponentLifeAndDeath/OnComponentLifeAndDeath";

// écran dajout ditem
import { AddItemToTutoriels } from "./pieces/AddItemToTutoriels/AddItemToTutoriels";

// écran de modif ditem
import { EditItemInTutoriels } from "./pieces/EditItemInTutoriels/EditItemInTutoriels";

// la liste ditem ou un message, si liste vide
import { TutorielsListOrMsg } from "./pieces/TutorielsListOrMsg/TutorielsListOrMsg";

// gère les appui sur bouton back du phone.
import { OnDeviceBackPressed } from "./pieces/OnDeviceBackPressed/OnDeviceBackPressed";

// permet message SnackBar
import { Messager } from "src/components/Messager/Messager";

// un tourneur
import { Spinner } from "src/components/Spinner/Spinner.js";
import { Wait } from "./pieces/Wait/Wait.js";
import { HideSnackbar } from "./pieces/NavHelpers/HideSnackbar.js";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

/**
 *
 * 

 
// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

// getter, contient le state actuel
const TutorielsState =
  SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

// setter de state de page, en entier
SetPageState({
  // le state existant.... agrémenté de ....
  ...TutorielsState,

  // affiche ou pas le snack
  snackbarVisible: Constants.false,

  // texte du snack
  snackbarText: "",

  // index derreur en utilisant GetUserInput
  userInputErrorIndex: -1,

  // lécran actuellement affiché dans Tutoriels.js
  chosenOne: "TutorielsList",

  // la page Tutoriels.js est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique
  uniqueId: "TutorielsState",
}); OK

// setter, permet de nav vers écran de création de données.
GoToAddItemToTutoriels(); OK

// setter, permet de nav vers écran de liste de données.
GoToTutorielsList(); OK

// setter, permet de nav vers écran de navigation entre étapes.
GoToEditItemInTutoriels(); OK

// setter, permet de nav vers écran de patiente
GoToWaitScreen();

// setter, permet de cacher le snackbar
HideSnackbar(); OK

// setter, permet de rendre lécran visible
MarkScreenAsMounted(); OK

// setter, permet de choisir quel écran on veut visionner
SetCurrentChosenOne("newChosenOne", "itemUniqueId"); OK

// setter, permet de changer lindex ditem visionné
SetCurrentIndex(newIndex); OK


***********

 * 
 * 
 * @param {*} route
 * @param {*} navigation
 *
 * @returns lécran de tutos
 */
const Tutoriels = ({ route, navigation }) => {
  /* PLOP_INJECT_CODE */

  // le state de la page
  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();


  /**
   * gère les appui sur bouton back
   * pour fermer menu options
   */
  OnDeviceBackPressed();

  /**
   * Ceci nous permet de pouvoir faire
   * des choses avant/après que le component soit contruit/détruit.
   *
   * A lintérieur de ceci, on a ajouté un timeout qui
   * permet une meilleure navigation entre écran.
   */
  OnComponentLifeAndDeath();

  /* si la page nest pas prête à etre affiché, affiche spinner */
  if (TutorielsState.isMounted == Constants.false) {
    return (
      <Spinner
        color={Constants.defaultContentColor}
        backgroundColor={Constants.defaultBackgroundColor}
      />
    );
  }

  /* si la page est prête à etre affiché, affiche la */
  return (
    /* le conteneur qui contient toute la page */
    <View style={styles.dataListContainer}>
      {/* Permet de donner de la couleur et du style, à la barre ou il y a lheure sur ton phone */}
      <StatusBar
        animated={true}
        backgroundColor={Constants.defaultBackgroundColor}
        barStyle={"dark-content"}
      />

      {/* PLOP_INJECT_SUBPAGE */}

      {/* la liste des items crées par luser, ou un message invitant à créer un item. */}
      <TutorielsListOrMsg />

      {/* Lécran de création ditem */}
      <AddItemToTutoriels />

      {/* Lécran de modification ditem */}
      <EditItemInTutoriels />

      {/* Lécran de patientage */}
      <Wait />

      {/* permet dafficher des messages à lécran */}
      <Messager
        clickSound={PlayerGTAInstance.GetSound()}
        message={TutorielsState.snackbarText}
        onDismiss={() => {
          HideSnackbar();
        }}
        snackbarVisible={
          TutorielsState.snackbarVisible == Constants.true ? true : false
        }
      ></Messager>
    </View>
  );
};

export { Tutoriels };
