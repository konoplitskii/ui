import React, {FC, ReactNode} from 'react';
import ButtonST from './styles'


export interface Button {
    primary?: boolean,
    customMarginTop?:string,
    children?:ReactNode,
    onClick?:()=> void,
    size? : string
}

const Button: FC<Button> = ({
    children,
    size='large',
    primary= false,
    onClick,
    customMarginTop
}) => {
    return (
        <ButtonST size={size} primary={primary} onClick={onClick} customMarginTop={customMarginTop}>
            {children}
        </ButtonST>
    );
};

export default Button;
