import { TutorielsDB } from "./TutorielsDB.js";

/**
 *
 * @param {*} answers
 *
 * si succès, retour a la liste, et modifie le shizzle
 */
export function onItemCreationSuccess(answers, route) {
  TutorielsDB({ answers, route });
}
