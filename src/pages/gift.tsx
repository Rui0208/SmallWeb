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
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';

const photos = [
  { src: '/images/cat1.jpeg', description: 'Description for Photo 1' },
  { src: '/images/cat2.jpeg', description: 'Description for Photo 2' },
  { src: '/images/gift1.jpeg', description: 'Description for Photo 3' },
  { src: '/images/gift2.jpeg', description: 'Description for Photo 4' },
  { src: '/images/gift3.jpeg', description: 'Description for Photo 5' },
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    src={photos[index].src}
                    alt="gift"
                    width={600}
                    height={500}
                    className="h-[45vh] w-[60vw] object-cover object-center"
                  />
                </CardContent>
              </Card>
            </div>
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
      <div className="p-4 bg-rose-100">
        <CarouselDemo />
        <div className="mt-8 text-center">
          <p>登登登！</p>
          <p>防雷阿貓</p>
          <p>雖然感覺妳早就猜到了</p>
          <p>前幾個禮拜在市集還突然趁我不在又買2條項鍊</p>
          <p>哭了都</p>
          <p>就是看在GQ展的時候 妳好像很想要 就想說送這個好了</p>
          <p>在想要送哪一款還問了藍藍</p>
          <p>還記得妳高中朋友也有一條但是忘記長怎樣</p>
          <p>底片洗出來才發現 買到一樣的了</p>
          <p>但還是希望妳會喜歡</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center mt-[5rem]">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[750px] min-w-[100vw] max-w-md rounded-lg border ange-400 bg-rose-100"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              <CarouselDemo />
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="">
              <p>登登登！</p>
              <p>防雷阿貓</p>
              <p>雖然感覺妳早就猜到了</p>
              <p>前幾個禮拜在市集還突然趁我不在又買2條項鍊</p>
              <p>哭了都</p>
              <p>就是看在GQ展的時候 妳好像很想要 就想說送這個好了</p>
              <p>在想要送哪一款還問了藍藍</p>
              <p>還記得妳高中朋友也有一條但是忘記長怎樣</p>
              <p>底片洗出來才發現 買到一樣的了</p>
              <p>但還是希望妳會喜歡</p>
            </span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
