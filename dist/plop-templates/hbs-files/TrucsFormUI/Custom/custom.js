/* PLOP_INJECT_IMPORT */
import React, { useState, useEffect, useMemo } from 'react';
import { FormUI } from "src/services/FormUI/FormUI";
import { UIGivenPageState } from "./State/UIGivenPageState";
import { OnFormButtonPressed } from "./OnFormButtonPressed/OnFormButtonPressed";
import { GetStoredState } from './State/GetStoredState/GetStoredState';

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

  // this page displays a UI that allows
  // a user to load asynchronous data,
  // via UI buttons, and a optional form. 
  // feel free to tweak it so it serves your purpose

  // the currently stored state for this UI, or null
  // (a JSON object stored as a string, in the GUIState database)
  const currentState = GetStoredState(answer);


  // the appropriate UI we want to be shown,
  // given the current UI state
  // if u want to see all the states available, or if u want
  // add/remove states and UIs, edit the following files (edit each one, because they depend on each other to work)
  //
  // - State/PageState.js (contains all the available states, 
  // in an object named PageState. feel free to edit as you wish)
  //
  // - State/UIGivenPageState.js (contains a function UIGivenPageState,
  // that takes the currently stored page state as argument, 
  // and returns the UI we want to be shown on screen given this page state.
  // feel free to edit as you wish)
  //
  // - State/MsgGivenPageState.js (contains a function MsgGivenPageState,
  // that takes the currently stored page state as argument, 
  // and returns the UI message we want to be shown on screen given this page state.
  // feel free to edit as you wish)
  const UI = UIGivenPageState(currentState.PageState)

  // the FormUI component is the backbone of this mechanism
  // its a simple component, made of a (optional) form and a validation button
  // with a custom UI under it. thats all it is ;-)
  return <FormUI
    /* UI related props. we pass the getter/setter as props so the UI callbacks have access to them */
    UI={UI}
    showForm={true}
    UIState={currentState}
    setUIState={onInput}

    /* Form related props. 
    If you dont want a form, 
    set showForm to false, 
    and remove the text arg, and prompt: text,  */
    initialFormInput={currentState.msg}
    formPlaceholder={"Ecris la description ici"}
    fontFamily={"ComingSoon"}
    // If showForm is set to false,
    // you can add other buttons alongside the first button, if needed.
    // in the array below, add more buttons as you wish
    // dont add a million buttons though ;-)
    otherButtons={[
      // le btn de creation de full video et thumb et traductions
      {
        buttonIconName: 'check-outline',
        onButtonClicked: async (text) => {

          // this function does some work, when the form button/normal button is pressed 
          // feel free to step in and edit to your hearts desire
          OnFormButtonPressed({
            prompt: text,
            initialState: currentState,
            answers,
            route,
            onInput
          });

        },
      },
    ]}
  />
};
