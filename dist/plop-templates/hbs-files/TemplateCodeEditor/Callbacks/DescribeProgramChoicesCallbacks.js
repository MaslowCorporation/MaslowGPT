/**
 * Les différents actions à effectuer, selon valeur de choix.
 *
 * N.B.: Tout Ceci est à considérer comme un template copiable/collable,
 * et réutilisable ailleurs, si nécessaire.
 * alors copie colle le selon besoins.
 *
 **/

import { DescribeProgramChoices } from "../DescribeProgramChoices/DescribeProgramChoices";

export const DescribeProgramChoicesCallbacks = {
  /* PLOP_INJECT_CHOICE_CALLBACK */
};

/**
 *
 * @param {*} value, le choix fait par luser
 *
 * @returns ...... , fournie via callback
 */

export const DescribeProgramChoiceValue = (value) => {
  // le nom de key du choix effectué
  const choiceKeyName = DescribeProgramChoiceKey(value);

  // le style correspondant
  const choiceCallbackValue = DescribeProgramChoicesCallbacks[choiceKeyName]();

  return choiceCallbackValue;
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le nom du key selon valeur de choix
 */
export const DescribeProgramChoiceKey = (choice) => {
  var object = DescribeProgramChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return keyName;
};
