/* PLOP_INJECT_IMPORT */
import React from "react";

import { QRGenerator } from "src/services/QRGenerator/QRGenerator";

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

  return <QRGenerator
    qrText={"SOME STR"}
    fontFamily={'ComingSoon'}
    downloadButtonText={"Press this button to download this QR Code. scanning this code with the QR scanner of this app, redirects the user/you to the desired program installation page."}
    onSuccess={(data) => {

    }}
    onError={(e) => {

    }} />
};
