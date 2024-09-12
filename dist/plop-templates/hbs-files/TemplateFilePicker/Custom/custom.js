/* PLOP_INJECT_IMPORT */

import { useState } from "react";
import { MsgFormButton } from "src/services/MsgFormButton/MsgFormButton";
import { SwitchPages } from "src/services/SwitchPages/SwitchPages";
import React from "react";
import { PickFile } from "src/services/PickFile/PickFile";
import { types } from "react-native-document-picker";
import { SaveItemInDB } from "src/services/SaveItemInDB/SaveItemInDB";
import { Constants } from "src/constants/Constants";



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
  onInput,
  route,
}) => {
  /* PLOP_INJECT_CODE */

  const homeUrl = "https://pixabay.com/music/search/genre/ambient"
  const [subscribeUrl, setSubscribeUrl] = useState(homeUrl)
  const [showUI, setShowUI] = useState(true)

  return <SwitchPages
    showUI={showUI}
    setShowUI={setShowUI}
    iframeURL={subscribeUrl}
    setIframeURL={setSubscribeUrl}
    fontFamily={"ComingSoon"}
    homeURL={"https://duckduckgo.com"}
    showAddressBar={true}

    UIComponent={() =>
      <MsgFormButton
        fontFamily={"ComingSoon"}
        message={"Ecris ici lurl daccueil du site ou tu veux télécharger une bande son pour ton tutoriel, puis appuie sur le bouton OK pour naviguer vers cette page de téléchargements. Une fois téléchargé, appuie sur le bouton ci dessous pour pick ce fichier comme bande son de ton tutoriel ! Lets go"}
        initialFormInput={homeUrl}
        formPlaceholder={"Ecris lurl du site de musique ici"}
        onFormButtonClicked={(text) => {
          if (text?.length > 0) {
            setSubscribeUrl(text);
            setShowUI(false)
          }
        }}
        buttonText={"Sélectionne le fichier audio téléchargé, avec ce bouton."}
        onButtonClicked={() => {
          OnButtonClicked({ onInput, route });
        }}
      />
    }
  />

};

function OnButtonClicked({ onInput, route }) {
  PickFile({
    fileType: types.audio,
    onFilePicked: async (fileUri) => {

      // sauvegarde des données dans un row, 
      // suite à une prise de bande son dun tuto
      /*const newSoundtrackData = {
        soundtrackNeedsUpload: Constants.true,
        soundtrackPath: fileUri
      };

      SaveItemInDB({
        itemRows: (item) => newSoundtrackData,
        SqliteReduxObject: SqliteReduxTutoriels,
        uniqueId: route.params.tutoriel.uniqueId,
        onSuccess: (qtyRowsAffected) => {
        
        },
        onError: (e) => {

        }
      });*/

      onInput(fileUri)
    },
    onPickError: (e) => {

    },
  });
}

