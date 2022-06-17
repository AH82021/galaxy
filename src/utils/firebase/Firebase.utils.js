
//  initializeApp: this func creates an App instance based on the config
import {initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore, doc,getDoc,setDoc,} from 'firebase/firestore'

//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsK9e8kG2kyeFydOUn9jQbOjGVGdaKmeQ",
  authDomain: "galaxy-style-db.firebaseapp.com",
  projectId: "galaxy-style-db",
  storageBucket: "galaxy-style-db.appspot.com",
  messagingSenderId: "67231515024",
  appId: "1:67231515024:web:db445980795e91534af315"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// GoogleAuthProvidee is a class so with need the new keyword

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocument = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())
  //if user data does not exist 
   if(!userSnapshot.exists()){
    const {displayName,email} = userAuth
    const createdAt =new Date();

    try {
       await setDoc(userDocRef,{displayName,email,createdAt})
    } catch (error) {
      console.log(`error crearting the user`, error.message);
    }
   }
  //if user data exist 
  return userDocRef;
}