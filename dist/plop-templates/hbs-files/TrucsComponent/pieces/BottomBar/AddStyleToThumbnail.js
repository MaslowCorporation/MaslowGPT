import { SqliteReduxThumbnailPickerState } from "src/reduxState/ThumbnailPickerState/ThumbnailPickerStateGetterSetter";
import { AddTextToImage } from "src/services/AddTextToImage/AddTextToImage";
import { GetUniqueID } from "src/services/GetUniqueID/GetUniqueID";
import { ThumbnailPickerState } from "../State/ThumbnailPickerState";
import { SetPickerState } from "./GoToSpecificState";

/**
 * permet dajouter un style par défaut pour le thumbnail.
 *
 * Style =
 *
 * - Une icone, en haut à gauche du thumb
 *
 * - Du texte, en bas à gauche du thumb'
 */
export const AddStyleToThumbnail = () => {
  const currentThumbnailPickerState =
    SqliteReduxThumbnailPickerState.GetThumbnailPickerStateFirstRow();

  const onSuccess = (data) => {
    // Ajoute une icone, puis le nom du tuto
    AddTextToImage({
      imagePath: currentThumbnailPickerState.thumbPath,
      fileExtension: "png",
      fileName: GetUniqueID(),
      subfolder: "Pics",
      texts: [
        {
          // position, The position of the text in background image
          position: { x: 150, y: 150 },

          // text, The value of the text
          text: "Le beau texte",

          // textSize, The size of the text
          textSize: 150,

          // color, The color of the text
          color: "#000000",

          // *** A AJOUTER ***

          // corner, dans quel coin de la photo on affiche le texte ?
          //
          // top_left,
          // top_center,
          // top_right,
          // center,
          // bottom_left,
          // bottom_center,
          // bottom_right
          corner: "bottom_right",

          // addBoxToText, on emboite le texte, ou pas ?
          addBoxToText: true,

          // boxBackgroundColor, la couleur darriere plan de la boite
          boxBackgroundColor: "#ffffff",

          // boxWidth, taille de boite
          boxWidth: 50,

          // addTextBorder, ajoute ou pas de la peau sur le texte ?
          addTextBorder: false,

          // textBorderWidth, lépaisseur de la peau de texte
          textBorderWidth: "5",

          // textBorderColor, la couleur de peau du texte
          textBorderColor: "#cc20cc",

          // stackText, on affiche le texte sur 1 ligne, ou chaque mot empilé lun sur lautre, verticalement ?
          stackText: true,

          // fontFamily, The font name that can resolve by React Native
          fontFamily: "ComingSoon",
        },
      ],
      onError: (e) => {

      },
      onSuccess: (path) => {
        const currentThumbnailPickerState =
          SqliteReduxThumbnailPickerState.GetThumbnailPickerStateFirstRow();

        SetPickerState({
          newState: {
            ...currentThumbnailPickerState,
            currentState: ThumbnailPickerState.WatchThumb,
            thumbPath: path,
          },
          onSuccess: (data) => {

          },
        });

        /*
        
        AddIconToImage({
          imagePath: currentThumbnailPickerState.thumbPath,
          icon: require("assets/images/icon.png"),
          position: { x: 0, y: 0 },
          onSuccess: (path) => {
            const currentThumbnailPickerState =
              SqliteReduxThumbnailPickerState.GetThumbnailPickerStateFirstRow();

            SetPickerState({
              newState: {
                ...currentThumbnailPickerState,
                currentState: ThumbnailPickerState.WatchThumb,
                thumbPath: path,
              },
              onSuccess: (data) => {

              },
            });
          },
        });

        */
      },
    });
  };

  const onError = (e) => { };

  SetPickerState({
    newState: {
      ...currentThumbnailPickerState,
      currentState: ThumbnailPickerState.Wait,
    },
    onSuccess,
    onError,
  });
};
