import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Set le state de page.
 */
export function SetPageState(newPageState) {
  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: newPageState,
    rowName: "uniqueId",
    rowValue: "TutorielsState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
