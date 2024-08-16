import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';
import { useState, useEffect } from 'react';

export default function Radio() {
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

  if (isMobile) {
    return (
      <div className="flex flex-col gap-8">
        <RadioGroup defaultValue="option-one">
          <p className="text-[1rem] font-bold mb-2">8/31</p>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="option-one"
              id="option-one-831"
              className="bg-white"
            />
            <Label htmlFor="option-one-831">綠色洋裝</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="option-two"
              id="option-two-831"
              className="bg-white"
            />
            <Label htmlFor="option-two-831">飛天小女警</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-three"
              id="option-three-831"
              className="bg-white"
            />
            <Label htmlFor="option-three-831">黑色洋裝</Label>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue="option-one">
          <p className="text-[1rem] font-bold mb-2">9/1</p>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="option-one"
              id="option-one-91"
              className="bg-white"
            />
            <Label htmlFor="option-one-91">綠色洋裝</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="option-two"
              id="option-two-91"
              className="bg-white"
            />
            <Label htmlFor="option-two-91">飛天小女警</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-three"
              id="option-three-91"
              className="bg-white"
            />
            <Label htmlFor="option-three-91">黑色洋裝</Label>
          </div>
        </RadioGroup>
        <RadioGroup defaultValue="option-one">
          <p className="text-[1rem] font-bold mb-2">9/2</p>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="option-one"
              id="option-one-92"
              className="bg-white"
            />
            <Label htmlFor="option-one-92">綠色洋裝</Label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <RadioGroupItem
              value="option-two"
              id="option-two-92"
              className="bg-white"
            />
            <Label htmlFor="option-two-92">飛天小女警</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="option-three"
              id="option-three-92"
              className="bg-white"
            />
            <Label htmlFor="option-three-92">黑色洋裝</Label>
          </div>
        </RadioGroup>
      </div>
    );
  }

  return (
    <div className="flex gap-[18rem]">
      <RadioGroup defaultValue="option-one">
        <p className="text-[1rem]">8/31</p>
        <div className="flex items-center space-x-2 ">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            className="bg-white"
          />
          <Label htmlFor="option-one">綠色洋裝</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className="bg-white"
          />
          <Label htmlFor="option-two">飛天小女警</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-three"
            id="option-three"
            className="bg-white"
          />
          <Label htmlFor="option-three">黑色洋裝</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="option-one">
        <p className="text-[1rem]">9/1</p>
        <div className="flex items-center space-x-2 ">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            className="bg-white"
          />
          <Label htmlFor="option-one">綠色洋裝</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className="bg-white"
          />
          <Label htmlFor="option-two">飛天小女警</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-three"
            id="option-three"
            className="bg-white"
          />
          <Label htmlFor="option-three">黑色洋裝</Label>
        </div>
      </RadioGroup>
      <RadioGroup defaultValue="option-one">
        <p className="text-[1rem]">9/2</p>
        <div className="flex items-center space-x-2 ">
          <RadioGroupItem
            value="option-one"
            id="option-one"
            className="bg-white"
          />
          <Label htmlFor="option-one">綠色洋裝</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-two"
            id="option-two"
            className="bg-white"
          />
          <Label htmlFor="option-two">飛天小女警</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="option-three"
            id="option-three"
            className="bg-white"
          />
          <Label htmlFor="option-three">黑色洋裝</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
