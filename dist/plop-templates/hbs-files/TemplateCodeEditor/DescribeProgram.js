/* PLOP_INJECT_IMPORT */
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import i18next from 'i18next';
import { useNavigation, useRoute } from "@react-navigation/native";
import { CustomComponent } from "./Custom/custom";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * La question nommée DescribeProgram, qui ....
 */
const DescribeProgram = () => {
  /* PLOP_INJECT_CODE */

  const route = useRoute();
  const navigation = useNavigation();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "DescribeProgram",

    // le type de question souhaité
    // "text" ou "number" ou "choices" ou "custom"
    type: "custom",

    // la valeur choisie/écrite par luser
    // null (par défaut)
    value: null,

    // un callback qui vérifie que linput est valide
    // (optionnel)
    // true si valide false autrement
    checkInput: ({ input, answers, answer, answerIndex }) => {
      return answer?.value?.length > 0;
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

export { DescribeProgram };
