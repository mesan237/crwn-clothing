import React from 'react'

import './custom-button.styles.scss'

const CustomButtom = ({children, ...otherProps}) => {
  return ( 
    <button {...otherProps} className='custom-button'>
      {children}
    </button>
  )
}

export default CustomButtom