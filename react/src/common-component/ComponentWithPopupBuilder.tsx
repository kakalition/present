import React from 'react';
import usePopupAddon from '../utils/hooks/usePopupAddon';

type Params = {
  afterHideCallback?: (() => void) | null,
  alignClass: string,
  fromY: string,
  id: string,
  mainComponent: (animationCallback: () => void) => JSX.Element,
  popupComponent: () => JSX.Element,
  toY: string,
};

export default function ComponentWithPopupBuilder({
  id, mainComponent, popupComponent, alignClass, fromY, toY, afterHideCallback = null,
}: Params) {
  // eslint-disable-next-line max-len
  const [animationCallback, popupClass]: [() => void, string] = usePopupAddon(id, fromY, toY, afterHideCallback);

  return (
    <div className={`flex relative flex-col ${alignClass}`}>
      {mainComponent(animationCallback)}
      <div id={id} className={popupClass}>
        {popupComponent()}
      </div>
    </div>
  );
}
