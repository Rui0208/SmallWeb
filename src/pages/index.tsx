import ImageCarousel from '@/components/ImageCarousel';
import React, { useState, useEffect } from 'react';
import { AccordionDemo } from '@/components/Accordion';
import Profile from '@/components/Profile';
import Card from '@/components/Card';
import ResizableSlide from '@/components/ResizableSlide';
import SheetCat from '@/components/SheetCat';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { InputForm } from '@/components/InputForm';
import { Label } from '@/components/ui/label';
export default function Home() {
  return (
    <div className=" -z-10 relative h-[245vh] bg-neutral-100">
      <Image
        src={'/images/hua9.jpeg'}
        alt={'photo3'}
        width={1600}
        height={800}
        objectPosition="bottom"
        className="  h-[230vh]  w-[40vw]  object-cover  object-center  mt-[5rem] absolute top-[0vh] left-[0vw]  "
      />
      <Image
        src={'/images/oth2.jpeg'}
        alt={'photo3'}
        width={1600}
        height={800}
        objectPosition="bottom"
        className="  h-[60vh]  w-[50vw]  object-cover  object-center  mt-[10rem] absolute top-[20vh] right-[0vw] "
      />
      <Image
        src={'/images/hua16.jpeg'}
        alt={'photo3'}
        width={1600}
        height={800}
        objectPosition="bottom"
        className="  h-[60vh]  w-[50vw]  object-cover  object-center   absolute top-[99vh] right-[0vw] "
      />
      <Image
        src={'/images/oth3.jpeg'}
        alt={'photo3'}
        width={1600}
        height={800}
        objectPosition="bottom"
        className="  h-[60vh]  w-[50vw]  object-cover  object-center   absolute top-[158vh] right-[0vw] "
      />

      <div className=" absolute top-[50vh] z-10 left-[42vw] font-bold text-gray-900 text-[3rem] vertical-rl  text-upright">
        {'プレゼント'}
      </div>
      <div className="absolute top-[18vh] z-10 left-[48vw] font-bold text-gray-900 text-[2.5rem] ">
        {'にじゅうよんさい'}
      </div>
      <div className="absolute top-[24vh] z-10 left-[48vw] font-bold text-gray-900 text-[2.5rem] ">
        {'お誕生日おめでとう'}
      </div>
      <div className="absolute top-[15vh] z-10 right-[5vw] font-bold text-gray-900 text-[2.5rem] ">
        {'2024'}
      </div>
      <div className="absolute top-[20vh] z-10 right-[5.5vw] font-bold text-gray-900 text-[2.5rem] ">
        {'8月'}
      </div>
      <div className="absolute top-[25vh] z-10 right-[5vw] font-bold text-gray-900 text-[2.5rem] ">
        {'31日'}
      </div>
      <div className="absolute top-[130vh] z-10 left-[42vw] font-black text-gray-900 text-[2.5rem] rotate-12 vertical-rl  text-upright">
        {'気に入ってくれるといいな'}
      </div>
      <div className="absolute top-[100vh] z-10 left-[40vw] font-bold text-gray-900 text-[6rem]  rotate-12 vertical-rl  text-upright">
        {'夏'}
      </div>
      <div className="absolute top-[103vh] z-10 left-[48vw] font-bold text-gray-900 text-[3rem] rotate-12 vertical-rl  text-upright">
        {'なつ'}
      </div>
      <div className="absolute top-[222vh] z-10 right-[8vw] font-bold text-gray-900 text-[2rem]  ">
        {'たんじょうびにこころから'}
      </div>
      <div className="absolute top-[228vh] z-10 right-[20vw] font-bold text-gray-900 text-[2rem]  ">
        {'の'}
      </div>
      <div className="absolute top-[234vh] z-10 right-[9vw] font-bold text-gray-900 text-[2rem]  ">
        {'しゅくふくをおくります'}
      </div>

      <div className="-z-10 pt-[240vh]"></div>
      <div className=" -z-10  bg-sky-100">
        <Profile />
        <AccordionDemo />
        <ResizableSlide />
        <ImageCarousel />
        <SheetCat />
        <InputForm />
      </div>
    </div>
  );
}
