import React, {FC} from 'react';
import ParaParagraphElement from "./styles";

interface IParagraph {
    text?:string,
    customMarginTop?:string,
    customMarginBottom?:string,
}

const Paragraph:FC<IParagraph> = ({text,customMarginTop,customMarginBottom}) => {
    return (
        <ParaParagraphElement customMarginTop={customMarginTop} customMarginBottom={customMarginBottom}>
            {text}
        </ParaParagraphElement>
    );
};

export default Paragraph;