'use client';

import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // ✅ Import arrow icon
import Interaction from '@/app/icons/Interaction';
import Pen from '@/app/icons/Pen';
import ReactIcon from '@/app/icons/ReactIcon';
import Vue from '@/app/icons/Vue';

// 🔸 SmallCard Component
const SmallCard = ({ number }) => (
  <div className="relative w-[280px] h-[461px] rounded-[32px] bg-[#C33241] overflow-hidden">
    {/* Inner Frame */}
    <div className="absolute top-[41px] left-[35.5px] w-[209px] h-[422px] flex flex-col gap-[24px] items-center">
      {/* Rotated Box */}
      <div className="w-[138px] h-[218px]">
        <div className="mt-20 -rotate-90">
          <div className="w-[218px] h-[138px] bg-[#C33241] flex flex-col justify-start gap-[12px] px-4 py-2">
            <p className="text-[32px] font-bold leading-[100%] text-white font-[Outfit]">
              Upcoming Courses
            </p>
            <p className="text-[18px] font-normal leading-[100%] text-white font-[Outfit]">
              exciting new courses waiting to boost your skills.
            </p>
          </div>
        </div>
      </div>

      {/* Number */}
      <div className="w-[209px] h-[180px] flex items-center justify-center">
        <span className="font-[Nohemi] font-bold text-[150px] leading-[120%] text-white text-center">
          {number}
        </span>
      </div>
    </div>

    {/* Plus sign */}
    <div className="absolute top-[259px] left-[228px] w-[34px] h-[77px] flex items-center justify-center">
      <span className="font-[Nohemi] font-bold text-[64px] leading-[120%] text-white text-center">
        +
      </span>
    </div>

    {/* Ellipse */}
    <div className="w-[596px] h-[596px] bg-transparent rounded-full absolute top-[-71px] left-[-122px]" />
  </div>
);

// 🔹 StatCard Component
const StatCard = () => {
  return (
    <div className="flex gap-[32px] relative">
      {/* Active Card */}
      <div className="relative w-[592px] h-[461px] rounded-[32px] bg-[#C33241]">
        {/* View all courses button */}
        <button className="absolute top-[40px] left-[393px] w-[161px] h-[23px] flex items-center gap-[8px] text-[16px] font-semibold text-white bg-transparent">
          View all Courses
          <span
            className="w-[14px] h-[11.67px] flex items-center justify-center rounded-[2px]"
            style={{ paddingTop: '4.17px', paddingLeft: '3px' }}
          >
            <FaArrowRight className="text-white w-[10px] h-[10px]" />
          </span>
        </button>

        {/* Icons */}
        <div className="absolute top-[126px] left-[66px] w-[459.52px] h-[93.36px] flex gap-[42px]">
          <ReactIcon />
          <Interaction />
          <Vue />
          <Pen />
        </div>

        {/* Plus sign */}
        <p className="absolute top-[275px] left-[262px] w-[34px] h-[77px] text-[64px] leading-[120%] font-bold text-white text-center font-[Nohemi]">
          +
        </p>

        {/* Course Stats */}
        <div className="absolute top-[283px] left-[75px] w-[442px] h-[138px] flex gap-[24px] justify-center items-center">
          <p className="w-[200px] h-[138px] text-[150px] leading-[120%] font-bold text-center font-[Nohemi] text-white">
            23
          </p>
          <div className="w-[218px] h-[98px] flex flex-col gap-[12px]">
            <p className="w-[164px] h-[40px] text-center font-[Outfit] font-bold text-[30px] leading-[100%] text-[#F9EBEC]">
              All Courses
            </p>
            <p className="w-[218px] h-[46px] font-[Outfit] font-normal text-[18px] leading-[100%] text-[#F9EBEC]">
              courses you're powering through right now.
            </p>
          </div>
        </div>

        {/* Ellipse indicator */}
        <div className="absolute top-[453px] left-[-8px] w-[15px] h-[15px] bg-[#F9EBEC] rounded-full" />
      </div>

      {/* Other Cards */}
      <SmallCard number="05" />
      <SmallCard number="10" />
    </div>
  );
};

export default StatCard;
