import { useMemo } from 'react';
import CommonButtonComponent from '../../../common-component/CommonButtonComponent';

interface Props {
  buttonCallback: () => void
}

export default function MainContent(props: Props) {
  const { buttonCallback } = props;

  const hspace = 'h-4 md:h-6 lg:h-8';

  const heading = useMemo(() => (
    <h1 className="text-[calc(1.5rem+2vw)] font-semibold leading-tight font-poppins">
      Bring
      {' '}
      <span className="text-sky-400">calmness</span>
      <br />
      to your
      {' '}
      <span className="text-orange-300">mind</span>
      .
    </h1>
  ), []);

  const content = useMemo(() => (
    <h2 className="col-start-1 col-end-9 text-[calc(0.4rem+1.5vw)] font-light leading-tight font-poppins">
      Habitual meditation can help reduce
      <br />
      anxiety and improve stress reactivity.
    </h2>
  ), []);

  return (
    <div className="w-full">
      {heading}
      <div className={hspace} />
      {content}
      <div className={hspace} />

      <CommonButtonComponent
        onClickCallback={buttonCallback}
        buttonType="primary"
        text="Get started"
        padding="p-3 pr-12 md:p-4 md:pr-20 lg:p-6 lg:pr-24"
        textSize="text-xl md:text-2xl lg:text-3xl"
      />
    </div>
  );
}
