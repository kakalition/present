import AddButtonComponent from '../AddButtonComponent';
import SearchBarComponent from '../SearchBarComponent';

export default function HomeActionGroupComponent() {
  return (
    <div className="flex flex-row items-center px-16 w-full h-[8%]">
      <div className="basis-1/2 h-full"><SearchBarComponent /></div>
      <div className="w-8" />
      <div className="basis-1/4 h-full"><AddButtonComponent text="New Meditation" background="bg-gradient-to-bl from-blue-700 to-sky-400" clickCallback={() => {}} fillSpace /></div>
      <div className="w-8" />
      <div className="basis-1/4 h-full"><AddButtonComponent text="New Breathing Exercise" background="bg-gradient-to-bl from-orange-600 to-orange-300" clickCallback={() => {}} fillSpace /></div>
    </div>
  );
}
