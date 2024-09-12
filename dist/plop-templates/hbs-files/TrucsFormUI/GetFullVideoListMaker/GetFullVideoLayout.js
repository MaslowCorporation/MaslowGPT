import {
  GetFullVideoChoices,
  GetFullVideoChoicesActions,
  GetFullVideoChoicesUI,
} from "../GetFullVideoChoices/GetFullVideoChoices";

/**
 * Le design d'1 choix
 */
export function GetFullVideoLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisGetFullVideo = GetFullVideoChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: GetFullVideoChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisGetFullVideo,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisGetFullVideo,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      GetFullVideoChoicesActions[choice]({
        choice: thisGetFullVideo,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
