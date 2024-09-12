import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} currentState
 * @param {*} prompt
 * @param {*} setCurrentState
 * @param {*} onInput
 *
 * Triggered when the data failed loading
 */
export function OnDataLoadingFailed({ currentState, prompt, onInput }) {
    const errorState = { ...currentState, msg: prompt, PageState: PageState.DataLoadingFailed };
    onInput(JSON.stringify(errorState));
}

