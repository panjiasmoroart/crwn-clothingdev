import SHOP_DATA from './ShopData';

const INITIAL_STATE = {
  collections: SHOP_DATA
}

const ShopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      // Isi data action.type = SET_CURRENT_USER
      // console.log('Isi data action.type = ' + action.type)
      return state;
  }
}

export default ShopReducer;
