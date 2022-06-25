import React, {FC} from 'react';
import {IIcon} from "../interface";


const Success:FC<IIcon> = ({
                             width = '14',
                             height = '14',
                             color = '#4CAF50',
                             className = ''
                         }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill={color}/>
            <path d="M10.5333 3.8667L5.99995 8.40003L4.13328 6.53337L3.19995 7.4667L5.99995 10.2667L11.4666 4.80003L10.5333 3.8667Z" fill="white"/>
        </svg>

    );
};

export default Success;