import {
  GetSoundtrackChoices,
  GetSoundtrackChoicesActions,
  GetSoundtrackChoicesUI,
} from "../GetSoundtrackChoices/GetSoundtrackChoices";

/**
 * Le design d'1 choix
 */
export function GetSoundtrackLayout({
  choice,
  answers,
  answer,
  answerIndex,
  currentItem,
}) {
  const thisGetSoundtrack = GetSoundtrackChoices()[choice];

  return {
    // un descriptif de la unité de mesure
    choiceDescription: GetSoundtrackChoicesUI()[choice],

    // la valeur de la unité de mesure
    choiceValue: thisGetSoundtrack,

    choiceImgUrl: "",
    choiceImgPath: "",

    // si la réponse en cours
    // correspond à ce choix en cours de création,
    // affiche le seal of approval
    greenCheckmark: answer?.value == thisGetSoundtrack,

    // si on clique sur ce choix...
    onChoiceClicked: () => {
      GetSoundtrackChoicesActions[choice]({
        choice: thisGetSoundtrack,
        answers,
        answer,
        answerIndex,
        currentItem,
      });
    },
  };
}
