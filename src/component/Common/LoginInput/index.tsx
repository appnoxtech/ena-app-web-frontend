import React from 'react';

function LoginInput(prop:any) {
  return (
      <input
        type={prop.type}
        className='form-control'
        id={prop.id}
        placeholder={prop.placeholder}
        name={prop.name}
      />
  )
}

export default LoginInput;
