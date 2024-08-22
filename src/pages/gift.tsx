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

function VideoPlayer() {
  return (
    <video
      controls
      className="w-full max-w-xs rounded-lg shadow-lg"
    >
      <source src="/video/小隻24生日.mp4" type="video/mp4" />
      您的浏览器不支持视频标签。
    </video>
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
      <div className="p-6 bg-gradient-to-r from-pink-100 to-rose-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-rose-600 mb-8">生日禮物</h1>
        <CarouselDemo />
        <div className="mt-12 mb-12">
          <VideoPlayer />
        </div>
        <div className="mt-8 text-center space-y-3 bg-white bg-opacity-70 p-6 rounded-lg shadow-lg">
          {giftMessage.map((line, index) => (
            <p key={index} className="text-lg font-medium text-gray-800 leading-relaxed">{line}</p>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-pink-50 to-rose-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-rose-600 text-center mb-12">生日禮物</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[80vh] w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden"
          >
            <ResizablePanel defaultSize={60} className="bg-white">
              <div className="h-full flex flex-col items-center justify-center p-8 space-y-8">
                <CarouselDemo />
                <VideoPlayer />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={40} className="bg-rose-50">
              <div className="h-full flex flex-col items-center justify-center p-8 space-y-4">
                {giftMessage.map((line, index) => (
                  <p key={index} className="text-lg font-medium text-gray-800 text-center leading-relaxed">{line}</p>
                ))}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}
