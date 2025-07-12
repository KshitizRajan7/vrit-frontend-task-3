import React from 'react';
import ReactDot from '../../../public/reactIcon/ReactDot.svg';
import ReactRing from '../../../public/reactIcon/ReactRing.svg';
import HalfBox from '../../../public/reactIcon/HalfBox.svg';

const ReactIcon = () => {
    return (
        <div>
            <div className="relative w-[75px] h-[75px] rotate-[-16.67deg] opacity-100 bg-[#5CA4DA] rounded-md">
                <HalfBox className="absolute w-[60.47px] h-[58.36px] top-[-9px] left-[-3px] rotate-[16deg]  opacity-100" />
                <ReactDot className="absolute w-[10.31px] h-[10.31px] top-[33px] left-[33px] rotate-[-16.67deg] opacity-100 rounded-full" />
                <ReactRing className="absolute w-[57.11px] h-[57.11px] top-[11px] left-[9px] rotate-[-16.67deg] opacity-100 rounded-full" />
            </div>
        </div>
    );
};

export default ReactIcon;
