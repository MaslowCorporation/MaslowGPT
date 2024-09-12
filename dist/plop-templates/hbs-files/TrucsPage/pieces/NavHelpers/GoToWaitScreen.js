import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Lets go to the waiting screen
 */
export function GoToWaitScreen() {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // lécran actuellement affiché dans Tutoriels.js
      chosenOne: "Wait",
    },
    rowName: "uniqueId",
    rowValue: "TutorielsState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
