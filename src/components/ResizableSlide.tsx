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
      <div className="mt-10 p-4">
        <Image
          className="w-full h-auto mb-4"
          src={'/images/5.jpeg'}
          alt="small"
          width={400}
          height={400}
        />
        <div>
          <p className="font-semibold mb-2">生日快樂</p>
          <p className="mb-2">小隻生日快樂</p>
          <p className="mb-2">今天是2024年8月31日</p>
          <p className="mb-2">妳的生日</p>
          <p className="mb-2">做了一個網頁要送給妳</p>
          <p className="mb-2">利用上班時間做的，也做了滿久的</p>
          <p>希望妳會喜歡</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[400px] max-w-4xl mx-auto border border-gray-300"
      >
        <ResizablePanel defaultSize={60}>
          <div className="h-full flex items-center justify-center p-4">
            <Image
              className="w-full h-auto"
              src={'/images/5.jpeg'}
              alt="small"
              width={400}
              height={400}
            />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={40}>
          <div className="h-full flex items-center p-4">
            <div>
              <p className="font-semibold mb-2">Happy BirthDay</p>
              <p className="mb-2">小隻生日快樂</p>
              <p className="mb-2">今天是2024年8月31日</p>
              <p className="mb-2">妳的生日</p>
              <p className="mb-2">我做了一個網頁要送給妳</p>
              <p className="mb-2">利用上班時間做，也做了滿久的</p>
              <p>希望妳會喜歡</p>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
