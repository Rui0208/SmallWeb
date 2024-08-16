import Image from 'next/image';

export default function Yilan() {
  const photos = [
    { src: '/images/hua1.jpeg', description: 'Description for Photo 1' },
    { src: '/images/hua2.jpeg', description: 'Description for Photo 2' },
    { src: '/images/hua3.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua4.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua5.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua6.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua7.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua8.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua9.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua10.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua11.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua12.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua13.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua14.jpeg', description: 'Description for Photo 3' },
    { src: '/images/hua15.jpeg', description: 'Description for Photo 3' },
    // 更多照片...
  ];
  return (
    <div>
      <div className=" relative -z-20 h-min-[75vh] ">
        <div className="absolute text-white p-4 text-xl font-bold ">07</div>
        <div className="absolute text-white p-4 text-xl font-bold right-[50%]">
          SUMMER
        </div>
        <div className="absolute text-white p-4 text-xl font-bold  right-0">
          LYT
        </div>
        <div className="absolute text-white p-4 text-xl font-bold  bottom-0">
          07
        </div>
        <div className="absolute text-white p-4 text-xl font-bold right-[50%] bottom-0">
          SUMMER
        </div>
        <div className="absolute text-white p-4 text-xl font-bold  right-0 bottom-0">
          LYT
        </div>
        <div className="absolute text-white p-4 text-[10rem] font-bold  left-10 bottom-10">
          Hualien
        </div>

        <Image
          src={photos[11].src}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[70vh]  w-full  object-cover  object-bottom mt-[5rem] "
        />
        <Image
          src={photos[10].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[70vh]  w-[30vw]  object-cover  object-bottom mt-[5rem]  absolute bottom-[-20rem] right-[8rem] "
        />
      </div>
      <div className=" -z-30 relative h-[140vh] w-full bg-blue-100">
        <div className="absolute  text-black p-4 text-[1rem] font-bold  left-[10vw] bottom-[31vh]">
          Happy BirthDay
        </div>
        <div className="absolute text-black p-4 text-[1rem] font-bold  left-[10vw] bottom-[28vh]">
          {"You're so beautiful"}
        </div>
        <div className="absolute text-black p-4 text-[1.25rem] font-bold  left-[52vw] bottom-[30vh]">
          Hualien
        </div>

        <Image
          src={photos[2].src}
          alt={'photo2'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[24vw]  object-cover  object-bottom mt-[5rem]  absolute top-[32vh] left-[11vw] "
        />
        <Image
          src={photos[13].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[24vw]  object-cover  object-bottom mt-[5rem]  absolute top-[32vh] left-[36vw] "
        />
        <Image
          src={photos[8].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[55vh]  w-[24vw]  object-cover  object-bottom mt-[5rem]  absolute bottom-[30vh] right-[0vw] "
        />
      </div>
      <div className=" -z-10 relative h-[200vh] w-full bg-green-50">
        <div className="absolute text-white p-4 text-[5rem] font-bold z-10 left-[39vw] top-[42vh]">
          Hualien
        </div>
        <div className="absolute text-black p-4 text-[1rem] font-bold z-10 left-[12vw] top-[63vh] vertical-rl ">
          Beacuse of you
        </div>
        <div className="absolute text-black p-4 text-[1rem] font-bold z-10 left-[10.5vw] top-[55vh] vertical-rl ">
          every day is a good day
        </div>
        <div className="absolute text-black p-4 text-[1rem] font-bold z-10 right-[12vw] top-[25vh] vertical-rl ">
          Beacuse of you
        </div>
        <div className="absolute text-black p-4 text-[1rem] font-bold z-10 right-[10.5vw] top-[25vh] vertical-rl ">
          every day is a good day
        </div>
        <Image
          src={photos[4].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[53vh]  w-[22vw]  object-cover  object-bottom mt-[5rem]  absolute top-[16vh] left-[16vw] "
        />
        <Image
          src={photos[7].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[53vh]  w-[22vw]  object-cover  object-bottom mt-[5rem]  absolute top-[16vh] left-[38.5vw] "
        />
        <Image
          src={photos[9].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[53vh]  w-[22vw]  object-cover  object-bottom mt-[5rem]  absolute top-[16vh] right-[16vw] "
        />
        <Image
          src={photos[9].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[53vh]  w-[22vw]  object-cover  object-bottom mt-[5rem]  absolute top-[16vh] right-[16vw] "
        />
        <Image
          src={photos[5].src}
          alt={'photo3'}
          // layout="responsive"
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[70vh]  w-[90vw]  object-cover  object-bottom absolute bottom-[20vh] left-[5vw] "
        />
        <div className="absolute text-orange-300 p-4 text-[9rem] font-bold  left-[8rem] bottom-[20vh]">
          Hualien
        </div>
      </div>
    </div>
  );
}
