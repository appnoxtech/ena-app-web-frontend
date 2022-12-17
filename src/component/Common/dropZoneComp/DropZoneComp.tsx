import React from 'react'
import Dropzone from 'react-dropzone'
import { GrAdd } from 'react-icons/gr'
import './DropZoneComp.css'

function DropZoneComp() {
    
  return (
    <>
      <Dropzone onDrop={(files) => console.log(files)}>
        {({ getRootProps, getInputProps }) => (
          <div className='container dropzone1'>
            <div
              {...getRootProps({
                className: 'dropzone d-flex justify-content-center py-auto',
                onDrop: (event) => event.stopPropagation(),
              })}
            >
              <input {...getInputProps()} />
              <div className='container-fluid'>
                <p className='text-center col-12 py-5 file-upload'>
                  {' '}
                  <GrAdd size={40} /> <br />
                  File Type Supported: jpg, jpeg, png <br /> Maximum File Size : 10 mb
                </p>
              </div>
            </div>
          </div>
        )}
      </Dropzone>
    </>
  )
}

export default DropZoneComp
