import { useRouter } from 'next/router';
import Card from './Card';

export default function Nav() {
  const router = useRouter();

  return (
    <div>
      <nav className="z-100 opacity-70">
        <ul className=" z-100 flex justify-around border-b-4  min-h-[10vh] font-bold shadow-lg bg-gray-100 w-[100%] items-center fixed left-0  top-0 z-10">
          <li
            className=" z-100 text-4xl text-blue-400  cursor-pointer hover:text-blue-700"
            onClick={() => router.push('/')}
          >
            Small BirthDay
          </li>
          <li>
            <Card />
          </li>
          <li
            className="z-100 text-2xl   ml-[10rem] cursor-pointer hover:text-green-700"
            onClick={() => router.push('/yilan')}
          >
            宜蘭
          </li>
          <li
            className=" z-100 text-2xl    cursor-pointer hover:text-yellow-700"
            onClick={() => router.push('tainan')}
          >
            台南
          </li>
          <li
            className=" z-100 text-2xl   cursor-pointer hover:text-red-700"
            onClick={() => router.push('/hua')}
          >
            花蓮
          </li>
        </ul>
      </nav>
    </div>
  );
}
