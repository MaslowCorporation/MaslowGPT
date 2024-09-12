import {
  DescribeProgramInputsChoices,
  DescribeProgramInputsChoicesActions,
  DescribeProgramInputsChoicesUI,
} from "../DescribeProgramInputsChoices/DescribeProgramInputsChoices";

/**
 * Le design d'1 choix
 */
export function DescribeProgramInputsLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisDescribeProgramInputs = DescribeProgramInputsChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: DescribeProgramInputsChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisDescribeProgramInputs,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisDescribeProgramInputs,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      DescribeProgramInputsChoicesActions[choice]({
        choice: thisDescribeProgramInputs,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
