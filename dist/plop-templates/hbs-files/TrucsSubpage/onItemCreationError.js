// getter/setter
import { Constants } from "src/constants/Constants";
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

// eslint-disable-next-line no-unused-vars
import { SetPageState } from "../NavHelpers/SetPageState";

/**
 *
 * @param {*} answers
 * @param {*} errAnswerIndex
 * @param {*} errMsg
 *
 * si bobo, on affiche un message
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
