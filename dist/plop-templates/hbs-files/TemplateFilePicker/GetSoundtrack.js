/* PLOP_INJECT_IMPORT */

import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import i18next from 'i18next';

// eslint-disable-next-line no-unused-vars

import React from "react"

// eslint-disable-next-line no-unused-vars

import { CustomComponent } from "./Custom/custom";
import { useRoute } from "@react-navigation/native";

// eslint-disable-next-line no-unused-vars

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * La question nommée GetSoundtrack, qui ....
 */
const GetSoundtrack = () => {
  /* PLOP_INJECT_CODE */

  const route = useRoute();

  return {
    // un identifiant unique
    id: GetUniqueID(),

    // un nom, nous permettant de gérer les récup de réponses choisies/écrites
    name: "GetSoundtrack",

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
      return input?.length > 0;
    },
    // un message derreur à afficher si les données ne sont pas valides
    errMsg: ({ answers, answer, answerIndex }) => {
      return i18next.t("error_string_name");
    },

    // la callback de customization
    customQuestionPanel: ({ answers, answer, answerIndex, onInput }) => {

      return <CustomComponent
        onInput={onInput}
        route={route}
      />
    },
  };
};

export { GetSoundtrack };
