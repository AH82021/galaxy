
import {signInWithGooglePopup,createUserDocument} from '../../utils/firebase/Firebase.utils'

const SignIn = () => {
  const logGoogleUser = async ()=> {
    const {user} = await signInWithGooglePopup()
   const userDocRef = await createUserDocument(user)
  }
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  )
}

export default SignIn