import styled from "styled-components";

const CardBox = styled.div `
  padding: 23px 0;
  background: linear-gradient(180deg, #3461CA 0%, rgba(0, 0, 0, 0.73) 100%);
  box-shadow: 0px 4px 4px #3461CA;
  border-radius: 25px;
  width: 410px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 4px 8px #3461CA;
  }
  .box-card-img-wrapper {
    height: 232px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
  .box-card-body {
    padding: 0 23px;
    text-align: center;
  }
  
  .box-card-title {
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFF;
    margin: 7px 0 0 0;
    padding: 10px 0;
  }
  .box-card-info {
    padding: 10px 0;
    margin: 7px 0 0 0;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FEFFD6;
  }
  .box-card-price {
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #FEFFD6;
    padding: 3px 0;
    margin: 7px 0 0 0;
  }
  
  .box-card-counter {
    margin-top: 17px;
    display: flex;
    justify-content: center;
  }
  
  .box-card-counter-sum {
    padding: 10px 25px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    text-align: center;
  }
  
  .box-card-result {
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFF;
    padding: 10px 0;
    margin-top: 20px;
  }
`

export default CardBox;