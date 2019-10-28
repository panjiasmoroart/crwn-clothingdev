export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id 
  );

  if (existingCartItem) {
    return cartItems.map(cartItem => 
      cartItem.id === cartItemToAdd.id 
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem 
    )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

}

/*
quantity: 1 = pertama kali di add to cart kasih 1
*/

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id 
  );

  // if the existing quantity at 1 remove it otherwise
  // jika quantitynya 1 hapus item
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  // alternatively if the quantity is not 1 and we know there is the existing cart item 
  return cartItems.map(cartItem => 
    cartItem.id === cartItemToRemove.id 
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )

}
