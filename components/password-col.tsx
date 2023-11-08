'use client';
import { toStars } from '@/lib/utils';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

function PasswordCol({ children }: { children: ReactNode }) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const length = children?.toString().length;
  const stars = toStars(length);
  return (
    <div className='relative'>
      <span className='text-center'>{showPassword ? children : stars}</span>
      <Image
        className='cursor-pointer absolute top-1 right-3'
        onClick={() => setShowPassword(!showPassword)}
        src={showPassword ? '/eye-slash-fill.svg' : '/eye-fill.svg'}
        width={18}
        height={18}
        alt='show button'
      />
    </div>
  );
}

export default PasswordCol;
