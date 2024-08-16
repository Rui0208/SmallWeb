import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from './ui/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { useRouter } from 'next/router';

export function InputForm() {
  const router = useRouter();

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
  const onSubmit = (data: any) => {
    router.push('/gift');
  };

  return (
    <div>
      <form
        className="grid w-full  justify-center  items-center gap-3 pb-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex justify-center font-bold text-2xl text-cyan-500">
          {'領取禮物'}
        </div>
        <Label className="text-[1rem]" htmlFor="email">
          姓名
        </Label>
        <Input
          {...register('name', { required: '名字是必填的！' })}
          placeholder="林雨寧"
          className="w-[20vw]"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">{errors.name.message}</span>
        )}
        <Label className="text-[1rem]" htmlFor="email">
          電子信箱
        </Label>
        <Input
          {...register('email', { required: '信箱是必填的！' })}
          placeholder="iu@gmail.com"
          className="w-[20vw]"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <Label className="text-[1rem]" htmlFor="email">
          電話號碼
        </Label>
        <Input
          {...register('phone', { required: '電話是必填的！' })}
          placeholder="09"
          className="w-[20vw]"
        />
        {errors.phone && (
          <span className="text-red-500 text-sm">{errors.phone.message}</span>
        )}

        <Button
          className="border bg-green-500 w-[7vw] text-white p-4 "
          type="submit"
        >
          送出
        </Button>
      </form>
    </div>
  );
}
