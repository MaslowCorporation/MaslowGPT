import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} initialState
 * @param {*} answers
 * @param {*} route
 * @param {*} prompt
 * @param {*} asyncCake
 * @param {*} onInput
 *
 * Triggered when the asynchronous data has loaded successfully
 */
export function OnDataLoaded({
    initialState,
    answers,
    route,
    prompt,
    asyncCake,
    onInput
}) {

    const loadedState = { ...initialState, msg: prompt, asyncCake, PageState: PageState.DataLoaded };
    onInput(JSON.stringify(loadedState));
}


