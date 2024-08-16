import { useRouter } from 'next/router';
import Card from './Card';
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Nav() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div>
      <nav className="z-50">
        {isMobile ? (
          <div className="border-b-2 min-h-[8vh] font-bold shadow-md bg-gray-100 w-full fixed left-0 top-0 z-50">
            <div className="flex justify-between items-center px-4 py-2">
              <span
                className="text-xl text-blue-400 cursor-pointer hover:text-blue-700"
                onClick={() => router.push('/')}
              >
                Small BirthDay
              </span>
              <Menu onClick={toggleMenu} className="cursor-pointer w-6 h-6" />
            </div>
            {isMenuOpen && (
              <ul className="flex flex-col items-center py-2 bg-gray-100 z-50">
                <li className="my-1">
                  <Card />
                </li>
                <li
                  className="text-lg cursor-pointer hover:text-green-700 my-1"
                  onClick={() => router.push('/yilan')}
                >
                  宜蘭
                </li>
                <li
                  className="text-lg cursor-pointer hover:text-yellow-700 my-1"
                  onClick={() => router.push('tainan')}
                >
                  台南
                </li>
                <li
                  className="text-lg cursor-pointer hover:text-red-700 my-1"
                  onClick={() => router.push('/hua')}
                >
                  花蓮
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex justify-around border-b-4 min-h-[10vh] font-bold shadow-lg bg-gray-100 w-[100%] items-center fixed left-0 top-0 z-50">
            <li
              className="text-4xl text-blue-400 cursor-pointer hover:text-blue-700"
              onClick={() => router.push('/')}
            >
              Small BirthDay
            </li>
            <li>
              <Card />
            </li>
            <li
              className="text-2xl ml-[1rem] cursor-pointer hover:text-green-700"
              onClick={() => router.push('/yilan')}
            >
              宜蘭
            </li>
            <li
              className="text-2xl cursor-pointer hover:text-yellow-700"
              onClick={() => router.push('tainan')}
            >
              台南
            </li>
            <li
              className="text-2xl cursor-pointer hover:text-red-700"
              onClick={() => router.push('/hua')}
            >
              花蓮
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}
