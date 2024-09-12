/* PLOP_INJECT_IMPORT */

/* permet UI de création/modif ditem dans liste */
import { GetUserInput } from "src/components/GetUserInput/GetUserInput";

/* la liste de question nécessaire à la modif ditem via UI */
import { TutorielsEditList } from "./TutorielsEditList/TutorielsEditList";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

// some shyt
import { React } from "react";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

// permet dêtre multilingue

// permet accès CRUD a DB Sqlite , + Redux associé
import { cancelItemCreation } from "./cancelItemCreation";
import { onItemCreationSuccess } from "./onItemCreationSuccess";
import { onItemCreationError } from "./onItemCreationError";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { useRoute, useNavigation } from "@react-navigation/native";
import i18next from 'i18next';
import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";

/**
 *
 *
 * @returns a component that conditionally displays
 * a GetUserInput for item creation in Tutoriels.
 */
export const EditItemInTutoriels = () => {
  /* PLOP_INJECT_CODE */


  const route = useRoute();
  const navigation = useNavigation();

  // Getter, contains the current state
  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  // List of questions
  const questions = TutorielsEditList();

  // currentItem is the item that just got long clicked in the list of data
  const currentItemUniqueId = TutorielsState.itemUniqueId;
  const currentItem =
    SqliteReduxTutoriels.GetItemByUniqueID(currentItemUniqueId);

  const GUIAppbarMenuOptions = [
    {
      optionName: i18next.t('GoToToolbox'),
      onOptionClicked: () => {
        navigation.navigate("Toolbox");
      }
    },
  ];

  return (
    <Camouflage
      chosenOne={TutorielsState.chosenOne}
      name={"EditItemInTutoriels"}
      refreshed={true}
    >
      {/* A UI for data retrieval/modification */}
      <GetUserInput
        /* Optional appbar menu */
        appbarMenuChoiceList={GUIAppbarMenuOptions}
        /* allows persistence of data for this item, during */
        persistenceID={currentItem?.uniqueId}
        /* direction in which the scroll goes */
        scrollDirection={"horizontal_one_by_one"}
        /* show app bar, or not? */
        showAppbar={true}
        /* app bar title text */
        appbarTitle={i18next.t("Edit")}
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
          onItemCreationSuccess(answers);
        }}
        /* callback if input data is invalid */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg, questions);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};
