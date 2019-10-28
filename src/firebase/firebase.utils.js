import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB9F8B6TENkONXp1DinHX_ZlecalLFjshE",
  authDomain: "crwn-dbclothing.firebaseapp.com",
  databaseURL: "https://crwn-dbclothing.firebaseio.com",
  projectId: "crwn-dbclothing",
  storageBucket: "",
  messagingSenderId: "521332459531",
  appId: "1:521332459531:web:348e55163565b07be95f0e",
  measurementId: "G-SDPS20Q8V9"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  //const userRef = firestore.doc('users/128jdkfdsfj')
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // snapshot not exists 
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }
  // console.log(firestore.doc('users/128jdkfdsfj'))
  // console.log(snapShot);
	return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
