import { NoDataUI } from "./NoDataUI/NoDataUI";
import { DataLoadingUI } from "./DataLoadingUI/DataLoadingUI";
import { DataLoadingFailedUI } from "./DataLoadingFailedUI/DataLoadingFailedUI";
import { DataLoadedUI } from "./DataLoadedUI/DataLoadedUI";
import { PageState } from "./PageState";

/**
 * 
 * @param {*} pageState
 *  
 * @returns
 * 

contains a function UIGivenPageState,
that takes the currently stored page state as argument, 
and returns the UI we want to be shown on screen given this page state.
feel free to edit as you wish

 */
export const UIGivenPageState = (pageState) => {
    let UI;

    switch (pageState) {
        case PageState.NoData:
            // Do something for active status
            UI = NoDataUI
            break;
        case PageState.DataLoading:
            // Do something for inactive status
            UI = DataLoadingUI
            break;
        case PageState.DataLoaded:
            // Do something for pending status
            UI = DataLoadedUI
            break;
        case PageState.DataLoadingFailed:
            // Do something for pending status
            UI = DataLoadingFailedUI
            break;
        default:
            throw new Error('Invalid status');
    }

    return UI
};
