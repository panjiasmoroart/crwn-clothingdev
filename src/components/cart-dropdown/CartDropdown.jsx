import React from 'react';
import { withRouter } from "react-router-dom";

import CustomButton from '../custom-button/CustomButton';
import CartItem from '../cart-item/CartItem';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/CartSelectors';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/CartActions';

import './CartDropdown.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartData => ( 
          <CartItem key={cartData.id} item={cartData} />
        ))
      ) : (
        <span className='empty-message'>You cart is empty</span>
      )}
      
    </div>
    <CustomButton 
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    > 
      GO TO CHECKOUT 
    </CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));

/*
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

const mapStateToProps = stateSelect => ({
  cartItems: selectCartItems(stateSelect)
})
*/

/*
// coding test dispatch
const CartDropdown = ({ cartItems, history, ...otherProps }) => {
  console.log(otherProps);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartData => ( 
            <CartItem key={cartData.id} item={cartData} />
          ))
        ) : (
          <span className='empty-message'>You cart is empty</span>
        )}
        
      </div>
      <CustomButton onClick={() => history.push('/checkout')}> GO TO CHECKOUT </CustomButton>
    </div>
  )
}
*/
