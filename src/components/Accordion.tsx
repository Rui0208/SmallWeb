import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';
import { motion } from 'framer-motion';
import Radio from './Radio';
import { useMediaQuery } from 'react-responsive';

export function AccordionDemo() {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={`flex flex-col justify-center items-center gap-4 mt-6 ${isMobile ? 'px-4' : ''}`}>
      <p className={`text-xl font-bold text-red-400 ${isMobile ? 'text-center' : ''}`}>壽星須知</p>
      <Accordion type="single" collapsible className={isMobile ? 'w-full' : 'w-[60vw]'}>
        <AccordionItem value="item-1">
          <AccordionTrigger>生日行程</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'}`}>
                <div>
                  <p className="my-1">8/31:上班-西式餐廳</p>
                  <p className="my-1">
                    9/1:睡飽-化妝-西式早午餐-行程選擇-精緻燒肉
                  </p>
                  <p className="my-1">9/2:睡到自然醒-阿睿要上班qq-晚餐</p>
                </div>
                <RadioGroup defaultValue="option-one" className={isMobile ? 'mt-4' : ''}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-one"
                      id="option-one"
                      className="bg-white"
                    />
                    <Label htmlFor="option-one">九份</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-two"
                      id="option-two"
                      className="bg-white"
                    />
                    <Label htmlFor="option-two">貓村</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-three"
                      id="option-three"
                      className="bg-white"
                    />
                    <Label htmlFor="option-three">淡水</Label>
                  </div>
                </RadioGroup>
              </div>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>怎麼還沒有生日禮物？</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="my-1">待會就有ㄌ</p>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>生日服裝搭配建議</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Radio />
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>注意事項</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="my-1">部分行程有專車接送，避免妝髮受損。</p>
              <p className="my-1">
                室外溫度高為不可控因素，行程中會感到炎熱，敬請包容。
              </p>
              <p className="my-1">
                餐廳的餐點部分，以壽星本人決定為主．不用客氣。
              </p>
              <p className="my-1">帶著一顆快樂的心。</p>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
