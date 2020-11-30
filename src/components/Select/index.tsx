import React , { SelectHTMLAttributes } from "react";

import "./styles.css";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string
    lable:string
    options : Array<{
      value:string
      label:string
    }>
}

const Select: React.FC<SelectProps> = ({lable,name, options,...rest}) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{lable}</label>
      <select id={name} {...rest}> 
        {
          options.map(i => {
          return <option key={i.value} value={i.value}>{i.label}</option>
          })
        }
      </select>
    </div>
  );
};

export default Select;
