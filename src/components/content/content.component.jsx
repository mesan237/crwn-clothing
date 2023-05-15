import React from 'react'

import './content.styles.scss';

const Content = ({title}) => {
  return (
    <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
  )
}

export default Content