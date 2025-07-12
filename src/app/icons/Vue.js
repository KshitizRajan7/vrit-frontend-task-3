"use client"
import React from 'react';
import VueBox from '../../../public/Vue/VueBox.svg';
import VeuBoxShadow from '../../../public/Vue/VueBoxShadow.svg';
import VueText from '../../../public/Vue/VueText.svg';
import VueTriangle from '../../../public/Vue/VueTriangle.svg';
import VueTriangle2 from '../../../public/Vue/VueTriangle2.svg';
import VueV from '../../../public/Vue/VueV.svg';
import VueV2 from '../../../public/Vue/VueV2.svg';
import UnderV from '../../../public/Vue/UnderV.svg';
import UnderV2 from '../../../public/Vue/UnderV2.svg';

const Vue = () => {
    return (
        <div className="relative w-[75px] h-[75px] rounded-[12px] rotate-[-8.97deg] shadow-[0px_9.76px_29.27px_-3.66px_rgba(16,24,40,0.1),_0px_9.76px_29.27px_-3.66px_rgba(16,24,40,0.05)]">
            <VueBox className="absolute w-[55.75px] h-[21.5px] rotate-[6deg] top-[48px] left-[8px]" />
            <VeuBoxShadow className="absolute w-[7.59px] h-[21.5px] rotate-[5deg] top-[50.5px] left-[57px]" />
            <VueText className="absolute w-[43.69px] h-[12.65px] rotate-[5.5deg] top-[52px] left-[15px]" />
            <VueTriangle className="absolute w-[55.75px] h-[48.27px] rotate-[5deg] top-[1px] left-[9px]" />
            <VueTriangle2 className="absolute w-[33.3px] h-[27.65px] rotate-[5deg] top-[21px] left-[19px]" />
            <UnderV className="absolute w-[38.13px] h-[27.98px] rotate-[4deg] top-[19px] left-[15.2px]" />
            <UnderV2 className="absolute w-[26.77px] h-[17.88px] rotate-[4deg] top-[29.9px] left-[22px]" />
            <VueV className="absolute w-[26.77px] h-[17.88px] rotate-[5.5deg] top-[7.5px] left-[14.5px]" />
            <VueV2 className="absolute w-[33.3px] h-[28.83px] rotate-[5.5deg] top-[4.5px] left-[3.5px]" />
        </div>
    );
};

export default Vue;
