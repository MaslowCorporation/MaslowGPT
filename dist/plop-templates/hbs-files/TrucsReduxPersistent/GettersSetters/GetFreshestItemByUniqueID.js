import { GetFreshestTutorielsState } from "./GetFreshestTutorielsState";

/**
 *
 * @param {*} uniqueID
 *
 * @returns litem ayant le bon uniqueId, si existant, ou null.
 */
export const GetFreshestItemByUniqueID = (uniqueID) => {
  return GetFreshestTutorielsState().find((item) => {
    return item.uniqueId == uniqueID;
  });
};
