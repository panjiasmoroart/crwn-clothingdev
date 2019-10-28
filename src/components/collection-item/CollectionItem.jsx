import React from 'react';
import CustomButton from '../custom-button/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/CartActions';

import './CollectionItem.scss';

const CollectionItem = ({ item, addItemVariable }) => {

  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div 
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />

      <div className="collection-footer">
        <span className="name">{ name }</span>
        <span className="price">{ price }</span>
      </div>

      <CustomButton onClick={() => addItemVariable(item)} inverted> Add To Card </CustomButton>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  addItemVariable: dataitem => dispatch(addItem(dataitem))
})

export default connect(
  null, 
  mapDispatchToProps
)(CollectionItem);
