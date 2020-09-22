import React from 'react';
import { But } from './Styled';

export default function Button({
  text,
  color,
  background,
  border,
  font,
  padding,
  width,
}) {
  return (
    <But
      color={color}
      background={background}
      border={border}
      font={font}
      padding={padding}
      width={width}
    >
      {text}
    </But>
  );
}
