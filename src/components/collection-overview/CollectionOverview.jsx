import React from 'react';

import CollectionPreview from '../collection-preview/CollectionPreview';

import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/ShopSelectors';
import { createStructuredSelector } from 'reselect';

import './CollectionOverview.scss';

const CollectionOverview = ({ collections }) => (
  <div className="collections-preview">
    {
      collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps } />
      ))
    } 
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);
