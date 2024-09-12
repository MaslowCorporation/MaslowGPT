import { DescribeProgramChoices } from "../DescribeProgramChoices/DescribeProgramChoices";
import { DescribeProgramLayout } from "./DescribeProgramLayout";

/**
 *
 * @param {*} answer, la tte dernière réponse stockée pour cette question
 *
 * @returns une liste de choix
 */
export function AllDescribeProgram({ answers, answer, answerIndex, currentItem }) {
  return (
    Object.keys(DescribeProgramChoices())
      // on récup. les keys (nom de unité de mesure)
      // dans une liste...
      .filter((v) => isNaN(Number(v)))
      // pour chaque item de cette liste...
      .map((choice) => {
        // crée un choix.
        return DescribeProgramLayout({
          choice,
          answers,
          answer,
          answerIndex,
          currentItem,
        });
      })
  );
}
