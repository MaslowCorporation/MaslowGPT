import { Constants } from "src/constants/Constants";
//import { AddStyleToThumbnail } from "./AddStyleToThumbnail";
import { GoToPicker } from "./GoToPicker";

/**
 * la bottom bar de lécran de visionnage de photo
 */
export function WatcherIcons({ clickSound }) {
  // quand bottomBarLayoutOverlaid = true,
  // la bottom bar se superpose a lécran
  return {
    clickSound: clickSound,
    bottomBarLayoutOverlaid: true,
    showBottomBar: true,
    bottomBarHeight: Constants.defaultBarHeight,
    bottomBarBackgroundColor: "transparent",
    bottomBarElevation: 0,
    bottomBarIconsColor: "white",
    bottomBarIconsList: [
      {
        // https://materialdesignicons.com/
        iconName: "camera",
        iconColor: Constants.defaultContentColor,
        onIconClicked: () => {
          GoToPicker();
        },
      },
      /*{
        // https://materialdesignicons.com/
        iconName: "brush",
        iconColor: Constants.defaultContentColor,
        onIconClicked: () => {
          AddStyleToThumbnail();
        },
      },*/
    ],
  };
}
