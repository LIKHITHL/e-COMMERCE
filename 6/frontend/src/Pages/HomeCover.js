import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClover } from '@fortawesome/free-solid-svg-icons'

const HomeCover = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="banner-card">
          <div className="banner-text">
            <h1>Welcome to CEASAR clothing <FontAwesomeIcon icon={faClover} /></h1>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HomeCover