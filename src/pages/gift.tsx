import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Image from 'next/image';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

const photos = [
  { src: '/images/cat1.jpeg', description: '照片1描述' },
  { src: '/images/cat2.jpeg', description: '照片2描述' },
  { src: '/images/gift1.jpeg', description: '照片3描述' },
  { src: '/images/gift2.jpeg', description: '照片4描述' },
  { src: '/images/gift3.jpeg', description: '照片5描述' },
];

function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {photos.map((photo, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="p-1 aspect-square flex items-center justify-center">
                <Image
                  src={photo.src}
                  alt={`礼物照片 ${index + 1}`}
                  width={600}
                  height={500}
                  className="object-cover w-full h-full rounded-lg"
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function ResizableSlide() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const giftMessage = [
    "登登登！",
    "防雷阿貓",
    "雖然感覺妳早就猜到了",
    "前幾個禮拜在市集還突然趁我不在又買2條項鍊",
    "哭了都",
    "就是看在GQ展的時候 妳好像很想要 就想說送這個好了",
    "在想要送哪一款還問了藍藍",
    "還記得妳高中朋友也有一條但是忘記長怎樣",
    "底片洗出來才發現 買到一樣的了",
    "但還是希望妳會喜歡"
  ];

  if (isMobile) {
    return (
      <div className="p-6 bg-rose-100 min-h-screen flex flex-col items-center justify-center">
        <CarouselDemo />
        <div className="mt-8 text-center space-y-2">
          {giftMessage.map((line, index) => (
            <p key={index} className="text-lg font-medium text-gray-800">{line}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-rose-50 p-8">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[80vh] w-full max-w-6xl rounded-xl shadow-lg overflow-hidden"
      >
        <ResizablePanel defaultSize={60} className="bg-white">
          <div className="h-full flex items-center justify-center p-8">
            <CarouselDemo />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40} className="bg-rose-100">
          <div className="h-full flex flex-col items-center justify-center p-8 space-y-4">
            {giftMessage.map((line, index) => (
              <p key={index} className="text-lg font-medium text-gray-800 text-center">{line}</p>
            ))}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
