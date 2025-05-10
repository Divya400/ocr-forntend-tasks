/* this is the main pricing page */
"use client";
import React from "react";
import Image from "next/image";
import GroupImage from "../../../public/Subscribe/Group 9.png";
import VectorImage from "../../../public/Subscribe/Vector.png";
import Tick from "../../../public/Subscribe/Tick.png";
import Cross from "../../../public/Subscribe/cross.png";
import { useRouter } from 'next/navigation';

const Cards: React.FC = () => {
     const router = useRouter();
  
      const handleSubscribe = () => {
        router.push('/payment'); // Replace with your desired route
      };
      const handleFree = () => {
        router.push('/request'); // Replace with your desired route 
      }
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen gap-y-4 lg:gap-x-8 bg-gray-100 p-4">
      {/* Left Card */}
      <div className="h-[450px] w-[250px] bg-gradient-to-b from-[#D7D7D7] to-[#FFFFFF] shadow-lg border border-gray-300 mt-[50px] lg:mt-0 flex flex-col items-center relative rounded-b-3xl">
        {/* Image section: positioned absolutely */}
        <div className="absolute top-[-60px] w-full flex justify-center items-center">
          {/* Left vector */}
          <Image
            src={VectorImage}
            alt="Left Vector"
            width={17}
            height={15}
            className="absolute left-[calc(50%-75px)]"
          />
          {/* Center curved tab */}
          {/* Center curved tab - moved downward slightly */}
          <div className="relative z-20 -top-[-48px] w-[200px] h-[110px]">
            <Image
              src={GroupImage}
              alt="Tab Label"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-2xl">
              Basic
            </span>
          </div>

          {/* Right vector */}
          <Image
            src={VectorImage}
            alt="Right Vector"
            width={17}
            height={15}
            className="absolute right-[calc(50%-75px)]"
          />
        </div>

        {/* Padding to push text below the absolute images */}
        <div className="pt-[120px] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl font-bold mb-6 text-[#4D4D4D]">Free</h2>

          {/* Feature List */}
          <ul className="text-gray-700 space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>3 Uploads</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Cross" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Cross" width={18} height={18} />
              <span>Bulk Upload</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Cross" width={18} height={18} />
              <span>Mobile App Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Email Support</span>
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90" onClick={handleFree}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Middle Card */}
      <div className="h-[600px] w-[300px] bg-gradient-to-b from-[#F6F1D2] to-[#EF7A7A] shadow-lg border border-gray-300 mt-[50px] lg:mt-0 flex flex-col items-center relative rounded-b-3xl">
        {/* Image section: positioned absolutely */}
        <div className="absolute top-[-60px] w-full flex justify-center items-center">
          {/* Left vector */}
          <Image
            src={VectorImage}
            alt="Left Vector"
            width={17}
            height={15}
            className="absolute left-[calc(50%-75px)]"
          />
          {/* Center curved tab */}
          {/* Center curved tab - moved downward slightly */}
          <div className="relative z-20 -top-[-48px] w-[200px] h-[110px]">
            <Image
              src={GroupImage}
              alt="Tab Label"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-2xl">
              Premium
            </span>
          </div>

          {/* Right vector */}
          <Image
            src={VectorImage}
            alt="Right Vector"
            width={17}
            height={15}
            className="absolute right-[calc(50%-75px)]"
          />
        </div>

        {/* Padding to push text below the absolute images */}
        <div className="pt-[120px] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl font-bold mb-6 text-[#4D4D4D] font-sans">
            <sup className="text-2xl align-top font-sans">$</sup>49
            <sub className="text-lg align-bottom font-sans">/mo</sub>
          </h2>

          {/* Feature List */}
          <ul className="text-gray-700 space-y-7 text-sm">
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>3 Uploads</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Bulk Upload</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Mobile App Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Live Call Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Custom Limit</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>

      {/* Right Card */}
      <div className="h-[450px] w-[250px] bg-gradient-to-b from-[#D7D7D7] to-[#FFFFFF]  shadow-lg border border-gray-300 mt-[50px] lg:mt-0 flex flex-col items-center relative rounded-b-3xl">
        {/* Image section: positioned absolutely */}
        <div className="absolute top-[-60px] w-full flex justify-center items-center">
          {/* Left vector */}
          <Image
            src={VectorImage}
            alt="Left Vector"
            width={17}
            height={15}
            className="absolute left-[calc(50%-75px)]"
          />
          {/* Center curved tab */}
          {/* Center curved tab - moved downward slightly */}
          <div className="relative z-20 -top-[-48px] w-[200px] h-[110px]">
            <Image
              src={GroupImage}
              alt="Tab Label"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
            <span className="absolute inset-0 flex items-center justify-center text-white font-light italic font-opensans text-2xl">
              Standard
            </span>
          </div>

          {/* Right vector */}
          <Image
            src={VectorImage}
            alt="Right Vector"
            width={17}
            height={15}
            className="absolute right-[calc(50%-75px)]"
          />
        </div>

        {/* Padding to push text below the absolute images */}
        <div className="pt-[120px] flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-5xl font-bold mb-6 text-[#4D4D4D]">
            <sup className="text-2xl align-top">$</sup>29
            <sub className="text-lg align-bottom">/mo</sub>
          </h2>

          {/* Feature List */}
          <ul className="text-gray-700 space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>3 Uploads</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Cross" width={18} height={18} />
              <span>Edit Responses</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Cross" width={18} height={18} />
              <span>Bulk Upload</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Cross} alt="Cross" width={18} height={18} />
              <span>Mobile App Support</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src={Tick} alt="Check" width={18} height={18} />
              <span>Email Support</span>
            </li>
          </ul>

          {/* Button */}
          <button className="mt-6 px-6 py-2 rounded-lg bg-gradient-to-b from-[#02ACED] to-[#016287] text-white font-light shadow hover:opacity-90" onClick={handleSubscribe}>
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
