import { FC, ReactNode } from 'react';
export interface Button {
    primary?: boolean;
    customMarginTop?: string;
    children?: ReactNode;
    onClick?: () => void;
    size?: string;
}
declare const Button: FC<Button>;
export default Button;
