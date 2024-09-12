import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { SetPageState } from "../../pieces/NavHelpers/SetPageState";

/**
 *
 * @param {*} newIndex
 */
export function OnCurrentIndexChanged({ newIndex, route }) {
  const TutorielsState =
    SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  // lindex actuel stocké dans le state
  const currentIndex = TutorielsState.currentIndex;

  // nous dit si lindex détape à changé
  const indexChanged = currentIndex != newIndex;

  // si lindex détape à changé,
  // exécute cette callback.
  if (indexChanged) {
    // msg de change


    // on est par défaut en mode WatchVideo lors du
    // passage dune étape à une autre.
    SetPageState({
      ...TutorielsState,

      currentIndex: newIndex,
    });
  }
  // sinon on nexécute pas la callback de changement dindex
  else {
    // msg de stagnation

  }
}
