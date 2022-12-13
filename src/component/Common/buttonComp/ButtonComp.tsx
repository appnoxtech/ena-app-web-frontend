import React from 'react'


function ButtonComp(prop: any) {
  return (
    <>
    <button onClick={prop.navigationHandler} type={prop.type} className={prop.class}>
                {prop.btvalue}
              </button>
    </>
  )
}

export default ButtonComp