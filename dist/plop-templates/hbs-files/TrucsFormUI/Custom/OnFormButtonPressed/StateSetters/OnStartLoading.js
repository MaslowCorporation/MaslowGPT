import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} initialState
 * @param {*} onInput
 * @param {*} prompt
 *
 * Triggered when the asynchronous work is right about to be started.
 *
 * Sets the state to loading state, and saves the prompts value in memory, if needed
 */
export function OnStartLoading({ initialState, onInput, prompt }) {
    const loadingState = { ...initialState, msg: prompt, PageState: PageState.DataLoading };
    onInput(JSON.stringify(loadingState));
}
