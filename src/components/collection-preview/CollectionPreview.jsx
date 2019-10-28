import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';

import './CollectionPreview.scss';


const CollectionPreview = ({ title, items }) => (

  <div className="collection-preview">
    <h1 className="title">{ title.toUpperCase() }</h1>
    <div className="preview">
      {
        items.filter((item, idx) => idx < 4)
          .map(item => ( 
            <CollectionItem key={item.id} item={item} /> 
          ))
      }
    </div>
  </div>

)

export default CollectionPreview;

/*
collection preview sebelum ada collectionitem
{
  items.filter((item, idx) => idx < 4)
    .map(item => ( 
      <div key={item.id}>{ item.name }</div>  
    ))
}


// caru umumnya
{
  items.filter((item, idx) => idx < 4)
    .map(({ id, name, price, imageUrl }) => ( 
      <CollectionItem key={id} name={name} price={price} imageUrl={imageUrl} /> 
    ))
}

// menggunakan es6 
{
  items.filter((item, idx) => idx < 4)
    .map(({ id, ...otherItemProps }) => ( 
      <CollectionItem key={id} {...otherItemProps} /> 
  ))
}
*/
