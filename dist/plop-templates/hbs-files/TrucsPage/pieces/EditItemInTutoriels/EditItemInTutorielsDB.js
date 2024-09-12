import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { GoToTutorielsList } from "../NavHelpers/GoToTutorielsList";

/**
 *
 * permet de modifier un item stocké dans sqlite + redux
 *
 */
export const EditItemInTutorielsDB = ({ answers }) => {
  /* PLOP_INJECT_ANSWER_VALUE */
  const name = answers["GetTutorielsItemName"].value;

  // getter, contient le state actuel
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  const currentItemUniqueId = TutorielsState.itemUniqueId;
  const currentItem =
    SqliteReduxTutoriels.GetItemByUniqueID(currentItemUniqueId);
  const editedItem = {
    ...currentItem,

    /* PLOP_INJECT_VALUE_IN_DB */

    name,
  };


  SqliteReduxTutoriels.UpdateSpecificRowsFromDB({
    row: editedItem,
    rowName: "uniqueId",
    rowValue: editedItem.uniqueId,
    onSuccess: (row) => {

      GoToTutorielsList();
    },
    onError: (e) => {

      GoToTutorielsList();
    },
  });
};
