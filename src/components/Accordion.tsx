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
    <div className={`flex flex-col justify-center items-center gap-6 mt-8 ${isMobile ? 'px-4' : ''}`}>
      <h2 className={`text-2xl font-bold text-red-400 ${isMobile ? 'text-center' : ''} mb-2`}>壽星須知</h2>
      <Accordion type="single" collapsible className={`${isMobile ? 'w-full' : 'w-[60vw]'} shadow-lg rounded-lg overflow-hidden`}>
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">生日行程</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white"
            >
              <div className={`flex ${isMobile ? 'flex-col' : 'justify-between'} p-6`}>
                <div className="space-y-3">
                  <p className="text-gray-700"><span className="font-semibold">8/31:</span> 上班 - 西式餐廳</p>
                  <p className="text-gray-700"><span className="font-semibold">9/1:</span> 睡飽 - 化妝 - 西式早午餐 - 行程選擇 - 精緻燒肉</p>
                  <p className="text-gray-700"><span className="font-semibold">9/2:</span> 睡到自然醒 - 阿睿要上班qq - 晚餐</p>
                </div>
                <RadioGroup defaultValue="option-one" className={`${isMobile ? 'mt-6' : ''} space-y-2`}>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-one" id="option-one" className="bg-white" />
                    <Label htmlFor="option-one" className="text-gray-700">九份</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-two" id="option-two" className="bg-white" />
                    <Label htmlFor="option-two" className="text-gray-700">貓村</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="option-three" id="option-three" className="bg-white" />
                    <Label htmlFor="option-three" className="text-gray-700">淡水</Label>
                  </div>
                </RadioGroup>
              </div>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b">
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">怎麼還沒有生日禮物？</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white"
            >
              <p className="p-6 text-gray-700">等等下面領取</p>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b">
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">生日服裝搭配建議</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white"
            >
              <div className="p-6">
                <Radio />
              </div>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">注意事項</AccordionTrigger>
          <AccordionContent asChild>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden bg-white"
            >
              <ul className="p-6 space-y-2 text-gray-700 list-disc list-inside">
                <li>部分行程有專車接送，避免妝髮受損。</li>
                <li>室外溫度高為不可控因素，行程中會感到炎熱，敬請包容。</li>
                <li>餐廳的餐點部分，以壽星本人決定為主．不用客氣。</li>
                <li>帶著一顆快樂的心。</li>
              </ul>
            </motion.div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
