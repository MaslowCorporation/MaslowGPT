/* PLOP_INJECT_IMPORT */

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

/* permet UI de création/modif ditem dans liste */
import { GetUserInput } from "src/components/GetUserInput/GetUserInput";

/* la liste de question nécessaire à la création ditem via UI */
import { TutorielsCreationList } from "./TutorielsCreationList/TutorielsCreationList";

// some shyt
import { React, useState } from "react";
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";


// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

// permet dêtre multilingue

// permet accès CRUD a DB Sqlite , + Redux associé

// permet de créer identifiant unique pour item DB
import { cancelItemCreation } from "./cancelItemCreation";
import { onItemCreationSuccess } from "./onItemCreationSuccess";
import { onItemCreationError } from "./onItemCreationError";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { useRoute, useNavigation } from "@react-navigation/native";
import i18next from 'i18next';

/**
 *
 * @returns a component that conditionally displays
 * a GetUserInput for item creation in Tutoriels.
 */
export const AddItemToTutoriels = () => {
  /* PLOP_INJECT_CODE */

  // List of questions
  const questions = TutorielsCreationList();

  // Getter, contains the current state
  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  const route = useRoute();
  const navigation = useNavigation();

  const GUIAppbarMenuOptions = [
    {
      optionName: i18next.t('GoToToolbox'),
      onOptionClicked: () => {
        navigation.navigate("Toolbox");
      }
    },
  ];

  /**
   *
   * Camouflage, it's a conditional invisibility cloak,
   * if chosenOne == name, we show content, otherwise nothing
   *
   */
  return (
    <Camouflage
      chosenOne={TutorielsState.chosenOne}
      name={"AddItemToTutoriels"}
      refreshed={true}
    >
      {/* A UI for data retrieval/modification */}
      <GetUserInput
        /* Optional appbar menu */
        appbarMenuChoiceList={GUIAppbarMenuOptions}
        /* UI data persistence */
        persistenceID={TutorielsState.itemUniqueId}
        /* direction in which the scroll goes */
        scrollDirection={"horizontal_one_by_one"}
        /* show app bar, or not? */
        showAppbar={true}
        /* app bar title text */
        appbarTitle={i18next.t("Add")}
        /* click sound */
        clickSound={PlayerGTAInstance.GetSound()}
        /* app bar background color */
        appbarBackgroundColor={Constants.defaultBackgroundColor}
        /* app bar title text size */
        appbarTextSize={20}
        /* app bar text + icons color */
        appbarContentColor={Constants.defaultContentColor}
        /* app bar title text font */
        appbarFont={Constants.defaultFontFamily}
        /* list of questions to transform into UI */
        questions={questions}
        /* body background color */
        bodyBackgroundColor={Constants.defaultBackgroundColor}
        /* body content color */
        bodyContentColor={Constants.defaultContentColor}
        /* body text font */
        bodyFont={Constants.defaultFontFamily}
        /* bottom bar background color */
        bottomBarBackgroundColor={Constants.defaultBackgroundColor}
        /* bottom bar icons color */
        bottomBarIconsColor={Constants.defaultContentColor}
        /* callback if item creation is cancelled */
        onCancel={() => {
          cancelItemCreation();
        }}
        /* callback if valid data is successfully obtained, via UI questions */
        onSuccess={(answers) => {
          onItemCreationSuccess(answers, TutorielsState.itemUniqueId);
        }}
        /* callback if input data is invalid */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg, questions);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};
