import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} currentState
 * @param {*} answers
 * @param {*} route
 * @param {*} prompt
 * @param {*} asyncCake
 * @param {*} onInput
 *
 * Triggered when the asynchronous data has loaded successfully
 */
export function OnDataLoaded({
    currentState,
    answers,
    route,
    prompt,
    asyncCake,
    onInput
}) {

    const loadedState = { ...currentState, msg: prompt, asyncCake, PageState: PageState.DataLoaded };
    onInput(JSON.stringify(loadedState));
}


