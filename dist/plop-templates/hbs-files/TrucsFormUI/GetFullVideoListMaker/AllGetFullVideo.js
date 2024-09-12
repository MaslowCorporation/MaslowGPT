import { GetFullVideoChoices } from "../GetFullVideoChoices/GetFullVideoChoices";
import { GetFullVideoLayout } from "./GetFullVideoLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllGetFullVideo({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(GetFullVideoChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return GetFullVideoLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
