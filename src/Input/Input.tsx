import React, {FC, ReactNode, useState} from 'react';
import TextFieldWrapper from "./styles";
import Icon from "../Icon/Icon";

export interface Input {
    placeholder?:string,
    label?:string,
    errorContent?: string,
    error?:boolean,
    checkValidate?:boolean,
    disabled?:boolean,
    type:string,
    onChange?:()=>void
    children:ReactNode
}


const Input:FC<Input> = ({
                             placeholder,
                             label,
                             errorContent,
                             error,
                             checkValidate,
                             type= 'text',
                             disabled,
                             ...props
}) => {

    const [typeField,setTypeField] = useState(type);
    const [value,setValue] = useState('');

    const changeType = ()=> {
        if(typeField === 'password') {
            setTypeField('text')
        }else {
            setTypeField('password')
        }
    }

    const onChange = (e)=> {
        setValue(e.target.value)
    }

    return (
        <TextFieldWrapper  error={error}>
            <label>
                <span className="label-text">{label}</span>
                <div className="text-field-box">
                    <input type={typeField}
                           {...props}
                           placeholder={placeholder}
                           disabled={disabled}
                           onChange={onChange}
                           value={value}
                    />
                    <div className="status-field">
                        <Icon icon={checkValidate ? 'Success': error ? 'Error' : ''}/>
                    </div>
                    {
                        type === 'password' && !checkValidate && !error
                        ?  <div className="show-password" onClick={changeType}>
                                <Icon icon={typeField === 'password' ? 'EyeOpen' : 'EyeClose'} />
                            </div>
                        : null
                    }
                </div>
            </label>
            {
                error ?  <span className="error-text">{errorContent}</span> : null
            }
        </TextFieldWrapper>
    );
};

export default Input;