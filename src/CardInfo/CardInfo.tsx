import React, {FC} from 'react';
import CardInfoBox from "./styles";
import SmallHeading from "../SmallHeading/SmallHeading";
import Paragraph from "../Paragraph/Paragraph";
import Icon from "../Icon/Icon";

interface ICardInfo {
    title: string,
    text: string,
    icon: string
}

const CardInfo:FC<ICardInfo> = ({title,text,icon}) => {
    return (
        <CardInfoBox>
            <div className="card-info-icon-wrapper">
                <Icon icon={icon}/>
            </div>
            <SmallHeading text={title} customMarginBottom="26px"/>
            <Paragraph text={text}/>
        </CardInfoBox>
    );
};

export default CardInfo;
