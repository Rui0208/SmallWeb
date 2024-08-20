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
    <div className=" from-blue-100 to-pink-100 py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-600 pt-[5rem]">
        壽星介紹
      </h2>
      <div className={`container mx-auto ${isMobile ? 'px-4' : 'px-0'}`}>
        <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center items-start'} gap-10`}>
          <Avatar className={`${isMobile ? 'w-48 h-48' : 'w-64 h-64'} rounded-full shadow-lg`}>
            <AvatarImage src="/images/yi15.jpeg" alt="林小隻" className="object-cover" />
            <AvatarFallback className="bg-blue-200 text-blue-600">LYT</AvatarFallback>
          </Avatar>
          <div className={`bg-white rounded-lg shadow-md p-6 ${isMobile ? 'w-full' : 'w-1/2'}`}>
            <ul className="space-y-3 text-gray-700">
              <li><span className="font-semibold text-blue-600">姓名：</span>林小隻</li>
              <li><span className="font-semibold text-blue-600">代號：</span>LYT</li>
              <li><span className="font-semibold text-blue-600">生日：</span>2000/8/31</li>
              <li><span className="font-semibold text-blue-600">性格：</span>活潑、開朗、漂亮、可愛、善良、認真、細心、優雅、聰明</li>
              <li><span className="font-semibold text-blue-600">忌口：</span>紅蘿蔔、黑木耳、骨頭、金珍菇、羊肉</li>
              <li><span className="font-semibold text-blue-600">愛物：</span>飾品、服裝、香水</li>
              <li><span className="font-semibold text-blue-600">特殊技能：</span>嗅覺靈敏、夾粉刺</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
