import { useState } from 'react';

type Props = { id: string, label: string}

export default function SingleSliderComponent({ id, label }: Props) {
  const [value, setValue] = useState(0);

  const onInputChange = (e) => {
    const inputValue = e.currentTarget.value;
    if (inputValue < 0) setValue(0);
    else if (inputValue > 60) setValue(60);
    else setValue(inputValue);
  };

  return (
    <label
      className="font-ibm-plex-sans text-base text-slate-800 md:text-lg"
      htmlFor={id}
    >
      {label}
      <div className="flex flex-row items-center">
        <p>0</p>
        <div className="w-2" />
        <input
          className="w-[92%] h-1 bg-black appearance-none"
          name={id}
          type="range"
          min="0"
          max="60"
          value={value}
          onChange={(event) => setValue(parseInt(event.currentTarget.value, 10))}
        />
        <div className="w-2" />
        <p>60</p>
        <div className="w-4" />
        <input
          className="w-[8%] bg-slate-100 border-2 border-b-slate-600"
          min={0}
          max={60}
          type="number"
          value={value}
          onChange={onInputChange}
        />
      </div>
    </label>
  );
}
