import TextReader from "src/services/TextReader/TextReader";
import React from "react";
import { Constants } from "src/constants/Constants";
import { MsgGivenPageState } from "../MsgGivenPageState";

export const DataLoadingUI = ({ UIState, setUIState }) => {
    return <TextReader
        speedMs={Constants.defaultTextSpeedMs}
        text={MsgGivenPageState(UIState.PageState)}
        fontFamily={"ComingSoon"}
        textSize={35}
        textColor={"black"}
        backgroundColor={Constants.defaultBackgroundColor}
        textBackgroundColor={"transparent"} />;
};
