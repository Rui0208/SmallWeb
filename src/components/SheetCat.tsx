import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SheetCat() {
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

  return (
    <div className={isMobile ? "bottom-0 fixed z-10 w-full" : "bottom-0 fixed z-10"}>
      <Sheet>
        <SheetTrigger className={isMobile ? "w-full" : ""}>
          <div className={isMobile ? "flex justify-center" : ""}>
            <Avatar className={isMobile ? "w-[4rem] h-[4rem] cursor-pointer" : "w-[5rem] h-[5rem] cursor-pointer"}>
              <AvatarImage src="/images/cat2.jpeg" />
              <AvatarFallback>大美女</AvatarFallback>
            </Avatar>
          </div>
        </SheetTrigger>
        <SheetContent side={isMobile ? "bottom" : "right"} className="bg-white">
          <SheetHeader className={isMobile ? "flex flex-col items-center" : "flex justify-center items-center"}>
            <SheetTitle className={isMobile ? "text-xl mb-2" : ""}>阿貓祝妳生日快樂</SheetTitle>
            <SheetDescription className="group">
              <Image
                src={'/images/cat1.jpeg'}
                alt="iu"
                width={isMobile ? 150 : 200}
                height={isMobile ? 150 : 200}
              />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
