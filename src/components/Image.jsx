import React from 'react';
import fallbackImg from '@/assets/fallback.jpg';

export default function Image({ className, src, alt, fallback = fallbackImg }) {
  return (
    <object className={className} data={src}>
      <img className={className} src={fallback} alt={alt} />
    </object>
  );
}
