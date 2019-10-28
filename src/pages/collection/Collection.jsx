import React from 'react';

import CollectionItem from '../../components/collection-item/CollectionItem';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/ShopSelectors';

import './Collection.scss';

const CollectionPage = ({ collection }) => {
  //console.log(collection);
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (stateData, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(stateData)
})

export default connect(mapStateToProps)(CollectionPage);

/*
const CollectionPage = ({ match }) => {
  console.log(match);
  //console.log(match.params.collectionId);
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE : { match.params.collectionId }</h2>
    </div>
  )
}
*/
