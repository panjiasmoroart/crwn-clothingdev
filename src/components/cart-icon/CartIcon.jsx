import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/CartActions';
import { selectCartItemsCount } from '../../redux/cart/CartSelectors';
import { createStructuredSelector } from 'reselect';

import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
)

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);


/*
const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0 )
})

const mapStateToProps = ({ cart: { cartItems } }) => {
  console.log('I am being called');
  return {
    itemCount: cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0 ) 
  }
}
*/

