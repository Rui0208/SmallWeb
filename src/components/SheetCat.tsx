import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function SheetCat() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

  const catMessages = [
    "喵～生日快樂！",
    "希望妳生日過得很開心！",
    "記得給我更多零食哦～",
    "生日快樂，我的主人！"
  ];

  return (
    <div className={isMobile ? "bottom-0 left-0 fixed z-10" : "bottom-0 fixed z-10"}>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Avatar className={isMobile ? "w-[4rem] h-[4rem] cursor-pointer ml-4 mb-4" : "w-[5rem] h-[5rem] cursor-pointer"}>
              <AvatarImage src="/images/cat2.jpeg" />
              <AvatarFallback>大美女</AvatarFallback>
            </Avatar>
          </motion.div>
        </SheetTrigger>
        <SheetContent side={isMobile ? "bottom" : "right"} className="bg-white">
          <SheetHeader className={isMobile ? "flex flex-col items-center" : "flex justify-center items-center"}>
            <SheetTitle className={isMobile ? "text-xl mb-2" : ""}>阿貓祝妳生日快樂</SheetTitle>
            <SheetDescription className="group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={'/images/cat1.jpeg'}
                  alt="iu"
                  width={isMobile ? 150 : 200}
                  height={isMobile ? 150 : 200}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            {catMessages.map((message, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-gray-600 mb-2"
              >
                {message}
              </motion.p>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
