import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComp() {
    const now = 60;
  return (
    <ProgressBar now={now} label={`${now}%`} visuallyHidden />
  )
}

export default ProgressBarComp