import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} currentState
 * @param {*} setCurrentState
 * @param {*} onInput
 * @param {*} prompt
 *
 * Triggered when the asynchronous work is right about to be started.
 *
 * Sets the state to loading state, and saves the prompts value in memory, if needed
 */
export function OnStartLoading({ currentState, onInput, prompt }) {
    const loadingState = { ...currentState, msg: prompt, PageState: PageState.DataLoading };
    onInput(JSON.stringify(loadingState));
}
