import { DoAICompletion } from "./DoAICompletion.js";



/**
 *
 * @param {*} prompt, the prompts value, or null
 * 
 * @param {*} initialState, the current UI state. 
 * Default state is located in the nearest GetStoredState function, 
 * within your UIs folder. Default state contains {
    // the forms default input
    // (if the form is being shown)
    msg: "Pikachu qui fait du ski.",

    // the default page state
    // (determines what UI is being shown to the user)
    // when this value is being changed, the UI is changing too
    PageState: PageState.NoData,

    // the asynchronous data we all desire
    // (the graal, the cream of the crop, 
    // the caviar, the kush)
    // Lets call it asyncCake, because I like cakes ;-)
    asyncCake: null,
}
 * 
 * @param {*} answers, all the UI answers so far
 * 
 * @param {*} route, contains react-navigation related data
 * 
 * @param {*} onInput, a callback that allows you to save the UIs state during the asynchronous work.
 * Like, for example, to show intermediate progress data in the 'work in progress' UI
 * Like, for example: onInput({ ...initialState, someShizzle: 42 })
 * 
 * @returns .........
 *
 */
export async function BakeAsyncCake({
    prompt,
    initialState,
    answers,
    route,
    onInput
}) {
    /* PLOP_INJECT_CODE */

    /**
     * Uncomment this code if you want to do 
     * AI Completion using your SDK and backend.
     *
    return DoAICompletion({
        prompt,
        initialState,
        answers,
        route,
        onInput
    });
    */

    return;
}

