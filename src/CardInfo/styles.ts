import styled from "styled-components";

const CardInfoBox = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 60.73%, rgba(52, 97, 202, 0.6) 100%);
  border-radius: 20px;
  padding: 56px 28px;
  min-height: 289px;
  box-sizing: border-box;
  position: relative;
  width: 479px;
  .card-info-icon-wrapper {
    width: 99px;
    height: 85px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -50px;
    top: -43px;
  }
`

export default CardInfoBox;