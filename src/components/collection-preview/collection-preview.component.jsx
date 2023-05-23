import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title, items}) => {
  const navigate = useNavigate()

  return (
      <div className='collection-preview'>
        <h2 
          className='title' 
          onClick={() => navigate(`/shop/${title.toLowerCase()}`)} 
        >
          {title.toUpperCase()}
        </h2>
        <div className="preview">
          {
            items
            .filter((item,idx) => idx < 4)
            .map(({id, ...otherItemProps}) => (
              <CollectionItem key={id} {...otherItemProps}/>
            ))
          }
        </div>
      </div>
   )
  
}

export default CollectionPreview