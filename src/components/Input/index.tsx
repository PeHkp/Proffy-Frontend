import React , { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name: string
    lable:string
}

const Input: React.FC<InputProps> = ({lable,name,...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{lable}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
};

export default Input;
