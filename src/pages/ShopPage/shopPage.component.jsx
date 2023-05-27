import React from 'react'

import './shopPage.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from '../../Datas/collections';

class ShopPage extends React.Component {
  constructor() {
    super();
 
    this.state = {
     collections : SHOP_DATA
    } 
   }

  render() {
    const { collections } = this.state

    console.log()
    return (
      <div className='shop-page'>
        <h1 className='title'>Collections</h1>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id}  {...otherCollectionProps} />
          ))
        }
      </div>
    )
  }
}

export default ShopPage