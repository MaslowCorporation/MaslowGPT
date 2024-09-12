import { store } from "src/reduxState/reduxStore";

/**
 *
 * permet dobtenir le premier row stocké actuellement dans Redux.
 *
 * Mais lUI utilisant cette fonction restera figé quand le state redux change. !!!! ATTENTION
 *
 */

export function GetTutorielsStateFirstRow() {
  const allTutorielsState = store.getState().TutorielsState.allRows;

  if (allTutorielsState != null && allTutorielsState.length > 0) {
    return allTutorielsState[0];
  } else {
    return allTutorielsState;
  }
}
