import { PageState } from "../PageState";

export function GetStoredState(answer) {
    const storedStateStr = answer?.value;

    // the currently stored state for this UI, or null
    // (parsed from the stored JSON string above, if existing)
    const storedState = storedStateStr && JSON.parse(storedStateStr);
    return storedState ?? {
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
    };
}
