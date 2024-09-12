import {
  GetDestinationLanguageChoices,
  GetDestinationLanguageChoicesActions,
  GetDestinationLanguageChoicesUI,
} from "../GetDestinationLanguageChoices/GetDestinationLanguageChoices";

/**
 * Le design d'1 choix
 */
export function GetDestinationLanguageLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisGetDestinationLanguage = GetDestinationLanguageChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: GetDestinationLanguageChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisGetDestinationLanguage,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisGetDestinationLanguage,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      GetDestinationLanguageChoicesActions[choice]({
        choice: thisGetDestinationLanguage,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
