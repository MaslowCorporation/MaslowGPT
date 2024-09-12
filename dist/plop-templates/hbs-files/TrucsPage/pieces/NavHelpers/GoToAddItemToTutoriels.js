import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { SetPageState } from "./SetPageState";
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

/**
 * Lets go back to AddItemToTutoriels
 */
export function GoToAddItemToTutoriels() {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SetPageState({
    ...TutorielsState,

    // lécran actuellement affiché dans Tutoriels.js
    chosenOne: "AddItemToTutoriels",

    itemUniqueId: GetUniqueID(7)
  });

}
