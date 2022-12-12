import React from 'react'
import './Breadcrumb.css'

function Breadcrumb(prop:any) {
  return (
    <>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb d-flex justify-content-center'>
          <li className='breadcrumb-item active_breadcrumb'>
              {prop.pathName}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb
