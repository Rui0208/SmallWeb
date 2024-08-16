import Image from 'next/image';

export default function Yilan() {
  const photos = [
    { src: '/images/nan1.jpeg', description: 'Description for Photo 1' },
    { src: '/images/nan2.jpeg', description: 'Description for Photo 2' },
    { src: '/images/nan3.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan4.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan5.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan6.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan7.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan8.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan9.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan10.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan11.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan12.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan13.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan14.jpeg', description: 'Description for Photo 3' },
    { src: '/images/nan15.jpeg', description: 'Description for Photo 3' },
  ];
  return (
    <div>
      <div className=" relative -z-20 h-min-[75vh] flex ">
        <div className="relative z-10 h-[75vh] w-[50vw] bg-rose-100  mt-[5rem]">
          <Image
            src={photos[1].src}
            alt={'photo2'}
            width={1600}
            height={800}
            objectPosition="bottom"
            className="  h-[40vh]  w-[20vw]  object-cover  object-bottom mt-[5rem]  absolute bottom-[10rem] right-[14rem] "
          />
          <div className="absolute text-[5rem]  text-white font-bold  bottom-[6rem] right-[10rem]">
            Tainan
          </div>
          <div className="absolute text-[1rem]   font-bold  top-[4rem] right-[5rem] vertical-rl">
            You look absolutely radiant
          </div>
          <div className="absolute text-[4rem]   font-bold text-white  top-[5rem] left-[5rem] ">
            Happy BirthDay
          </div>
          <div className="absolute text-[1.25rem]   font-bold  bottom-[4rem] left-[6rem] ">
            2024 04
          </div>
          <div className="absolute text-[1.25rem]   font-bold  bottom-[4rem] right-[6rem] s ">
            LYT
          </div>
        </div>
        <Image
          src={photos[3].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[75vh]  w-[50vw]  object-cover  object-bottom mt-[5rem]   "
        />
      </div>
      <div className=" relative -z-20 h-[200vh]  bg-slate-200">
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  top-[41vh] right-[42vw] ">
          ___________________
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  top-[45vh] right-[45vw] ">
          You have
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  top-[48vh] right-[45vw] ">
          such a
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  top-[51vh] right-[45vw] ">
          lovely presence
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  top-[55vh] right-[42vw] ">
          ___________________
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  bottom-[23vh] right-[42vw] vertical-rl">
          THE NICE SUNSET
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  bottom-[100vh] left-[12vw] ">
          Twentyfour
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  bottom-[101vh] left-[21vw] ">
          _________________
        </div>
        <div className="absolute text-[1.5rem]  text-slate-400 font-bold  bottom-[100vh] left-[35vw] ">
          24Year
        </div>
        <Image
          src={photos[8].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[25vw]  object-cover absolute object-bottom left-[13rem] top-[10rem]   "
        />
        <Image
          src={photos[12].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[25vw]  object-cover absolute object-bottom right-[13rem] top-[10rem]   "
        />
        <Image
          src={photos[9].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[25vw]  object-cover absolute object-bottom right-[13rem] bottom-[10rem]   "
        />
        <Image
          src={photos[11].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[60vh]  w-[25vw]  object-cover absolute object-bottom left-[13rem] bottom-[10rem]   "
        />
        <Image
          src={photos[5].src}
          alt={'photo2'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className="  h-[48vh]  w-[20vw]  object-cover absolute object-bottom right-[30rem] bottom-[30rem]   "
        />
      </div>
      <div className="relative">
        <div className="absolute text-[2.75rem]  text-white p-6 text-xl font-bold ">
          2024
        </div>
        <div className="absolute text-[2.75rem]  text-white p-6 text-xl font-bold bottom-[3rem] right-0">
          May you always be happy.
        </div>
        <div className="absolute text-[2.75rem]  text-white p-6 text-xl font-bold right-0">
          04
        </div>

        <Image
          src={photos[14].src}
          alt={'photo1'}
          width={1600}
          height={800}
          objectPosition="bottom"
          className=" h-[80vh]  w-full  object-cover  object-bottom "
        />
      </div>
    </div>
  );
}
