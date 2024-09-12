import { Constants } from "src/constants/Constants.js";
import { SetPageState } from "../../pieces/NavHelpers/SetPageState";
import { SqliteReduxTutorielsState } from "src/reduxState/TutorielsState/TutorielsStateGetterSetter";


export function MarkScreenAsLoading() {
    const TutorielsState = SqliteReduxTutorielsState.GetTutorielsStateFirstRow();

    SetPageState({
        ...TutorielsState,
        isMounted: Constants.false,
    });
}
