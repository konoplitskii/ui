import { FC } from "react";
interface Card {
  imgUrl?: string;
  title?: string;
  subtitle?: string;
  price?: string;
  sum?: string;
}
declare const Card: FC<Card>;
export default Card;
