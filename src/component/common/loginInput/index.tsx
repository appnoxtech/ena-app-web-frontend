import React, { FC } from 'react';

const LoginInput:FC<any>=({...prop})=>{
  const handleOnChange = event => {
    const { name, value } = event.target;
    prop.setInput({ ...prop.Input, [name]: value });
  };
  return (
      <input
        type={prop.type}
        className={prop.class}
        id={prop.id}
        placeholder={prop.placeholder}
        name={prop.name}
        onChange={(e)=> handleOnChange(e)}
      />
  )
}


export default LoginInput;
