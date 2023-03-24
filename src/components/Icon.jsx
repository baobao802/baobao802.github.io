import React from 'react';
import { ICON_MAP } from '../constants';

export default function Icon({ code, ...props }) {
  const Component = ICON_MAP[code];

  return <Component {...props} />;
}
