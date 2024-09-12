// eslint-disable-next-line no-unused-vars
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "TutorielsState";


// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // affiche ou pas le snack
  snackbarVisible: "INTEGER",

  // texte du snack
  snackbarText: "TEXT",

  // index derreur en utilisant GetUserInput
  userInputErrorIndex: "INTEGER",

  // lécran actuellement affiché dans TutorielsState.js
  chosenOne: "TEXT",

  // la page TutorielsState.js est prêt à être affichée ?
  isMounted: "INTEGER",

  // identifiant unique de litem en cours de modif
  itemUniqueId: "TEXT",

  // lindex actuel visionné
  currentIndex: "INTEGER",

  // identifiant unique
  uniqueId: "TEXT",

  // can be a stringified object or array
  data: "TEXT",
};

// valeurs par défaut qd on reset/init
export const defaultValues = {
  // PLOP_INJECT_DEFAULT_STATE_VALUE

  // affiche ou pas le snack
  snackbarVisible: Constants.false,

  // texte du snack
  snackbarText: "",

  // index derreur en utilisant GetUserInput
  userInputErrorIndex: -1,

  // lécran actuellement affiché dans TutorielsState.js
  chosenOne: "ZeMuthafuckinList",

  // la page TutorielsState.js est prêt à être affichée ?
  isMounted: Constants.false,

  // identifiant unique de litem en cours de modif
  itemUniqueId: null,

  // identifiant unique
  uniqueId: "TutorielsState",

  // lindex actuel
  currentIndex: 0,

  // can be a stringified object or array
  data: null,
};

/* ************************************************* */
