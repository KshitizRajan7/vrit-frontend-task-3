"use client";
import React from "react";

import One from "../../../public/pen/A1.svg";
import Two from "../../../public/pen/A2.svg";
import Three from "../../../public/pen/A3.svg";
import Four from "../../../public/pen/A4.svg";
import Five from "../../../public/pen/A5.svg";
import Six from "../../../public/pen/A6.svg";
import Seven from "../../../public/pen/A7.svg";
import Eight from "../../../public/pen/A8.svg";
import SmOne from "../../../public/pen/B1.svg";
import SmTwo from "../../../public/pen/B2.svg";
import SmThree from "../../../public/pen/B3.svg";
import SmFour from "../../../public/pen/B4.svg";
import SmFive from "../../../public/pen/B5.svg";
import SmSix from "../../../public/pen/B6.svg";
import SmSeven from "../../../public/pen/B7.svg";
import SmEight from "../../../public/pen/B8.svg";
import P1 from "../../../public/pen/P1.svg";
import P2 from "../../../public/pen/P2.svg";
import Pm from "../../../public/pen/Pm.svg";
import Pneck from "../../../public/pen/Pneck.svg";
import Pneck2 from "../../../public/pen/Pneck2.svg";
import PenBody from "../../../public/pen/PenBody.svg";
import PenBody2 from "../../../public/pen/PenBody2.svg";
import PenNeck from "../../../public/pen/PenNeck.svg";
import PenNip from "../../../public/pen/PenNip.svg";

const Pen = () => {
    return (
        <div className="w-[75px] h-[75px] rotate-[12.61deg] rounded-[12px] flex items-center justify-center relative overflow-hidden">
            {/* Big Shapes */}
            <One className="absolute w-[25.02px] h-[24.26px] top-[1px] left-[35px] rotate-[-12.61deg]" />
            <Two className="absolute w-[24.26px] h-[25.02px] top-[15.69px] left-[50.59px] rotate-[-12.61deg]" />
            <Three className="absolute w-[24.26px] h-[25.02px] top-[38.1px] left-[50.12px] rotate-[-12.61deg]" />
            <Four className="absolute w-[25.02px] h-[24.26px] top-[50.53px] left-[37.01px] rotate-[-12.61deg]" />
            <Five className="absolute w-[25.02px] h-[24.26px] top-[50.07px] left-[12.1px] rotate-[-12.61deg]" />
            <Six className="absolute w-[24.26px] h-[25.02px] top-[34.95px] left-[3.26px] rotate-[-12.61deg]" />
            <Seven className="absolute w-[24.26px] h-[25.02px] top-[13.54px] left-[-1px] rotate-[-12.61deg]" />
            <Eight className="absolute w-[25.02px] h-[24.26px] top-[4.69px] left-[11.25px] rotate-[-12.61deg]" />

            {/* Small Shapes */}
            <SmOne className="absolute w-[18.98px] h-[15.72px] top-[9.5px] left-[36px] rotate-[-12.61deg]" />
            <SmTwo className="absolute w-[15.72px] h-[18.98px] top-[20px] left-[49px] rotate-[-12.61deg]" />
            <SmThree className="absolute w-[15.72px] h-[18.98px] top-[39px] left-[48px] rotate-[-12.61deg]" />
            <SmFour className="absolute w-[18.98px] h-[15.72px] top-[51.7px] left-[35px] rotate-[-12.61deg]" />
            <SmFive className="absolute w-[18.98px] h-[15.72px] top-[49.5px] left-[18.5px] rotate-[-9deg]" />
            <SmSix className="absolute w-[15.72px] h-[18.98px] top-[36px] left-[11px] rotate-[-12.61deg]" />
            <SmSeven className="absolute w-[15.72px] h-[18.98px] top-[19.8px] left-[8px] rotate-[-12.61deg]" />
            <SmEight className="absolute w-[18.98px] h-[15.72px] top-[13px] left-[18px] rotate-[-9deg]" />

            {/* Pen Components - Scaled to fit in box */}
            <P1 className="absolute w-[24px] h-[22px] top-[6px] left-[40px] rotate-[-12.61deg]" />
            <P2 className="absolute w-[22px] h-[24px] top-[5px] left-[48px] rotate-[-12.61deg]" />
            <Pm className="absolute w-[16px] h-[16px] top-[7px] left-[50px] rotate-[-12.61deg]" />
            <PenBody className="absolute w-[28px] h-[28px] top-[27px] left-[15px] rotate-[-12.61deg]" />
            <Pneck className="absolute w-[14px] h-[14px] top-[25px] left-[34px] rotate-[-12.61deg]" />
            <Pneck2 className="absolute w-[12px] h-[12px] top-[20px] left-[40px] rotate-[-12.61deg]" />
            <PenBody2 className="absolute w-[24px] h-[24px] top-[27px] left-[15px] rotate-[-12.61deg]" />
            <PenNeck className="absolute w-[16px] h-[16px] top-[51px] left-[5px] rotate-[-12.61deg]" />
            <PenNip className="absolute w-[4px] h-[4px] top-[67px] left-[6px] rotate-[-12.61deg]" />
        </div>
    );
};

export default Pen;
