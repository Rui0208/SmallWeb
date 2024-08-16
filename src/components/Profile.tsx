import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState, useEffect } from 'react';

export default function Profile() {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <div>
      <p className="text-2xl font-bold flex justify-center items-center my-6 text-blue-300 pt-[5rem]">
        壽星介紹
      </p>
      {isMobile ? (
        <div className="flex flex-col items-center gap-6">
          <Avatar className="w-[12rem] h-[12rem]">
            <AvatarImage src="/images/yi15.jpeg" />
            <AvatarFallback>大美女</AvatarFallback>
          </Avatar>
          <div>
            <ul className="text-center">
              <li>姓名:林小隻</li>
              <li>代號:LYT</li>
              <li>生日:2000/8/31</li>
              <li>性格：活潑、開朗、漂亮、可愛、善良、認真、細心、優雅、聰明</li>
              <li>忌口：紅蘿蔔、黑木耳、骨頭、金珍菇、羊肉</li>
              <li>愛物：飾品、服裝、香水</li>
              <li>特殊技能:嗅覺靈敏、夾粉刺</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-10 ">
          <Avatar className="w-[15rem] h-[15rem]">
            <AvatarImage src="/images/yi15.jpeg" />
            <AvatarFallback>大美女</AvatarFallback>
          </Avatar>
          <div>
            <ul>
              <li>姓名:林小隻</li>
              <li>代號:LYT</li>
              <li>生日:2000/8/31</li>
              <li>性格：活潑、開朗、漂亮、可愛、善良、認真、細心、優雅、聰明</li>
              <li>忌口：紅蘿蔔、黑木耳、骨頭、金珍菇、羊肉</li>
              <li>愛物：飾品、服裝、香水</li>
              <li>特殊技能:嗅覺靈敏、夾粉刺</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
