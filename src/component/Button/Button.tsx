import React from 'react'

const Button = (props: any) => {

  return (
    <div>
      <button 
         type='button' 
         className={`btn ${props.props.btnType}-${props.props.styleName} `} 
         onClick={props.props.clickHandler}
      >
        {props.props.indexData}
      </button>
    </div>
  )
}

export default Button