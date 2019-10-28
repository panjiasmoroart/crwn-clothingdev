import { UserActionTypes } from './UserTypes';

// user from the firebase user snapshot object
export const setCurrentUser = userdata => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: userdata 
});


/*
// user from the firebase user snapshot object
export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user 
});
*/
