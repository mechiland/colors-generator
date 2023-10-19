'use client';

import ColorBlock from '@/components/ColorBlock'
import ColorsChanger from '@/components/ColorsChanger';
import { useState } from 'react';

const grayColors = [
    "#F8F9FA",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529",
  ];

  const darkColors = [
    "#C1C2C5",
    "#A6A7AB",
    "#909296",
    "#5C5F66",
    "#373A40",
    "#2C2E33",
    "#25262B",
    "#1A1B1E",
    "#141517",
    "#101113"
  ];

  const stoneColors = [
"#FAFAF9",
"#F5F5F4",
"#E7E5E4",
"#D6D3D1",
"#A8A29E",
"#78716C",
"#57534E",
"#44403C",
"#292524",
"#1C1917",
"#0c0a09",
  ]

export default function Home() {


  return (
    <main className="p-8">

      <ColorsChanger colors={grayColors} name="Gray Colors"/>

      <hr className='my-8' />

      <ColorsChanger colors={darkColors} name="Dark Colors" />
      <ColorsChanger colors={stoneColors} name="Stone Colors" />

    </main>
  )
}
