import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { useRouter } from 'next/router';

export function InputForm() {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const schema = z.object({
    name: z
      .string()
      .min(2, { message: '最少要2個字' })
      .max(10, { message: '最多10個字' }),
    email: z.string().email({ message: '要輸入正確的信箱！' }),
    phone: z.string().regex(/^0987812840/, { message: '輸入正確的電話號碼!' }),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });
  
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      // 模擬API調用
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push('/gift');
    } catch (error) {
      console.error('提交表單時發生錯誤:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <form
        className={`bg-white shadow-md rounded px-8 pt-6 pb-8  ${
          isMobile ? 'w-full mx-4' : 'w-[400px]'
        }`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold text-center text-cyan-500 mb-6">
          領取禮物
        </h2>
        
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            姓名
          </Label>
          <Input
            {...register('name', { required: '名字是必填的！' })}
            placeholder="林雨寧"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name.message}</p>
          )}
        </div>
        
        <div className="mb-4">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            電子信箱
          </Label>
          <Input
            {...register('email', { required: '信箱是必填的！' })}
            placeholder="iu@gmail.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <Label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            電話號碼
          </Label>
          <Input
            {...register('phone', { required: '電話是必填的！' })}
            placeholder="09"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {errors.phone && (
            <p className="text-red-500 text-xs italic">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex items-center justify-center">
          <Button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? '提交中...' : '送出'}
          </Button>
        </div>
      </form>
    </div>
  );
}
