import React from 'react'
import HeartBox from '../../../public/interaction/HeartBox.svg';
import HashBox from '../../../public/interaction/HashBox.svg';
import LikeBox from '../../../public/interaction/LikeBox.svg';
import LikeHandle from '../../../public/interaction/LikeHandle.svg';
import Heart from '../../../public/interaction/Heart.svg';
import Hash from '../../../public/interaction/Hash.svg';
import Like from '../../../public/interaction/Like.svg';
import HeartShadow from '../../../public/interaction/HeartShadow.svg';
import HashShadow from '../../../public/interaction/HashShadow.svg';
import LikeShadow from '../../../public/interaction/LikeShadow.svg';
const Interaction = () => {
    return (
        <div
            className="w-[75px] h-[75px] rotate-[7.22deg] rounded-[12px] flex items-center justify-center"
            style={{
                boxShadow: "0px 9.76px 29.27px -3.66px rgba(16, 24, 40, 0.1)",
            }}
        >
            {/* Like box */}
            <LikeBox className="w-[40.98px] h-[47.53px] rotate-[eg]  absolute top-[3.97px] left-[32px]" />
            <LikeShadow className="w-[19.85px] h-[47.53px] rotate-[2deg]  absolute top-[5.8px] rounded left-[52.8px]" />
            <LikeHandle className="w-[6.09px] h-[13.70px] rotate-[deg] fill-[#8EE6F3] absolute top-[22.94px] left-[40.36px]" />
            <Like className="w-[19.13px] h-[23.91px] rotate-[deg] fill-[#FFD36C] absolute top-[13.89px] left-[45px]" />
            {/* Hash box */}
            <HashBox className="absolute w-[32.3152px] h-[37.5327px] top-[16.51px] left-[4.51px] rotate-[deg] opacity-100 fill-[#72D1FB]" />
            <HashShadow className="absolute w-[14.0089px] h-[32.2163px] top-[18.5px] left-[25.34px] rotate-[deg] opacity-100 fill-[#62A6FD]" />
            <Hash className="absolute w-[17.3862px] h-[17.3879px] top-[26.12px] left-[13.47px] rotate-[deg] opacity-100 fill-[#F7F3F1]" />
            {/* Heart box */}
            <HeartBox className="absolute w-[22.93px] h-[26.64px] top-[47.39px] left-[26.88px] rotate-[deg] opacity-100  rounded" />
            <HeartShadow className="absolute w-[10.74px] h-[26.64px] top-[48.63px] left-[39.3px] rotate-[3deg] opacity-100 " />
            <Heart className="absolute w-[10.74px] h-[9.17px] top-[55.33px] left-[34.21px] rotate-[7.22deg] opacity-100 " />



        </div>

    )
}

export default Interaction
