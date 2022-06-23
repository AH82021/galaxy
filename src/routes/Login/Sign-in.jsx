
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/Firebase.utils'

import {getIdTokenResult, getRedirectResult}from 'firebase/auth'
import { async } from '@firebase/util'
import SignUp from './Sign-up'

const SignIn = () => {
 
  const logGoogleUser = async ()=> {
    const {user} = await signInWithGooglePopup()
   const userDocRef = await createUserDocumentFromAuth(user)
  }
  
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  )
}

export default SignIn