import { GoToAddItemToTutoriels } from "../../pieces/NavHelpers/GoToAddItemToTutoriels";

/**
 *
 *
 * @returns la liste dicones de la barre du bas décran.
 */
export function BottomBarIconsList() {
  return [
    {
      iconName: "plus-thick",

      // callback quand icone est cliquée
      onIconClicked: () => {
        GoToAddItemToTutoriels();
      },
    },
  ];
}
