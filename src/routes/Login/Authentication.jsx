
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/Firebase.utils'
import './Sign-in/Authentication.styles.scss'
import SignUp from './Sign-up'
import SignIn from './Sign-in/Sign-in'

const Authentication = () => {
 
  const logGoogleUser = async ()=> {
    const {user} = await signInWithGooglePopup()
   const userDocRef = await createUserDocumentFromAuth(user)
  }
  
  return (
    <div className='authentication-contianer'>
      <SignIn/>
      <SignUp />
    </div>
  )
}

export default Authentication