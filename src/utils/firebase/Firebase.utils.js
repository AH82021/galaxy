//  initializeApp: this func creates an App instance based on the config
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsK9e8kG2kyeFydOUn9jQbOjGVGdaKmeQ",
  authDomain: "galaxy-style-db.firebaseapp.com",
  projectId: "galaxy-style-db",
  storageBucket: "galaxy-style-db.appspot.com",
  messagingSenderId: "67231515024",
  appId: "1:67231515024:web:db445980795e91534af315",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// GoogleAuthProvidee is a class so with need the new keyword

const googleprovider = new GoogleAuthProvider();
googleprovider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,addtionalInformation={}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
  //if user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt,...addtionalInformation });
    } catch (error) {
      console.log(`error crearting the user`, error.message);
    }
  }
  //if user data exist
  return userDocRef;
};

//function for user with email & password

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
