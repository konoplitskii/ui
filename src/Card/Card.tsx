import {FC} from "react";
import CardBox from "./styles";
import Button from "../Button/Button";

interface Card {
    imgUrl?:string,
    title?:string,
    subtitle?:string,
    price?:string,
    sum?:string
}

const Card:FC<Card> = ({imgUrl='https://wosergame.ucoz.com/14871_1.png',title,subtitle,price,sum})=> {
    return (
        <CardBox>
            <div className="box-card-img-wrapper">
                <img src={imgUrl} alt={title}/>
            </div>
            <div className="box-card-body">
                <h3 className="box-card-title">{title}</h3>
                <div className="box-card-info">{subtitle}</div>
                <div className="box-card-price">{price}Р</div>
                <div className="box-card-counter">
                    <Button size="normal">-</Button>
                    <div className="box-card-counter-sum">0</div>
                    <Button size="normal">+</Button>
                </div>
                <div className="box-card-result">Итого: 17₽</div>
                <Button customMarginTop={'17px'}>Купить</Button>
            </div>
        </CardBox>
    )
}

export default Card;