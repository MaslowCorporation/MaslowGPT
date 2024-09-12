/* PLOP_INJECT_IMPORT */
import React from "react";
import { Constants } from "src/constants/Constants";
import { VerticalList } from "src/services/VerticalList/VerticalList";
import { AllLanguages } from "src/constants/AllLanguages.js"

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

  // this page displays a UI that allows a user to choose data and/or do actions, 
  // by clicking on items displayed in a vertical scrolling list of items
  // feel free to tweak it so it serves your purpose

  // the value of the last item the user clicked on, or null
  const currentChoice = answer?.value;

  // the list of items (A list of strings)
  // in this example, its a list of human languages from around the world
  // but of course, it could be whatever you want/need
  const itemList = AllLanguages;

  // the VerticalList component allows you to
  // choose data and/or do actions, 
  // by clicking on items displayed in a vertical scrolling list of items
  return <VerticalList
    /* 
    a list of the items we want to be labeled as chosen (green checked) . 
    in this case, I want only the latest clicked item to be green checked 
    */
    chosenOnes={currentChoice && [currentChoice]}
    /* 
    here is the list of items we want to be displayed.
    Its a list of strings to be precise
    */
    items={itemList}
    onItemClicked={(item) => {
      // this callback gets triggered when the user clicks on one of the items of the list
      // here we simply store the clicked item, in answers, using onInput
      // But, of course, you can do anything you desire here.
      // if u dont need to store shit, erase the code below, and do your thing, soldier
      onInput(item)
    }}
    onItemLongPressed={(item) => {
      // this callback gets triggered when the user long presses on one of the items of the list
      // do your thing, soldier
    }}
    listBackgroundColor={Constants.defaultBackgroundColor}
    itemBackgroundColor={Constants.defaultBackgroundColor}
    itemBorderColor={"black"}
    itemTextColor={"black"}
    itemTextFont={"ComingSoon"}
    itemTextSize={24}
    /* 
    A optional message we want to display above the list of items.
    If you want to the give instructions to the user, etc...
    If omitted, the message isnt shown
    */
    headerMsg={"Ici se trouve une UI permettant de faire un choix dans une liste. Par ex.: 'Dans quelle langue souhaites tu créer la vidéo du tutoriel ?'"}
    headerMsgSize={18} />
};
