import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@radix-ui/react-label';

export default function radio() {
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
