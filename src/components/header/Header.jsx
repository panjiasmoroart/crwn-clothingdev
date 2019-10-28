import React from 'react';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/CartSelectors';
import { selectCurrentUser } from '../../redux/user/UserSelectors';
import { createStructuredSelector } from 'reselect';

import './Header.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}      
      <CartIcon />
    </div>
    { hidden ? null : <CartDropdown /> }
  
  </div>
)

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

/*
const mapStateToProps = (stateSelect) => ({
  currentUser: selectCurrentUser(stateSelect),
  hidden: selectCartHidden(stateSelect)
})
*/

export default connect(mapStateToProps)(Header);

/*
const mapStateToProps = state => ({
  // user object from root-reducer.js
  currentUser: state.user.currentUser
})

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden
})
*/
