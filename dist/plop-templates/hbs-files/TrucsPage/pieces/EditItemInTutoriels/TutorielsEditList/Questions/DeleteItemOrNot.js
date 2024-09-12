/* PLOP_INJECT_IMPORT */

// un identifiant unique
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";

// permet multilingue
import i18next from 'i18next';

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// permet choix conditionnel
import { OuiOuNon } from "src/services/OuiOuNon/OuiOuNon";

// permet accès CRUD à une base de données Sqlite + Redux
import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";
import { GoToTutorielsList } from "../../../NavHelpers/GoToTutorielsList";

import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

import { useRoute } from "@react-navigation/native";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * Nous permet de supprimer un item de la liste ditems.
 */
const DeleteItemOrNot = () => {
  /* PLOP_INJECT_CODE */
  const route = useRoute();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "DeleteItemOrNot",

    type: "choices", //"text" || "number" || "choices" || "custom",

    // requis
    description: ({ answers, answer, answerIndex }) => {
      return i18next.t("pressToDelete");
    },
    // requis, si "type" === "choices"
    choices: ({ answers, answer, answerIndex }) => {
      return [
        {
          choiceDescription: i18next.t("poubelle"),
          choiceValue: true,
          choiceImgUrl: "",
          choiceImgPath: "",
          //greenCheckmark: answer?.value == true,
          onChoiceClicked: () => {
            onSupprimeVraimentOuPas(route);
          },
        },
      ];
    },

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: false,

    // la valeur par défaut a mettre dans le text input
    defaultValue: ({ answers, answer, answerIndex }) => "",

    // les flex du message ou de la zone dinput
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component dinput en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que linput est valide
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return true;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return "Blue pill, Red pill ? Choose a pilule sil te please.";
    },
  };
};

/**
 *
 * permet suppression ditem conditionnelle,
 * pour éviter freakout et cassage de téléphone.
 *
 */
const onSupprimeVraimentOuPas = (route) => {
  OuiOuNon({
    clickSound: PlayerGTAInstance.GetSound(),
    text: i18next.t("doWeDelete"),
    onYesPressed: () => {
      deleteItemAndGoBackToList();
    },
    onNoPressed: () => null,
    onCancelPressed: () => null,
  });
};

/**
 *
 * Retournons à la liste de données,
 * et supprimons cet item aussi.
 *
 */
const deleteItemAndGoBackToList = () => {
  const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

  const currentItemUniqueId = TutorielsState.itemUniqueId;
  const currentItem =
    SqliteReduxTutoriels.GetItemByUniqueID(currentItemUniqueId);

  // direction poubelos pour le tuto
  SqliteReduxTutoriels.DeleteSpecificRowsFromDB({
    rowName: "uniqueId",
    rowValue: currentItem.uniqueId,
    onSuccess: (qtyAffected) => {
      // retour à la maison
      GoToTutorielsList();
    },
    onError: (e) => {
      //
    },
  });
};

export { DeleteItemOrNot };
