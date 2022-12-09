import React from 'react';

function LoginInput(prop:any) {
  return (
      <input
        type={prop.type}
        className={prop.class}
        id={prop.id}
        placeholder={prop.placeholder}
        name={prop.name}
        required
      />
  )
}


export default LoginInput;
