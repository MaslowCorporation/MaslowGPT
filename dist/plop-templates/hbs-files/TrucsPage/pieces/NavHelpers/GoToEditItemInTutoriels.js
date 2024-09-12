import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { SetPageState } from "./SetPageState";

/**
 * Lets go back to the item edit screen.
 */
export function GoToEditItemInTutoriels(itemUniqueId) {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  SetPageState({
    ...TutorielsState,

    // lécran actuellement affiché dans Tutoriels.js
    chosenOne: "EditItemInTutoriels",

    // identifiant unique de litem en cours de modif
    itemUniqueId: itemUniqueId,
  });

}
