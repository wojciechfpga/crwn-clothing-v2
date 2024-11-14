// SignIn.js
import { FcGoogle } from "react-icons/fc";
import { signinWithGooglePopup } from "../../utils/firebase.util";
import "./signin.component.scss";

export default function SignIn() {
    const signInGoogle = async () => {
        const response = await signinWithGooglePopup();
        console.log(response);
    };

    return (
        <div>
            <p>Sign in</p>
            <button className="googleButton" onClick={signInGoogle}>
                <FcGoogle className="icon" /> {/* Ikona Google */}
                Sign in with Google
            </button>
        </div>
    );
}
