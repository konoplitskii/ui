import styled from "styled-components";


type PropsButtonST = {
    customMarginTop:string,
    primary:boolean,
    size:string,
}

const ButtonST = styled.button<PropsButtonST> `
  margin-top: ${(props => props.customMarginTop ? props.customMarginTop : 0)};
  border: 2px solid #3461CA;
  border-radius: 15px;
  background-color:#171F34;
  text-align: center;
  outline: none;
  font: inherit;
  padding: ${props => props.size === 'large' ? '11px' : '7px 20px' };
  text-decoration: none;
  cursor: pointer;
  width: ${props => props.size === 'large' ? '280px' : 'auto' };
  font-style: normal;
  font-weight: 400;
  font-size: ${props => props.size === 'large' ? '20px' : '18px' };
  max-width: 100%;
  color: ${props => props.primary  ? '#3461CA' : '#ffffff' };
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
  position: relative;
  &:hover {
    color: #3461CA;
    border-color: transparent;
    &:after {
      opacity: 1;
    }
  }
  &:after {
    content: '';
    background: linear-gradient(180deg, #3461CA 0%, #FFFFFF 100%);
    position: absolute;
    top: -3px;
    bottom: -3px;
    left: -3px;
    right: -3px;
    border-radius: 15px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  &:active {
    background-color: #ffffff;
    border-color: transparent;
    color: #3461CA;
  }
`

export  default  ButtonST;