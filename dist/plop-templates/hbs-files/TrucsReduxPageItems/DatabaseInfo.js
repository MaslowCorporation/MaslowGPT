// eslint-disable-next-line no-unused-vars
import { Constants } from "src/constants/Constants";

// le nom de la base de données SQLITE
export const databaseName = "TutorielsState";


// Names and types of values stored in the DB
// (there are 3 possible types: TEXT (string), INTEGER (integer), and REAL (decimal number))
export const rowNamesAndTypes = {
  // PLOP_INJECT_DB_ROW

  // item name
  name: "TEXT",

  // item creation date
  creation_year: "INTEGER",
  creation_month: "INTEGER",
  creation_day: "INTEGER",
  creation_hour: "INTEGER",
  creation_minute: "INTEGER",
  creation_second: "INTEGER",

  // Which index is this item at ?
  itemIndex: "INTEGER",

  // Does this item belong to a group?
  // If yes,
  // this represents the name of the group it belongs to
  groupName: "TEXT",

  // unique Identifier for this item
  uniqueId: "TEXT",
};


/* ************************************** */
