//import { createTemplateFolder1 } from "./pieces/createTemplateFolder1/createTemplateFolder1.js";
//import { createTemplateFolder2 } from "./pieces/createTemplateFolder2/createTemplateFolder2.js";


// PLOP_IMPORT_ACTION

/**
 *
 * @param {*} appRootPath
 * @param {*} promptData
 *
 * @returns
 *
 *
 * Ici, crée 0 ou plusieurs dossier a partir de templates, si besoin.
 * Uncomment/comment selon tes feelings
 */
function templateActions(promptData, appRootPath, plop) {
  //const templateFolder1 = createTemplateFolder1(promptData);
  //const templateFolder2 = createTemplateFolder2(promptData);

  //const REQUETE_CHAT_GPT_QUESTION = { type: "REQUETE_CHAT_GPT_QUESTION" };
  //const CREATION_HISTORIQUE = { type: "CREATION_HISTORIQUE" };
  //const OUVRE_FICHIERS_CREES = { type: "OUVRE_FICHIERS_CREES" };

  return [
    // PLOP_IMPORT_ACTION_USE

    //REQUETE_CHAT_GPT_QUESTION,
    //CREATION_HISTORIQUE,
    //OUVRE_FICHIERS_CREES,

    //...templateFolder1,
    //...templateFolder2,

  ]?.filter((elm) => elm);
}

export { templateActions };
