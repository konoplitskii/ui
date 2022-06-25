import React, {FC} from 'react';
import SmallHeadingElement from "./styles";

interface ISmallHeading {
    text:string,
    customMarginTop?:string,
    customMarginBottom?:string
}


const SmallHeading:FC<ISmallHeading> = ({text,customMarginTop,customMarginBottom}) => {
    return (
        <SmallHeadingElement customMarginTop={customMarginTop} customMarginBottom={customMarginBottom}>
            {text}
        </SmallHeadingElement>
    );
};

export default SmallHeading;