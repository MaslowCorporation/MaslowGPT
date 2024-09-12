import { PageState } from "../../State/PageState";

/**
 *
 * @param {*} initialState
 * @param {*} prompt
 * @param {*} onInput
 * @param {*} progressData
 *
 * Triggered when the data failed loading
 */
export function OnDataProgress({
    initialState,
    prompt,
    onInput,
    progressData
}) {
    const progressState = {
        ...initialState,
        ...progressData,
        msg: prompt,
        PageState: PageState.DataLoading
    };

    onInput(JSON.stringify(progressState));
}

