import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ResizableSlide() {
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

  if (isMobile) {
    return (
      <div className="flex flex-col items-center mt-10 p-4">
        <Image
          className="w-full h-auto mb-4"
          src={'/images/5.jpeg'}
          alt="small"
          width={400}
          height={400}
        />
        <div className="text-center">
          <p className="font-semibold mb-2">Happy BirthDay</p>
          <p className="mb-2">小隻生日快樂</p>
          <p className="mb-2">今天是2024年8月31日</p>
          <p className="mb-2">妳的生日</p>
          <p className="mb-2">手寫的卡片我沒有寫字太醜惹，但我做了一個網頁要送給妳</p>
          <p className="mb-2">利用上班時間做的嘿嘿，也做了滿久的</p>
          <p>希望妳會喜歡</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-10">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[400px] min-w-[80vw] max-w-md rounded-lg border border-orange-400"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              <Image
                className="w-[60vw] h-[400px]"
                src={'/images/5.jpeg'}
                alt="small"
                width={400}
                height={400}
              />
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              <p>Happy BirthDay</p>
              <p>小隻生日快樂</p>
              <p>今天是2024年8月31日</p>
              <p>妳的生日</p>
              <p>手寫的卡片我沒有寫字太醜惹，但我做了一個網頁要送給妳</p>
              <p>利用上班時間做的嘿嘿，也做了滿久的</p>
              <p>希望妳會喜歡</p>
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
