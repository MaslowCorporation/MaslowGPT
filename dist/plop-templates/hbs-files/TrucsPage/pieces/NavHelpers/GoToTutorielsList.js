import { Constants } from "src/constants/Constants";
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Lets go back to TutorielsList
 */
export function GoToTutorielsList() {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // lécran actuellement affiché dans Tutoriels.js
      chosenOne: "TutorielsList",

      // cache le snack
      snackbarVisible: Constants.false,

      itemUniqueId: null,
    },
    rowName: "uniqueId",
    rowValue: "TutorielsState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
