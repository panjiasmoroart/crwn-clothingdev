import { UserActionTypes } from './UserTypes';

const INITIAL_STATE = {
  currentUser: null
};

const UserReducer = (state = INITIAL_STATE, action) => {
  // jika action yang di dispatch typenya adalah SET_CURRENT_USER maka akan mengembalikan object baru yang isinya adalah state lama
  // di tambah dengan data baru yang di pasing melalui action 
  // hasil reducer inilah yang akan menjadi state yg baru 
  switch(action.type) {
    //case 'SET_CURRENT_USER':
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    default: 
      return state;
  }

};

export default UserReducer;
