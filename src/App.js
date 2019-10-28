import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage';
import Header from './components/header/Header';
import CheckoutPage from './pages/checkout/Checkout';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/UserActions';
import { selectCurrentUser } from './redux/user/UserSelectors';
import { createStructuredSelector } from 'reselect';

import './App.css';

class App extends React.Component {

  /*
  // tidak perlu membuat state disini lagi karena sudah menggunakan redux
  constructor() {
    super();

    this.state = {
      currentUser: null
    }

  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
    })
  }
  */
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          //console.log(snapShot);
          //console.log(snapShot.data());
          /*
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }    
          }, () => {
            console.log(this.state);
          });
          */
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });

          //signup 
          //console.log(this.state)

        });
      } //end if
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  
  render() {
    return (
      <div>
        <Header/>

        <Switch> 
          <Route exact path="/" component={ HomePage } />
          <Route path='/shop' component={ ShopPage } />
          <Route path='/checkout' component={ CheckoutPage } />
          <Route path='/signin' 
            render={() => 
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch> 

      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
}) 

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);

/*
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
}) 
*/
