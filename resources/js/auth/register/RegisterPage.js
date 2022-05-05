import { elementBinder } from "../../utils/ElementBinder";
import SingleInputComponent from "../common/SingleInputComponent";

export default function RegisterPage(props) {
    return (
        <div
            className={`flex min-h-screen w-screen items-center justify-center bg-cover bg-center`}
            style={{ backgroundImage: `url(${props.publicpath + "/bg.png"})` }}
        >
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
                </div>

                <div className="flex w-full">
                    <div className="bg-red-400 w-full h-24"></div>
                    <div className="bg-sky-400 w-full h-24"></div>
                </div>
            </div>
        </div>
    );
}

elementBinder("register-view", <RegisterPage />);
