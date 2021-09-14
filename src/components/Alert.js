import React from 'react'

export const Alert = ({alert}) => {


  return (
    <div
      className={`alert alert-${alert.type || 'secondary'} alert-dismissible`}
      role="alert"
    >
      {alert.text}

      <button type="button" className="btn-close" aria-label="Close">
      </button>
    </div>
  )
}
