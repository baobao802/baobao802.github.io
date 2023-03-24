import React from 'react';
import { BLogo } from '@/components/icons';

export default function Logo({ icon: Icon = BLogo, text = 'BaoBao' }) {
  return (
    <div className='flex gap-2 items-center h-fit'>
      <Icon className='w-5 h-5 text-dracula-purple' />
      <span className='font-bold'>{text}</span>
    </div>
  );
}
