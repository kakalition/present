import React from 'react';
import SearchIcon from '../../../common-component/icons/SearchIcon';

export default function SearchBarComponent({
  onTextChange,
} : { onTextChange:React.ChangeEventHandler }) {
  return (
    <div
      className="flex items-center w-full h-full bg-white border-2 border-x-slate-100 border-t-slate-100 border-b-slate-300"
    >
      <div className="m-4 w-8 h-8 stroke-black"><SearchIcon /></div>
      <input
        className="w-full h-full text-base focus:outline-none font-ibm-plex-sans"
        type="text"
        id="query"
        name="query"
        placeholder="Search prompt"
        onChange={onTextChange}
      />
    </div>
  );
}
