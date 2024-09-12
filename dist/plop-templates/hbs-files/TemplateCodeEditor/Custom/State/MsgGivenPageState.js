import { PageState } from "./PageState";


/**
 * 
 * @param {*} pageState
 *  
 * @returns
 * 

contains a function MsgGivenPageState,
that takes the currently stored page state as argument, 
and returns the UI message we want to be shown on screen given this page state.
feel free to edit as you wish

 */
export const MsgGivenPageState = (pageState) => {
    let data;

    switch (pageState) {
        case PageState.NoData:
            // Do something for active status
            data = "Appuie sur le bouton ci-dessus, pour créer un tuto complet, grâce à tous les efforts que tu as fait, jusquici... Je suis fier de toi ;-)"
            break;
        case PageState.DataLoading:
            // Do something for inactive status
            data = "Veuillez patienter durant le chargement des données ;-)"
            break;
        case PageState.DataLoaded:
            // Do something for pending status
            data = "Chargement des données réussi !"
            break;
        case PageState.DataLoadingFailed:
            // Do something for pending status
            data = "Un problème est survenu durant le chargement des données ;-)"
            break;
        default:
            throw new Error('Invalid status');
    }

    return data
};
