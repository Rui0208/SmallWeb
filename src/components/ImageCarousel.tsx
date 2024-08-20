import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

// 圖片數組
const images = [
  '/images/1.jpeg',  '/images/2.jpeg',  '/images/3.jpeg',  '/images/5.jpeg',  '/images/6.jpeg',
  '/images/yi1.jpeg', '/images/yi2.jpeg', '/images/yi3.jpeg', '/images/yi4.jpeg', '/images/yi5.jpeg',
  '/images/yi6.jpeg', '/images/yi7.jpeg', '/images/yi8.jpeg', '/images/yi9.jpeg', '/images/yi10.jpeg',
  '/images/yi11.jpeg', '/images/yi12.jpeg', '/images/yi13.jpeg', '/images/yi14.jpeg', '/images/yi15.jpeg',
  '/images/nan1.jpeg', '/images/nan2.jpeg', '/images/nan3.jpeg', '/images/nan4.jpeg', '/images/nan5.jpeg',
  '/images/nan6.jpeg', '/images/nan7.jpeg', '/images/nan8.jpeg', '/images/nan9.jpeg', '/images/nan10.jpeg',
  '/images/nan11.jpeg', '/images/nan12.jpeg', '/images/nan13.jpeg', '/images/nan14.jpeg', '/images/nan15.jpeg',
  '/images/hua1.jpeg', '/images/hua2.jpeg', '/images/hua3.jpeg', '/images/hua4.jpeg', '/images/hua5.jpeg',
  '/images/hua6.jpeg', '/images/hua7.jpeg', '/images/hua8.jpeg', '/images/hua9.jpeg', '/images/hua10.jpeg',
  '/images/hua11.jpeg', '/images/hua12.jpeg', '/images/hua13.jpeg', '/images/hua14.jpeg', '/images/hua15.jpeg',
  '/images/oth1.jpeg', '/images/oth2.jpeg', '/images/oth3.jpeg', '/images/oth4.jpeg', '/images/oth5.jpeg',
  '/images/oth6.jpeg', '/images/oth7.jpeg', '/images/oth8.jpeg', '/images/oth9.jpeg', '/images/oth10.jpeg',
  '/images/oth11.jpeg', '/images/oth12.jpeg', '/images/oth13.jpeg', '/images/oth14.jpeg',
];

const ImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // 每隔2秒切換一次圖片

    return () => clearInterval(intervalId); // 清除計時器
  }, []);

  const carouselStyle = {
    position: 'relative' as const,
    maxWidth: isMobile ? '100%' : '80%',
    minHeight: isMobile ? '40vh' : '60vh',
    left: isMobile ? '0' : '10vw',
    top: isMobile ? '2vh' : '5vh',
    marginBottom: isMobile ? '5vh' : '10vh',
  };

  return (
    <div style={carouselStyle}>
      <Image
        src={images[currentIndex]}
        alt="carousel"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="rounded-lg"
      />
    </div>
  );
};

export default ImageCarousel;
