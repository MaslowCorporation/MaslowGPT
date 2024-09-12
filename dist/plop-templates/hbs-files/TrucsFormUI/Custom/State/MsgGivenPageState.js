import { PageState } from "./PageState";


/**
 * 
 * @param {*} pageState
 *  
 * @returns
 * 

contains a function MsgGivenPageState,
that takes the currently stored page state as argument, 
and returns the UI message we want to be shown on screen given this page state.
feel free to edit as you wish

 */
export const MsgGivenPageState = (pageState) => {
    let data;

    switch (pageState) {
        case PageState.NoData:
            // Do something for active status
            data = "Press the button above to do some asynchronous work ;-)"
            break;
        case PageState.DataLoading:
            // Do something for inactive status
            data = "Please wait while the data is being created ;-)"
            break;
        case PageState.DataLoaded:
            // Do something for pending status
            data = "The data has been created successfully !"
            break;
        case PageState.DataLoadingFailed:
            // Do something for pending status
            data = "Oops.... A problem occurred while trying to create the data. Try again ;-)"
            break;
        default:
            throw new Error('Invalid status');
    }

    return data
};
