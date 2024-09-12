import i18next from 'i18next';
/* PLOP_INJECT_IMPORT */
import React from "react";
import { Constants } from "src/constants/Constants";
import TextReader from "src/services/TextReader/TextReader";

/* PLOP_INJECT_GLOBAL_CODE */

/**
 *
 * @param {*} answers, all the user answers so far
 *
 * @param {*} answer, the user answer for this question
 *
 * @param {*} answerIndex, the 0 based index of this question,
 * in the list of questions.
 *
 * @param {*} onInput, a callback that allows you
 * to save the user chosen answer,
 * from custom UI, or whatever.
 *
 * @param {*} route, the route object from useRoute() of @react-navigation/native
 *
 * @param {*} navigation, the navigation object from useRoute() of @react-navigation/native
 *
 * @return some custom UI imaginated
 * by your magnificient brain,
 * and/or the magnificient brain of A.I.
 */
export const CustomComponent = ({
  answers,
  answer,
  answerIndex,
  onInput,
  route,
  navigation,
}) => {
  /* PLOP_INJECT_CODE */
  return <TextReader
    speedMs={400}
    text={"Some beautiful text"}
    fontFamily={"ComingSoon"}
    textSize={30}
    textColor={"black"}
    backgroundColor={Constants.defaultBackgroundColor}
    textBackgroundColor={"transparent"}
    animate={true}
    animateLoop={true}
  />
};
