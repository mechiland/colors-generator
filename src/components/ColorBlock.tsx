'use client';

import { colord } from "colord";
import { useEffect, useState } from "react";

type Props = {
  color: string;
  hueDelta?: number;
}
export default function ColorBlock({ color, hueDelta }: Props) {
  const [hsl, setHsl] = useState(colord(color));
  useEffect(() => {
    if (hueDelta) {
      const original = colord(color).toHsl();
      const total = original.h + hueDelta;
      const newHue = total >= 0 ? total % 360 : 360 + total;
      const instance = colord(color).hue(original.h + hueDelta);
      console.log(hueDelta,newHue, instance.toHslString());
      setHsl(instance);
    }
  }, [hueDelta])
  return <div>
    <div className="w-20 h-20" style={{background: color}}></div>
    <div className="text-xs font-mono">{color}</div>
    <div className="w-20 h-20" style={{background: hsl.toHslString()}}></div>
    <div className="text-xs font-mono">{hsl.toHslString()}</div>
  </div>
}