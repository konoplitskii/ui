import styled from "styled-components";

type PropsTextFieldWrapper = {
    error:boolean
}


const TextFieldWrapper = styled.div<PropsTextFieldWrapper> `
  label {
    display: flex;
    flex-direction: column;
  }
  
  .text-field-box {
    position: relative;
    width: 100%;
  }
  
  input {
    border: ${(props) => props.error  ? '2px solid #FF0F00' : '2px solid #3461CA'};
    border-radius: 5px;
    background-color: transparent;
    outline: none;
    padding: 13px 40px 13px 13px;
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    width: 100%;
    box-sizing: border-box;
    &::placeholder {
      color: rgba(255, 255, 255, 0.57);
    }
    &:focus {
      box-shadow: 0px 2px 4px #3461CA;
    }
    &:disabled {
      background-color: #3A4051;
    }
  }
  
  .label-text {
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    margin-bottom: 4px;
  }
  
  .error-text {
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: #FF0F00;
  }
  
  .status-field,
  .show-password{
    position: absolute;
    right: 18px;
    top: 52%;
    transform: translateY(-50%);
    z-index: 12;
  }

  .status-field {
    
  }

  .show-password {
    cursor: pointer;
    z-index: 11;
  }
`


export default TextFieldWrapper;