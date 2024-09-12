import {
  DescribeProgramChoices,
  DescribeProgramChoicesActions,
  DescribeProgramChoicesUI,
} from "../DescribeProgramChoices/DescribeProgramChoices";

/**
 * Le design d'1 choix
 */
export function DescribeProgramLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisDescribeProgram = DescribeProgramChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: DescribeProgramChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisDescribeProgram,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisDescribeProgram,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      DescribeProgramChoicesActions[choice]({
        choice: thisDescribeProgram,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
