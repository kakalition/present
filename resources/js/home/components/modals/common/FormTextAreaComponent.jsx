export default function FormTextAreaComponent() {
  return (
    <label htmlFor="description" className="flex flex-col items-start font-ibm-plex-sans text-base text-black md:text-lg">
      Description
      <div className="h-2" />
      <textarea
        className="p-4 w-full font-ibm-plex-sans text-base bg-slate-100 border-2 focus:border-primary-button border-x-transparent border-t-transparent border-b-slate-400 focus:outline-none resize-none"
        id="description"
        name="description"
        rows={4}
      />
    </label>
  );
}
