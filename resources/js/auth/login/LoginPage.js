import { CommonButtonComponent } from "../../common-component/CommonButtonComponent";
import { elementBinder } from "../../utils/ElementBinder";
import SingleInputComponent from "../common/SingleInputComponent";
import { RememberMeComponent } from "./components/RememberMeComponent";

// TODO: Abstract away FormDialogComponent

function LoginFormComponent(props) {
    return (
        <form>
            <SingleInputComponent
                type="text"
                id="test"
                label="Email address"
                placeholder="yourname@gmail.com"
            />
            <div className="h-4" />
            <SingleInputComponent
                type="text"
                id="test1"
                label="Password"
                placeholder="••••••••"
            />
            <div className="h-4" />
            <RememberMeComponent />
        </form>
    );
}

function FormDialogButtonComponent(props) {
    return (
        <div className="flex h-20 w-full">
            <div className="w-full">
                <CommonButtonComponent
                    fillSpace={true}
                    buttonType="ghost"
                    padding="px-8"
                    text="Go back"
                />
            </div>
            <div className="w-full">
                <CommonButtonComponent
                    fillSpace={true}
                    buttonType="primary"
                    padding="px-8"
                    text="Log in"
                    icon={props.icon}
                />
            </div>
        </div>
    );
}

/**
 * @param {{}} props 
 */
function FormDialogComponent(props) {
    const arrowIcon = (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
        </svg>
    );

    return (
        <div className="w-[50%] bg-white">
            <h1 className="ml-8 mt-8 font-ibm-plex-sans text-5xl font-semibold text-black">
                Log in
            </h1>

            <div className="h-4" />

            <h2 className="ml-8 font-ibm-plex-sans text-xl font-normal text-black">
                Don't have an account?{" "}
                <span className="font-ibm-plex-sans text-sky-500 underline underline-offset-2">
                    <a href="">Create new account</a>
                </span>
            </h2>

            <div className="h-8" />
            <div className="mx-8 border-t-2 border-t-slate-300" />
            <div className="h-8" />

            <div className="mx-8">
                <LoginFormComponent />
            </div>

            <div className="h-12" />
            <FormDialogButtonComponent icon={arrowIcon} />
        </div>
    );
}

export default function LoginPage(props) {
    return (
        <div
            className={`flex min-h-screen w-screen items-center justify-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${props.publicpath + "/bg.png"})` }}
        >
            <FormDialogComponent />
        </div>
    );
}

elementBinder("login-view", <LoginPage />);
