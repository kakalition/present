/**
 * @param {{type: string, id: string, label: string, placeholder: string, inlineComponent: JSX.Element}} props
 */
export default function SingleInputComponent(props) {
    const { type, id, label, placeholder, inlineComponent } = props;

    return (
        <>
            <div className="flex w-full items-center justify-between">
                <label
                    htmlFor={id}
                    className="font-ibm-plex-sans text-base text-black
                    md:text-lg"
                >
                    {label}
                </label>

                {inlineComponent}
            </div>

            <div className="h-2" />

            <input
                className="h-12 w-full border-2 border-x-transparent border-t-transparent border-b-slate-400 bg-slate-100 px-4 font-ibm-plex-sans text-base 
                focus:border-2 focus:border-primary-button focus:outline-none
                md:h-14"
                type={type}
                id={id}
                name={id}
                placeholder={placeholder}
                required
            />
            <br />
        </>
    );
}
