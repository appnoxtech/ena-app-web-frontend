import React from 'react';

function LoginInput(prop:any) {
  return (
      <input
        type={prop.type}
        className='form-control mt-3'
        id={prop.id}
        placeholder={prop.placeholder}
        name={prop.name}
        required
      />
  )
}

export default LoginInput;
