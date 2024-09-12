//import { deleteCaca } from "./DeleteCaca/deleteCaca.js";
import { openFilesInVSCode } from "./OpenVSCodeFiles/openVSCodeFiles.js";
import { setChatGPTGetter } from "./SetChatGPTGetter/setChatGPTGetter.js";
import { setCreateMaslowJSON } from "./SetCreateMaslowJSON/setCreateMaslowJSON.js";

// PLOP_ASYNC_ACTION_IMPORT

/**
 *
 * @param {*} plop
 * @param {*} appRootPath
 *
 * Ceci initialise les actions asynchrones de récup de réponse ChatGPT
 */
function SetAskQuestionAsyncActions(plop, appRootPath) {
  // PLOP_ASYNC_ACTION_USE

  // set laction asynchrone
  // qui fait une requete de demande de
  // réponse de question (?! drole de formulation ;-), via chat gpt
  setChatGPTGetter(plop, appRootPath);

  // set laction de suppression de données précedemment générées
  //deleteCaca(plop, appRootPath);

  // set laction qui crée,
  // dans un folder dédié,
  // un fichier Maslow.json,
  // contenant des données importantes:
  // (historique de prompts,
  // réponse Chat GPT,
  // morceaux of interest, etc...)
  setCreateMaslowJSON(plop, appRootPath);

  // set laction qui ouvre dans
  // VS Code le folder de lappli, puis ouvre le fichier contenant
  // la fonction, et le fichier actualJsFile, si pas null
  openFilesInVSCode(plop, appRootPath);
}

export { SetAskQuestionAsyncActions };
