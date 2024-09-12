import { GetDestinationLanguageChoices } from "../GetDestinationLanguageChoices/GetDestinationLanguageChoices";
import { GetDestinationLanguageLayout } from "./GetDestinationLanguageLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllGetDestinationLanguage({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(GetDestinationLanguageChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return GetDestinationLanguageLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
