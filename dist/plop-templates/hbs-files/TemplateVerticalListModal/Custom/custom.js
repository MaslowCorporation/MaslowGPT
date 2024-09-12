/* PLOP_INJECT_IMPORT */
import React, { useState } from "react";
import { Constants } from "src/constants/Constants";
import { VerticalList } from "src/services/VerticalList/VerticalList";

import { ScrollableModal } from "src/services/ScrollableModal/ScrollableModal";
import { View } from "react-native";
import { TryParse } from "src/services/TryParse/TryParse";
import { FilterObjectByKeys } from "src/services/FilterObjectByKeys/FilterObjectByKey";

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

  // all the {{varname}} found in the code, or null if none found
  const allUserVars = ["thing 1", "thing 2"];


  /* 
  an object looking like {

    'other user variable name': [......],
    'user variable name': [
      {
        title: 'Write a sentence that will explain to the user what this value is needed for',
        id: 'UserVariableDescription',
        type: 'textinput_text', // 'textinput_text', 'textinput_number', 'choice_list'
        output: <the user typed output, if the user chose/typed something>
      },
      {
        title: 'What is the type of this user variable ?',
        id: 'UserVariableType',
        type: 'choice_list', // 'textinput_text', 'textinput_number', 'choice_list'
        output: <the user chosen output, if the user chose/typed something>,
        choices: [
          {
            title: 'A number',
            value: 'number',
          },
          {
            title: 'A string',
            value: 'text',
          }
        ]

      },
    ]
  }
  */
  const allUserVariableData = FilterObjectByKeys(TryParse(answer?.value) ?? {}, allUserVars);

  // all the inputs completed (coming soon)
  const currentChoice = null; //answer?.value;

  // the list of items (A list of strings)
  // here its the list of user variable names
  const itemList = allUserVars;

  // le message du
  const listMsg = allUserVars ? 'Click each user variable, and add the required info' : "Your program doesnt need user data to work, so you can go to the next step";

  /*
  the state of the user variable modal
  */
  const [modalState, setModalState] = useState({
    showModal: false,
    inputs: null,
    varName: null,
  });

  // the VerticalList component allows you to
  // choose data and/or do actions, 
  // by clicking on items displayed in a vertical scrolling list of items
  return <View style={{ flex: 1 }}>
    <VerticalList
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

        setModalState({
          varName: item,
          showModal: true,
          inputs: allUserVariableData[item] ?? [
            {
              title: 'Write a sentence that will explain to the user what this value is needed for',
              id: 'UserVariableDescription',
              type: 'textinput_text', // 'textinput_text', 'textinput_number', 'choice_list'

            },
            {
              title: 'What is the type of this user variable ?',
              id: 'UserVariableType',
              type: 'choice_list', // 'textinput_text', 'textinput_number', 'choice_list'
              output: 'number',
              choices: [
                {
                  title: 'A number',
                  value: 'number',
                },
                {
                  title: 'A string',
                  value: 'text',
                }
              ]

            },
          ]
        });


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
      headerMsg={listMsg}
      headerMsgSize={18} />
    <ScrollableModal
      inputs={modalState.inputs}
      onSubmit={(outputs) => {
        allUserVariableData[modalState.varName] = outputs;

        onInput(JSON.stringify(allUserVariableData));

        setModalState({
          showModal: false,
          inputs: null,
          varName: null
        })
      }}
      modalVisible={modalState.showModal}
      showModalButton={false}
      fontFamily={"ComingSoon"}
    />
  </View>
};
