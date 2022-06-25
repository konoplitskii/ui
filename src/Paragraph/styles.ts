import styled from "styled-components";

type PropsParaParagraphElement = {
    customMarginTop:string,
    customMarginBottom:string
}

const ParaParagraphElement = styled.p<PropsParaParagraphElement>`
  margin-top: ${props=> props.customMarginTop ? props.customMarginTop : 0};
  margin-bottom: ${props=> props.customMarginBottom ? props.customMarginBottom : 0};
  font-family: inherit;
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 30px;
  color: #FFFFFF;
`
export default ParaParagraphElement;