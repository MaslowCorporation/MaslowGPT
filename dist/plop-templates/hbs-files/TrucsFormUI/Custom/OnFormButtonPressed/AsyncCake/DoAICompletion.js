// import YourOwnSDK from "your-own-sdk";
import { SqliteReduxAppState } from "src/reduxState/AppState/AppStateGetterSetter";
import { GetStoredState } from "../../State/GetStoredState/GetStoredState";
import { OnDataProgress } from "../StateSetters/OnDataProgress";

/**
 *
 * @param {*} prompt, the prompt's value, or null
 *
 * @param {*} initialState, the current UI state.
 * Default state is located in the nearest GetStoredState function,
 * within your UI's folder. Default state contains {
    // the form's default input
    // (if the form is being shown)
    msg: "Pikachu qui fait du ski.",

    // the default page state
    // (determines what UI is being shown to the user)
    // when this value is being changed, the UI is changing too
    PageState: PageState.NoData,

    // the asynchronous data we all desire
    // (the graal, the cream of the crop,
    // the caviar, the kush)
    // Let's call it asyncCake, because I like cakes ;-)
    asyncCake: null,
}
 *
 * @param {*} answers, all the UI answers so far
 *
 * @param {*} route, contains react-navigation related data
 *
 * @param {*} onInput, a callback that allows you to save the UI's state during the asynchronous work.
 * Like, for example, to show intermediate progress data in the 'work in progress' UI.
 * Like, for example: 
 * 
 * const initialState = GetStoredState(answer);
 * 
 * onInput({ ...initialState, someShizzle: 42 })
 *
 * @returns .........
 *
 */
export async function DoAICompletion({
    prompt,
    initialState,
    answers,
    route,
    onInput
}) {
    /*

    const AppState = SqliteReduxAppState.GetItemByUniqueID("AppState");
    const maslowAPIKey = AppState.maslowAPIKey;

    const question = answers["TypeQuestion"].value;

    const outputData = await YourOwnSDK.GetGPTOutput({
        model_chosen: "gpt-3.5-turbo",
        prompt: question,
        params: {
            // your own custom params can go there.
        },
        progressIntervalMs: 1000,

        onJobCreated: (jobId) => {
            console.log(`The background HTTP job got created successfully ! it's id is: ${jobId}`);
        },
        onSuccess: (output) => {
            console.log(`Success: ${JSON.stringify(output?.answer?.result, null, 2)}`);
        },
        onError: (e) => {
            console.log(`Error: ${JSON.stringify(e?.response?.data, null, 2)}`);
        },
        onProgress: (progress) => {
            OnDataProgress({
                initialState,
                prompt,
                onInput,
                progressData: {
                    currentAnswer: progress.progress
                }
            });

            // console.log(`\nJob Progress: ${JSON.stringify(progress.progress, null, 2)}`);
        },

        apiKey: maslowAPIKey,
        print: false,
    });

    // console.log(`output data: ${JSON.stringify(outputData, null, 2)}`);

    // si la requete s'est terminee avec succes
    if (outputData) {
        return outputData.answer?.result;
    }

    // si caca
    return;
    */
}
