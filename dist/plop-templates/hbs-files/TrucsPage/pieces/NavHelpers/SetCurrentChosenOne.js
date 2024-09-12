import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

/**
 * Set le nom de lécran actuellement visionné à lécran.
 *
 * Pour camoufler les autres péquenauds.
 */
export function SetCurrentChosenOne(newChosenOne, itemUniqueId) {
  // getter
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // setter
  SqliteReduxTutorielsState.UpdateSpecificRowsFromDB({
    row: {
      ...TutorielsState,

      // le nouvel élu
      chosenOne: newChosenOne,
      itemUniqueId,
    },
    rowName: "uniqueId",
    rowValue: "TutorielsState",
    onSuccess: (row) => {

    },
    onError: (e) => { },
  });
}
