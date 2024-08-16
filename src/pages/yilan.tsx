import Image from 'next/image';

export default function Yilan() {
  const photos = [
    { src: '/images/yi1.jpeg', description: 'Description for Photo 1' },
    { src: '/images/yi2.jpeg', description: 'Description for Photo 2' },
    { src: '/images/yi3.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi4.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi5.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi6.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi7.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi8.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi9.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi10.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi11.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi12.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi13.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi14.jpeg', description: 'Description for Photo 3' },
    { src: '/images/yi15.jpeg', description: 'Description for Photo 3' },
    // 更多照片...
  ];
  return (
    <div>
      <div className=" relative -z-20 h-[250vh] bg-amber-100 mt-[5rem]">
        <Image
          src={photos[5].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[55vh]  w-[65vw]   object-cover  object-bottom  absolute left-[15vw] top-[5rem]   "
        />
        <Image
          src={photos[1].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[25vw]   object-cover  object-bottom  absolute left-[10vw] top-[80vh]   "
        />
        <Image
          src={photos[0].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[25vw]   object-cover  object-bottom  absolute left-[36vw] top-[80vh]   "
        />
        <div className="absolute text-[2.25rem]   font-bold  text-gray-600 top-[105vh] right-[5rem] ">
          February.19 ~ February.20
        </div>
        <div className="absolute text-[5rem]   font-bold  text-gray-600 top-[115vh] right-[10rem] ">
          YILAN
        </div>
        <Image
          src={photos[14].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[80vh]  w-[45vw]   object-cover  object-bottom  absolute right-[0] bottom-[10vh]   "
        />
        <Image
          src={photos[9].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[50vh]  w-[25vw]   object-cover  object-bottom  absolute left-[33vw] bottom-[20vh]   "
        />
        <Image
          src={photos[11].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[50vh]  w-[25vw]   object-cover  object-bottom  absolute left-[7vw] bottom-[20vh]   "
        />
        <div className="absolute text-[3rem]   font-bold  text-gray-600 left-[10vw] bottom-[95vh] ">
          Spring is as warm as your smile
        </div>
        <div className="absolute text-[4rem]   font-bold  text-gray-600 left-[10vw] bottom-[80vh] ">
          卡皮巴拉! ! !
        </div>
      </div>
      <div className=" relative -z-20 h-[270vh] bg-amber-100 ">
        <div className="flex justify-center  gap-4">
          <Image
            src={photos[6].src}
            alt={'photo1'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className=" h-[60vh]  w-[24vw]  object-cover rounded-lg object-bottom  "
          />
          <Image
            src={photos[7].src}
            alt={'photo1'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className=" h-[60vh]  w-[24vw]  object-cover rounded-lg object-center  "
          />
          <Image
            src={photos[8].src}
            alt={'photo1'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className=" h-[60vh]  w-[24vw]  object-cover rounded-lg object-bottom  "
          />
        </div>
        <Image
          src={photos[4].src}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[50vh]  w-[full]  object-cover  object-center  mt-[5rem]"
        />
        <Image
          src={photos[13].src}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[90vh]  w-[40vw]  object-cover absolute object-center left-[5vw] bottom-[35vh]"
        />
        <Image
          src={photos[2].src}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[60vh]  w-[25vw]  object-cover absolute object-center right-[3vw] bottom-[45vh]"
        />
        <Image
          src={photos[3].src}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[40vh]  w-[18vw]  object-cover absolute object-center right-[22vw] bottom-[2vh]"
        />
        <div className="absolute text-[5rem]   font-bold -z-10 text-gray-600 right-[20vw] bottom-[98vh] ">
          LOVE YOU
        </div>
        <div className="absolute text-[5rem]   font-bold -z-10 text-gray-600 right-[30vw] bottom-[65vh] vertical-rl ">
          L Y T
        </div>
        <div className="absolute text-[2.25rem]   font-bold  text-gray-600 left-[10vw] bottom-[20vh] ">
          ⏰ is very good
        </div>
        <div className="absolute text-[2.25rem]   font-bold  text-gray-600 left-[10vw] bottom-[14vh] ">
          {" Let's go again next time"}
        </div>
      </div>
    </div>
  );
}
