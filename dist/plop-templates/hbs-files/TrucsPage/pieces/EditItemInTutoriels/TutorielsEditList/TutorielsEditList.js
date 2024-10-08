/* PLOP_INJECT_IMPORT */

// permet de supprimer un item de la liste ditems
import { DeleteItemOrNot } from "./Questions/DeleteItemOrNot";

// permet de créer/modifier les données dun item.
import { TutorielsCreationList } from "../../AddItemToTutoriels/TutorielsCreationList/TutorielsCreationList";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Ceci contient toutes les questions de TutorielsEditList.
 *
 * Cela correspond aux questions de TutorielsCreationList, avec une proposition de suppression en +.
 */
const TutorielsEditList = () => {
  return TutorielsCreationList().concat([
    /* PLOP_INJECT_CODE */
  ].reverse()).concat(DeleteItemOrNot());
};

export { TutorielsEditList };
