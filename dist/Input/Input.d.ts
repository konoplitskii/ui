import { FC, ReactNode } from "react";
export interface Input {
  placeholder?: string;
  label?: string;
  errorContent?: string;
  error?: boolean;
  checkValidate?: boolean;
  disabled?: boolean;
  type: string;
  onChange?: () => void;
  children: ReactNode;
}
declare const Input: FC<Input>;
export default Input;
