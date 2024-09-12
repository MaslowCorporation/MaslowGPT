import TextReader from "src/services/TextReader/TextReader";
import React from "react";
import { Constants } from "src/constants/Constants";
import { MsgGivenPageState } from "../MsgGivenPageState";
import { PhotoViewer } from "src/services/PhotoViewer/PhotoViewer";
import { View } from "react-native";
import { VideoPlayer } from "src/components/VideoPlayer/VideoPlayer";

export const DataLoadedUI = ({ UIState, setUIState }) => {
    return <TextReader
        speedMs={Constants.defaultTextSpeedMs}
        text={MsgGivenPageState(UIState.PageState)}
        fontFamily={"ComingSoon"}
        textSize={35}
        textColor={"black"}
        backgroundColor={Constants.defaultBackgroundColor}
        textBackgroundColor={"transparent"} />;


};
