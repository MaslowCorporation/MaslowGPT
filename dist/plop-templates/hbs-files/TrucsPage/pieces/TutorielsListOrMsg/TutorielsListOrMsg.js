/*  PLOP_INJECT_IMPORT */
import { React } from "react";
import { GetOrientation } from "src/services/GetOrientation/GetOrientation.js";

// styles/callbacks de appbar/body/bottom bar
import { getBottomBarStyle } from "../../DataListStyles/bottomBarStyle";
import { getAppbarStyle } from "../../DataListStyles/appbarStyle";
import { getDataListStyle } from "../../DataListStyles/dataListStyle";

// permet dafficher une liste de données
import { DataList } from "src/components/DataList/DataList";

// globales constantes
import { Constants } from "src/constants/Constants.js";

// permet affichage conditionnel de component
import { Camouflage } from "src/components/Camouflage/Camouflage.js";

import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";

import { SqliteReduxTutoriels } from "src/reduxState/Tutoriels/TutorielsGetterSetter";
import { OnCurrentIndexChanged } from "../../DataListStyles/DataListStylePieces/OnCurrentItemChanged";

/**
 *
 * @returns la liste ditems crées par luser, ou un message.
 */
export const TutorielsListOrMsg = () => {
  /* PLOP_INJECT_CODE */

  /** les styles/callbacks de lappbar (si besoin) */
  const appbarStyle = getAppbarStyle();

  /** les styles/callbacks du dataList (si besoin) */
  const dataListStyle = getDataListStyle();

  /** les styles/callbacks du bottomBar (si besoin) */
  const bottomBarStyle = getBottomBarStyle();

  const TutorielsState =
    SqliteReduxTutorielsState.GetFreshestTutorielsStateFirstRow();

  const TutorielsList = SqliteReduxTutoriels.GetFreshestTutoriels();


  /*

  if youre using firestore to get the data list,
  uncomment this and comment out the line above
  
  const TutorielsList = TryParse(
    TutorielsState.data,
  ) ?? [];
  */

  // callback de changement ditem à lécran
  // permet entre autre, de stocker lindex de litem
  // en cours de visionnage
  // uncomment code if using one by one scroll
  /*const onCurrentIndexChanged = (newIndex) => {
    OnCurrentIndexChanged({ newIndex, route });
  };*/

  /** 
   * les données importantes, déterminant si on refresh, ou pas, litem 
   * uncomment code if using one by one scroll
   **/
  /*
  const importantData = {
    currentIndex: TutorielsState.currentIndex,
  };*/

  return (
    <Camouflage
      chosenOne={TutorielsState.chosenOne}
      name={"TutorielsList"}
      refreshed={true}
    >
      {/* le component qui permet dafficher tes items */}
      <DataList
        /* ici c est les Tutoriels sous forme de array [] */
        dataItems={TutorielsList}
        /* la couleur d arrière plan de la liste de données à l ecran */
        backgroundColor={Constants.defaultBackgroundColor}
        /* les styles/callbacks a appliquer à l appbar/body/bottom bar */
        appbarStyle={appbarStyle}
        dataListStyle={dataListStyle}
        bottomBarStyle={bottomBarStyle}

      /**
       * les données importantes, qui déterminent
       * si oui ou non, on refresh le(s) item(s)
       * uncomment code if using one by one scroll
       */
      //importantData={importantData}
      /**
       * permet:
       *
       * - de mettre à jour lindex de litem en cours de visionnage
       * uncomment code if using one by one scroll
       */
      //setCurrentIndex={onCurrentIndexChanged}
      ></DataList>
    </Camouflage>
  );
};
