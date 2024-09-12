import { GetSoundtrackChoices } from "../GetSoundtrackChoices/GetSoundtrackChoices";
import { GetSoundtrackLayout } from "./GetSoundtrackLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllGetSoundtrack({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(GetSoundtrackChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return GetSoundtrackLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
