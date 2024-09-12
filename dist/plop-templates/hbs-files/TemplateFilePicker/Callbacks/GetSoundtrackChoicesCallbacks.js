/**
 * Les différents actions à effectuer, selon valeur de choix.
 *
 * N.B.: Tout Ceci est à considérer comme un template copiable/collable,
 * et réutilisable ailleurs, si nécessaire.
 * alors copie colle le selon besoins.
 *
 **/

import { GetSoundtrackChoices } from "../GetSoundtrackChoices/GetSoundtrackChoices";

export const GetSoundtrackChoicesCallbacks = {
  /* PLOP_INJECT_CHOICE_CALLBACK */
  lu
};

/**
 *
 * @param {*} value, le choix fait par l'user
 *
 * @returns ...... , fournie via callback
 */

export const GetSoundtrackChoiceValue = (value) => {
  // le nom de key du choix effectué
  const choiceKeyName = GetSoundtrackChoiceKey(value);

  // le style correspondant
  const choiceCallbackValue = GetSoundtrackChoicesCallbacks[choiceKeyName]();

  return choiceCallbackValue;
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le nom du key selon valeur de choix
 */
export const GetSoundtrackChoiceKey = (choice) => {
  var object = GetSoundtrackChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return keyName;
};
