import { StrictMode } from 'react';
import { useNavigate } from 'react-router-dom';
import MainContent from './components/MainContent';
import WelcomeHeader from './components/WelcomeHeader';

export default function WelcomePage() {
  const navigateTo = useNavigate();
  const navigateToRegister = () => { navigateTo('/register'); };
  const navigateToLogin = () => { navigateTo('/login'); };

  return (
    <StrictMode>
      <div
        className="grid overflow-x-hidden grid-cols-4 grid-rows-6 gap-2 px-[2rem] pt-[1rem] w-screen min-h-screen md:grid-cols-8
        md:gap-3 md:px-[4rem] md:pt-[2rem] lg:grid-cols-12
          lg:gap-4 lg:px-[6rem] lg:pt-[3rem] bg-web-bg"
      >
        <div className="col-start-1 col-end-13">
          <WelcomeHeader buttonCallback={navigateToLogin} />
        </div>
        <div
          className="col-start-1 col-end-13 row-start-2 row-end-4 self-center
            lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:row-end-6"
        >
          <MainContent buttonCallback={navigateToRegister} />
        </div>
        <div
          className="-right-36 relative bottom-8 col-start-1 col-end-5 row-start-4 row-end-7 self-center
            md:-right-36 md:bottom-8 md:col-start-4 md:col-end-8 md:row-start-4 md:row-end-7
            lg:-right-72 lg:bottom-2 lg:col-start-7 lg:col-end-13 lg:row-start-2 lg:row-end-6"
        >
          <img
            className="scale-[1.4] sm:scale-[1] md:scale-[1.7] lg:scale-[1.3]"
            src="http://localhost/storage/illustrations/meditation.svg"
            alt="Meditating woman illustration"
          />
        </div>
      </div>
    </StrictMode>
  );
}
