import { FcGoogle } from "react-icons/fc";
import { signinWithGooglePopup } from "../../utils/firebase.util";
import "./signin.component.scss";
import { writeUserToDB } from "../../utils/firebase.util";
import Form from "../singform/signform.component";

export default function SignIn() {
    const signInGoogle = async () => {
        const { user } = await signinWithGooglePopup();
        console.log(user);
        await writeUserToDB(user);
    };

    return (
        <div className="signin-container">
            <div className="signin-info">
                <p>Sign in</p>
                <button className="googleButton" onClick={signInGoogle}>
                    <FcGoogle className="icon" />
                    Sign in with Google
                </button>
            </div>
            <div className="vertical-divider"></div> {/* Pionowy separator */}
            <Form />
        </div>
    );
}
