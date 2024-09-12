import { OnDataLoadingFailed } from "./StateSetters/OnDataLoadingFailed";
import { OnDataLoaded } from "./StateSetters/OnDataLoaded";
import { OnStartLoading } from "./StateSetters/OnStartLoading";
import { BakeAsyncCake } from "./AsyncCake/BakeAsyncCake";
import { ShowNotification } from "src/services/ShowNotification/ShowNotification";

/**
 *
 * @param {*} prompt, le text actuel du form, si formInput = true, ou null autrement
 * @param {*} initialState, le state de lUI
 * @param {*} answers, les réponses de toutes les UI
 * @param {*} route, contient données venant de react-navigation
 * @param {*} onInput, callback de save de données de cette UI
 *
 * Triggered when the form button/normal button is pressed
 */
export async function _OnFormButtonPressed({
    prompt,
    initialState,
    answers,
    route,
    onInput
}) {
    /* PLOP_INJECT_CODE */


    // indicates that the async work has started (or rather is about to be started)
    OnStartLoading({ initialState, onInput, prompt });

    ShowNotification({
        title: "MyPrettyApp",
        body: "The asynchronous work has begun ;-)",
    });



    // Here you do the asynchronous work, and you return the graal,
    // the thing that all this work produces.
    // It could be anything, a video, a string, a JSON object,
    // your imagination is the limit ;-)
    // Lets call it a 'async cake',
    // cuz, who doesnt like cake ;-)
    const asyncCake = await BakeAsyncCake({ prompt, initialState, answers, route, onInput })


    // if the asynchronous data successfully birthed, 
    // its victory time !
    const asyncDataIsValid = true;

    // if the async cake is correctly baked,
    // then its party time !!!
    if (asyncDataIsValid) {
        // indicates that the async work 
        // has successfully completed
        // here we store in the UIs state, the async cake
        // so the DataLoaded UI can do some with it, if u want of course ;-)

        ShowNotification({
            title: "MyPrettyApp",
            body: "Your asynchronous data is ready ;-)",
        });



        OnDataLoaded({
            initialState,
            prompt,
            asyncCake,
            onInput,
            route,
            answers,
        });

    }
    // If the async cake failed to cook,
    // then its crying emoji time ;-)
    // DONT PANIC, BREATHE ;-)
    else {


        // indicates that the async work has failed
        OnDataLoadingFailed({
            initialState,
            prompt,
            onInput
        });
    }
}


