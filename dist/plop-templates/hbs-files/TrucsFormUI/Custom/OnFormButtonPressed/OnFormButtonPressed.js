/* PLOP_INJECT_IMPORT */

import { OnDataLoadingFailed } from "./StateSetters/OnDataLoadingFailed";
import { _OnFormButtonPressed } from "./_OnFormButtonPressed";

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
export async function OnFormButtonPressed({
    prompt,
    initialState,
    answers,
    route,
    onInput
}) {
    // error safety net baby !
    try {
        await _OnFormButtonPressed({ prompt, initialState, answers, route, onInput })
    } catch (e) {
        // indicate that an error took place during the process
        // save that in the state
        OnDataLoadingFailed({ initialState, onInput });
    }
}


