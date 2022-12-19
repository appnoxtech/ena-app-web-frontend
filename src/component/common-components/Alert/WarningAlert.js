import React from 'react'

export default function WarningAlert({message}) {
  return (
    <div class="alert alert-danger" role="alert">
        {message}
    </div>
  )
}
