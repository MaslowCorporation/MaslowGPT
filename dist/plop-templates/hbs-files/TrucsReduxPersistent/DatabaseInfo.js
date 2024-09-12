// eslint-disable-next-line no-unused-vars
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "TutorielsState";


// les noms et types des valeurs stockées dans la DB
// (il y a 3 types possibles: TEXT (string), INTEGER (nombre entier), et REAL (nombre decimal))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // ...........
  someState1: "INTEGER",

  // ...........
  someState2: "TEXT",

  // identifiant unique
  uniqueId: "TEXT",

  // can be a stringified object or array
  data: "TEXT",
};

// valeurs par défaut qd on reset/init
export const defaultValues = {
  // PLOP_INJECT_DEFAULT_STATE_VALUE

  // ...........
  someState1: "SomeInitialValue1",

  // ...........
  someState2: "SomeInitialValue2",

  // identifiant unique
  uniqueId: "TutorielsState",

  // can be a stringified object or array
  data: null,
};

/* ******************************************* */
