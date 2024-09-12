import { DescribeProgramInputsChoices } from "../DescribeProgramInputsChoices/DescribeProgramInputsChoices";
import { DescribeProgramInputsLayout } from "./DescribeProgramInputsLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllDescribeProgramInputs({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(DescribeProgramInputsChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return DescribeProgramInputsLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
