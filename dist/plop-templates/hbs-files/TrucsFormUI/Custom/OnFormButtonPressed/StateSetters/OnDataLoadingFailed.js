import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} initialState
 * @param {*} prompt
 * @param {*} onInput
 *
 * Triggered when the data failed loading
 */
export function OnDataLoadingFailed({ initialState, prompt, onInput }) {
    const errorState = { ...initialState, msg: prompt, PageState: PageState.DataLoadingFailed };
    onInput(JSON.stringify(errorState));
}

