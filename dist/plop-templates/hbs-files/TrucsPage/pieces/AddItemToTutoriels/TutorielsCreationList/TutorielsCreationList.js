/* PLOP_INJECT_IMPORT */

import { GetTutorielsItemName } from "./Questions/GetTutorielsItemName/GetTutorielsItemName.js";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Ceci contient toutes les questions de TutorielsCreationList
 */
const TutorielsCreationList = () =>
  [
    /* PLOP_INJECT_CODE */
    GetTutorielsItemName(),
  ]?.reverse();

export { TutorielsCreationList };
