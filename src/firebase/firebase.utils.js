import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAwpr2EPoVfCdGsyMKkxIKXyverhHVBE2w",
  authDomain: "ecommerce-91212.firebaseapp.com",
  databaseURL: "https://ecommerce-91212.firebaseio.com",
  projectId: "ecommerce-91212",
  storageBucket: "",
  messagingSenderId: "833650816113",
  appId: "1:833650816113:web:45506c5012b0c0da"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;