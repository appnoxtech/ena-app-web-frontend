import React, { FC, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './style.css';
const LoginInput: FC<any> = ({ ...prop }) => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  }
  const type = prop.type
  const handleOnChange = event => {
    const { name, value } = event.target;
    prop.setInput({ ...prop.Input, [name]: value });
  };
  if (type === 'password') {
    return (
      <div className="" style={{position: 'relative'}}>
        <input 
          type={showPassword ? 'text' : 'password'}
          value={prop.Input[prop.id]}
          className={prop.class}
          id={prop.id}
          placeholder={prop.placeholder}
          name={prop.name}
          onChange={(e) => handleOnChange(e)}
        />
        {
          showPassword ? 
           <VisibilityIcon onClick={togglePassword} className='visibilityIcon' /> 
          : <VisibilityOffIcon  onClick={togglePassword} className='visibilityIcon' />
        }
      </div>

    )
  } else {
    return (
      <input
        type={prop.type}
        value={prop.Input[prop.id]}
        className={prop.class}
        id={prop.id}
        placeholder={prop.placeholder}
        name={prop.name}
        onChange={(e) => handleOnChange(e)}
      />
    )
  }

}


export default LoginInput;
