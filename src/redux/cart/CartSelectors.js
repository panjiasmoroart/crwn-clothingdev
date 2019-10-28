import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cartdata => cartdata.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cartdata => cartdata.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity, 
      0 
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumalatedQuantity, cartItem) => 
        accumalatedQuantity + cartItem.quantity * cartItem.price, 
      0 
    )

);


