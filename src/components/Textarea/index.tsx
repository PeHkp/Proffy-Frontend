import React , { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name: string
    lable:string
}

const Textarea: React.FC<TextareaProps> = ({lable,name,...rest}) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{lable}</label>
      <textarea id={name} {...rest}/>
    </div>
  );
};

export default Textarea;
