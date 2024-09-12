/* PLOP_INJECT_IMPORT */
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import i18next from 'i18next';
import { CustomComponent } from "./Custom/custom";


// eslint-disable-next-line no-unused-vars
import { useNavigation, useRoute } from "@react-navigation/native";


/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * La question nommée QRScannerUI, qui ....
 */
const QRScannerUI = () => {
  /* PLOP_INJECT_CODE */

  const route = useRoute();
  const navigation = useNavigation();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "QRScannerUI",

    // le type de question souhaité
    // "text" ou "number" ou "choices" ou "custom"
    type: "custom",

    // la description de la question
    // en mode "text" ou "number" ou "choices"
    description: ({ answers, answer, answerIndex }) => {
      return i18next.t("undefined");
    },

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: null,

    // la valeur par défaut a mettre dans le text input
    // (optionnel)
    defaultValue: ({ answers, answer, answerIndex }) =>
      answer?.value ?? undefined,

    // les flex du message ou de la zone dinput
    messageFlex: 1,
    componentFlex: 1,

    // la taille du texte du message
    messageFontSize: 25,

    // on montre le component dinput en premier, ou pas ?
    componentFirst: true,

    // un callback qui vérifie que linput est valide
    // (optionnel)
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return true;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return i18next.t("error_string_name");
    },

    // la callback de customization
    customQuestionPanel: ({ answers, answer, answerIndex, onInput }) => {
      return CustomComponent({
        answers,
        answer,
        answerIndex,
        onInput,
        route,
        navigation,
      });
    },

  };
};

export { QRScannerUI };
