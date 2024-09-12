/* PLOP_INJECT_IMPORT */

import { 
  SqliteReduxTutoriels 
} from "src/reduxState/Tutoriels/TutorielsGetterSetter";


/* PLOP_INJECT_GLOBAL_CODE */

export const SaveCurrentItem = (currentItem) => {
  /* PLOP_INJECT_CODE */

  SqliteReduxTutoriels.UpdateSpecificRowsFromDB({
    row: currentItem,
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
  });

};
