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
export default function SheetCat() {
  return (
    <div className=" bottom-0 fixed z-10">
      <Sheet>
        <SheetTrigger>
          <div>
            {' '}
            <Avatar className="w-[5rem] h-[5rem] cursor-pointer ">
              <AvatarImage src="/images/cat2.jpeg" />
              <AvatarFallback>大美女</AvatarFallback>
            </Avatar>
          </div>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetHeader className="flex justify-center items-center ">
            <SheetTitle>阿貓祝妳生日快樂</SheetTitle>
            <SheetDescription className="group">
              <Image
                src={'/images/cat1.jpeg'}
                alt="iu"
                width={200}
                height={200}
              />
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
