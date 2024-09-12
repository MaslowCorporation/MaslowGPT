/* eslint-disable no-unused-vars */
/* PLOP_INJECT_IMPORT */
// eslint-disable-next-line no-unused-vars
import i18next from 'i18next';

/* PLOP_INJECT_GLOBAL_CODE */

/* Les différents choix dispo */
export const QRScannerUIChoices = () => {
  return {
    /* PLOP_INJECT_CHOICE */
  };
};

/* Les différents strings à afficher pour UI, selon choix */
export const QRScannerUIChoicesUI = () => {
  return {
    /* PLOP_INJECT_CHOICE_UI */
  };
};

/**
 *
 * @param {*} choice, un choix en particulier
 *
 * retourne le string dUI à afficher selon valeur de choix
 */
export const QRScannerUIChoiceUI = (choice) => {
  var object = QRScannerUIChoices();

  const keyName = Object.keys(object).find((key) => object[key] === choice);

  return QRScannerUIChoicesUI()[keyName];
};

/**
 * Les différents actions à effectuer, selon choix cliqué.
 *
 *
 **/
export const QRScannerUIChoicesActions = {
  /* PLOP_INJECT_CHOICE_ACTION */
};
