import React from 'react'

function LoginInputPhone(prop:any) {
        return (
            <input
              type={prop.type}
              className='form-control mt-3 d-none d-sm-block'
              id={prop.id}
              placeholder={prop.placeholder}
              name={prop.name}
              required
            />
        )
      }

export default LoginInputPhone