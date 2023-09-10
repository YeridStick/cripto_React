import React from 'react'
import "../helpers/LoaderStyle.css"

export default function Loader() {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  )
}
