import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import UIShellComponent from '../common-component/UIShellComponent';
import { elementBinder } from '../utils/ElementBinder';
import HomeActionGroupComponent from './components/groups/HomeActionGroupComponent';
import FilterGroupComponent from './components/groups/FilterGroupComponent';
import HomeContentComponent from './components/HomeContentComponent';

export default function HomePage(props) {
  const { transformedusername } = props;
  const username = transformedusername.replace(/[/]/g, '').replace(/[+]/g, ' ');

  const [receivedData, setReceivedData] = useState([]);
  const [showMeditationModal, setShowMeditationModal] = useState(false);
  const [showBreathingModal, setShowBreathingModal] = useState(false);

  useEffect(() => {
    const escListener = (event) => {
      if (showMeditationModal || showBreathingModal) {
        if (event.key === 'Escape') {
          setShowBreathingModal(false);
          setShowMeditationModal(false);
        }
      }
    };

    document.removeEventListener('keydown', escListener);
    document.addEventListener('keydown', escListener);
    return () => window.removeEventListener('keydown', escListener);
  }, [showMeditationModal, showBreathingModal]);

  const onSubmitFilter = (params) => {
    axios
      .get('/stubget', { params })
      .then(
        (response) => setReceivedData(Object.values(response.data)),
      );
  };

  return (
    <div className="relative min-w-full min-h-screen">
      <div
        id="modal-overlay"
        className={`absolute flex items-center justify-center z-10 w-full h-full bg-black/60 ${showMeditationModal || showBreathingModal ? 'block' : 'hidden'}`}
      >
        <div className="z-20 w-1/2 h-1/2 bg-white" />
      </div>
      <div className="flex overflow-x-clip flex-col items-center w-full min-h-screen bg-web-bg">
        <UIShellComponent username={username} />
        <div className="h-8" />
        <HomeActionGroupComponent
          onMeditationClick={() => setShowMeditationModal(true)}
          onBreathingClick={() => setShowMeditationModal(true)}
        />
        <div className="h-12" />
        <FilterGroupComponent
          itemName="Meditation"
          totalFound={18}
          onSubmitFilter={onSubmitFilter}
        />
        <div className="h-6" />
        <HomeContentComponent receivedData={receivedData} />
        <div className="h-12" />
      </div>
    </div>
  );
}

HomePage.propTypes = {
  transformedusername: PropTypes.string.isRequired,
};

elementBinder('home-view', <HomePage />);
