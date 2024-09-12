/* PLOP_INJECT_IMPORT */

/* permet UI de création/modif ditem dans liste */
import { GetUserInput } from "src/components/GetUserInput/GetUserInput";

import { PlayerGTAInstance } from "src/constants/PlayerGTA/PlayerGTA.js";

/* la liste de question nécessaire à la modif ditem via UI */
import { TutorielsQuestionList } from "./TutorielsQuestionList/TutorielsQuestionList";

// some shyt
import { React } from "react";

// constantes globales
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

// permet dêtre multilingue

// permet accès CRUD a DB Sqlite , + Redux associé
import { cancelItemCreation } from "./cancelItemCreation.js";
import { onItemCreationSuccess } from "./onItemCreationSuccess.js";
import { onItemCreationError } from "./onItemCreationError.js";

// getter/setter
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";
import { useRoute, useNavigation } from "@react-navigation/native";
import i18next from 'i18next';

/**
 *
 *
 * @returns un component qui affiche conditionnellement
 * un GetUserInput de création ditem dans Tutoriels.
 */
export const Tutoriels = () => {
  /* PLOP_INJECT_CODE */

  // getter, contient le state actuel
  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  // la liste de questions
  const questions = TutorielsQuestionList();

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

  return (
    <Camouflage
      chosenOne={TutorielsState.chosenOne}
      name={"Tutoriels"}
      refreshed={true}
    >
      {/* Une UI de récup/modif de données */}
      <GetUserInput
        /* Optional appbar menu */
        appbarMenuChoiceList={GUIAppbarMenuOptions}
        /* Permet persistence des donnees dU.I. 
        This takes effect when the value is a string, 
        the persistence ID */
        persistenceID={null}
        /* direction vers laquelle va le scroll */
        scrollDirection={"horizontal_one_by_one"}
        /* montre appbar, ou pas ? */
        showAppbar={true}
        /* le texte de titre de appbar */
        appbarTitle={i18next.t("ZeAppbarTitleName")}
        /* un bruit de clic */
        clickSound={PlayerGTAInstance.GetSound()}
        /* couleur darrière plan de appbar */
        appbarBackgroundColor={Constants.defaultBackgroundColor}
        /* taille de texte du titre appbar */
        appbarTextSize={20}
        /* couleur texte + icones appbar */
        appbarContentColor={Constants.defaultContentColor}
        /* font du texte du titre appbar */
        appbarFont={Constants.defaultFontFamily}
        /* liste de questions à transformer en UI  */
        questions={questions}
        /* couleur arrière plan body */
        bodyBackgroundColor={Constants.defaultBackgroundColor}
        /* couleur contenu body */
        bodyContentColor={Constants.defaultContentColor}
        /* font du texte du body */
        bodyFont={Constants.defaultFontFamily}
        /* couleur arrière plan bottom bar */
        bottomBarBackgroundColor={Constants.defaultBackgroundColor}
        /* couleur icones bottom bar */
        bottomBarIconsColor={Constants.defaultContentColor}
        /* callback si on annule création ditem */
        onCancel={() => {
          cancelItemCreation();
        }}
        /* callback si on réussit  à obtenir données valides, via questions UI */
        onSuccess={(answers) => {
          onItemCreationSuccess(answers, route);
        }}
        /* callback si données input sont invalides */
        onError={({ errMsg, errAnswerIndex, answers }) => {
          onItemCreationError(answers, errAnswerIndex, errMsg, questions);
        }}
      ></GetUserInput>
    </Camouflage>
  );
};
