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
    <div className="relative min-h-screen bg-neutral-100 -z-10">
      {/* 电脑版布局 */}
      <div className="hidden md:block h-[245vh]">
        <Image
          src={'/images/hua9.jpeg'}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="h-[230vh] w-[40vw] object-cover object-center mt-[5rem] absolute top-[0vh] left-[0vw]"
        />
        <Image
          src={'/images/oth2.jpeg'}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="h-[60vh] w-[50vw] object-cover object-center mt-[10rem] absolute top-[20vh] right-[0vw]"
        />
        <Image
          src={'/images/hua16.jpeg'}
          alt={'photo3'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="h-[60vh] w-[50vw] object-cover object-center absolute top-[99vh] right-[0vw]"
        />
        <Image
          src={'/images/oth3.jpeg'}
          alt={'photo4'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="h-[60vh] w-[50vw] object-cover object-center absolute top-[158vh] right-[0vw]"
        />

        {/* 电脑版文字部分 */}
        <div className="absolute top-[50vh] z-10 left-[42vw] font-bold text-gray-900 text-[3rem] vertical-rl text-upright">
          プレゼント
        </div>
        <div className="absolute top-[18vh] z-10 left-[48vw] font-bold text-gray-900 text-[2.5rem]">
          にじゅうよんさい
        </div>
        <div className="absolute top-[24vh] z-10 left-[48vw] font-bold text-gray-900 text-[2.5rem]">
          お誕生日おめでとう
        </div>
        <div className="absolute top-[15vh] z-10 right-[5vw] font-bold text-gray-900 text-[2.5rem]">
          2024
        </div>
        <div className="absolute top-[20vh] z-10 right-[5.5vw] font-bold text-gray-900 text-[2.5rem]">
          8月
        </div>
        <div className="absolute top-[25vh] z-10 right-[5vw] font-bold text-gray-900 text-[2.5rem]">
          31日
        </div>
        <div className="absolute top-[130vh] z-10 left-[42vw] font-black text-gray-900 text-[2.5rem] rotate-12 vertical-rl text-upright">
          気に入ってくれるといいな
        </div>
        <div className="absolute top-[100vh] z-10 left-[40vw] font-bold text-gray-900 text-[6rem] rotate-12 vertical-rl text-upright">
          夏
        </div>
        <div className="absolute top-[103vh] z-10 left-[48vw] font-bold text-gray-900 text-[3rem] rotate-12 vertical-rl text-upright">
          なつ
        </div>
        <div className="absolute top-[222vh] z-10 right-[8vw] font-bold text-gray-900 text-[2rem]">
          たんじょうびにこころから
        </div>
        <div className="absolute top-[228vh] z-10 right-[20vw] font-bold text-gray-900 text-[2rem]">
          の
        </div>
        <div className="absolute top-[234vh] z-10 right-[9vw] font-bold text-gray-900 text-[2rem]">
          しゅくふくをおくります
        </div>
      </div>

      {/* 移动版布局 */}
      <div className="md:hidden">
        <div className="grid grid-cols-1 gap-4 p-4">
          <Image
            src={'/images/hua9.jpeg'}
            alt={'photo1'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className="w-full h-[50vh] object-cover"
          />
          <Image
            src={'/images/oth2.jpeg'}
            alt={'photo2'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className="w-full h-[50vh] object-cover"
          />
          <Image
            src={'/images/hua16.jpeg'}
            alt={'photo3'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className="w-full h-[50vh] object-cover"
          />
          <Image
            src={'/images/oth3.jpeg'}
            alt={'photo4'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className="w-full h-[50vh] object-cover"
          />
        </div>

        {/* 移动版文字部分 */}
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">プレゼント</h1>
          <p className="text-2xl font-bold text-gray-900 mb-2">
            にじゅうよんさい
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-4">
            お誕生日おめでとう
          </p>
          <div className="flex justify-center space-x-4 text-xl font-bold text-gray-900">
            <span>2024</span>
            <span>8月</span>
            <span>31日</span>
          </div>
        </div>
        <div className="text-center my-8">
          <p className="text-2xl font-black text-gray-900 mb-4">
            気に入ってくれるといいな
          </p>
          <p className="text-5xl font-bold text-gray-900 mb-2">夏</p>
          <p className="text-3xl font-bold text-gray-900">なつ</p>
        </div>
        <div className="text-center my-8">
          <p className="text-xl font-bold text-gray-900 mb-2">
            たんじょうびにこころから
          </p>
          <p className="text-xl font-bold text-gray-900 mb-2">の</p>
          <p className="text-xl font-bold text-gray-900">
            しゅくふくをおくります
          </p>
        </div>
      </div>

      {/* 共用组件部分 */}
      <div className="bg-sky-100 p-4">
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
