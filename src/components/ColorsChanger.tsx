import { useState } from "react";
import ColorBlock from "./ColorBlock";

type Props = {
  name: string;
  colors: string[];
}
export default function ColorsChanger({ name, colors} : Props) {

   const [delta, setDelta] = useState(0);

  const handleChange = (event) => {
    setDelta(Number(event.target.value));
  }
  return <div>
    <h2 className='text-2xl'>{name}</h2>

      <div>
        <input type="range" min={-360} max={360} value={delta} onChange={handleChange} className='w-96'/>
        {delta}
      </div>

      <div className='flex'>
        { colors.map((color, index) => (<ColorBlock key={index} color={color} hueDelta={delta} />)) }
      </div>
  </div>;
}