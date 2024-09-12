import { ShowNotification } from "src/services/ShowNotification/ShowNotification";

/**
 * 
 * @param {*}
 * 
 * this callback gets called when the button under the form is pressed 
 */
export function OnButtonClicked({ setSubscribeUrl, setShowUI }) {
    // do whatever you want here. You can erase the shit below, its just example code.
    // you can use the setSubscribeUrl and setShowUI setters (or other names if u renamed it earlier)
    // to set the iframe url, and UI visibility respectively
    // feel free to add more args if needed

    /*
    MaslowUtils.GetAPISubscriptionLink({
        onSuccess: (url_data) => {
            ShowNotification({
                id: 0,
                title: "MyPrettyApp",
                body: "Lets go to the subscription page !",
                extra: null,
            });

            setSubscribeUrl(url_data.url);
            setShowUI(false);
        },

        onError: (e) => {
            ShowNotification({
                id: 0,
                title: "MyPrettyApp",
                body: "Oops... A problem occurred... Try again !",
                extra: null,
            });
        },
        print: true
    });
    */
}
