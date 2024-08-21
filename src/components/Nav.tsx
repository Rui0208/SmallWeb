import { useRouter } from 'next/router';
import Card from './Card';
import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import BirthdayCountdown from './BirthdayCountdown';
import MusicPlayer from './MusicPlayer';
import { Url } from 'next/dist/shared/lib/router/router';

export default function Nav() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCardOpen(true);
    setIsMenuOpen(true);
  };

  const handleNavClick = (path: Url) => {
    if (path !== router.pathname) {
      router.push(path);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="font-sans">
      <nav className="z-50" ref={navRef}>
        {isMobile ? (
          <div className="border-b-2 min-h-[5vh] font-bold shadow-md bg-white w-full fixed left-0 top-0 z-50">
            <div className="flex justify-between items-center px-4 py-2">
              <span
                className="text-xl text-gray-800 cursor-pointer hover:text-gray-600 transition duration-300"
                onClick={() => handleNavClick('/')}
              >
                Small BirthDay
              </span>
              <span><MusicPlayer/></span>
              <Menu onClick={toggleMenu} className="cursor-pointer w-6 h-6 text-gray-800 hover:text-gray-600 transition duration-300" />
            </div>
            {isMenuOpen && (
              <ul className="flex flex-col items-center py-2 bg-white z-50 rounded-b-lg shadow-lg">
                <li className="my-2">
                  <div onClick={handleCardClick} className="card-trigger">
                    <Card />
                  </div>
                </li>
                <li
                  className="text-lg cursor-pointer hover:text-gray-600 my-2 border-b-2 border-gray-200 pb-1 transition duration-300"
                  onClick={() => handleNavClick('/yilan')}
                >
                  宜蘭
                </li>
                <li
                  className="text-lg cursor-pointer hover:text-gray-600 my-2 border-b-2 border-gray-200 pb-1 transition duration-300"
                  onClick={() => handleNavClick('/tainan')}
                >
                  台南
                </li>
                <li
                  className="text-lg cursor-pointer hover:text-gray-600 my-2 border-b-2 border-gray-200 pb-1 transition duration-300"
                  onClick={() => handleNavClick('/hua')}
                >
                  花蓮
                </li>
                <li className="my-2">
                  <BirthdayCountdown />
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex justify-around border-b-4 min-h-[10vh] font-bold shadow-lg bg-white w-[100%] items-center fixed left-0 top-0 z-50">
            <li
              className="text-4xl text-gray-800 cursor-pointer hover:text-gray-600 transition duration-300"
              onClick={() => handleNavClick('/')}
            >
              Small BirthDay
            </li>
            <li>
              <div onClick={handleCardClick} className="card-trigger">
                <Card />
              </div>
            </li>
            <li>
              <BirthdayCountdown />
            </li>
            <li>
              <MusicPlayer />
            </li>
            <li
              className="text-2xl ml-[1rem] cursor-pointer hover:text-gray-600 transition duration-300"
              onClick={() => handleNavClick('/yilan')}
            >
              宜蘭
            </li>
            <li
              className="text-2xl cursor-pointer hover:text-gray-600 transition duration-300"
              onClick={() => handleNavClick('/tainan')}
            >
              台南
            </li>
            <li
              className="text-2xl cursor-pointer hover:text-gray-600 transition duration-300"
              onClick={() => handleNavClick('/hua')}
            >
              花蓮
            </li>
          </ul>
        )}
      </nav>
      {isCardOpen && <Card />}
    </div>
  );
}
