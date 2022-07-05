import styled from "styled-components";

type PropsSmallHeadingElement = {
  customMarginTop: string;
  customMarginBottom: string;
};

const SmallHeadingElement = styled.h3<PropsSmallHeadingElement>`
  margin-top: ${(props) => (props.customMarginTop ? props.customMarginTop : 0)};
  margin-bottom: ${(props) =>
    props.customMarginBottom ? props.customMarginBottom : 0};
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  color: #ffffff;
`;

export default SmallHeadingElement;
