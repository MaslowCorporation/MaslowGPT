import { SetPageState } from "../NavHelpers/SetPageState";
// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { Constants } from "src/constants/Constants";

/**
 *
 * @param {*} answers
 * @param {*} errAnswerIndex
 * @param {*} errMsg
 *
 * si bobo, affiche message de bobo
 */
export function onItemCreationError(answers, errAnswerIndex, errMsg, questions) {
  const qtyAnswers = questions.length;

  // getter, contient le state actuel
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();
  /**
   *
   * si données invalides,
   * on affiche un message derreur.
   *
   */
  SetPageState({
    ...TutorielsState,
    snackbarVisible: Constants.true,
    snackbarText: `(${errAnswerIndex + 1}/${qtyAnswers}): ${errMsg}`,
    userInputErrorIndex: errAnswerIndex,
  });
}
