
import { SignInAuthUserWithEmailAndPassword ,createUserDocumentFromAuth,signInWithGooglePopup} from "../../../utils/firebase/Firebase.utils";
import { useState,useContext } from "react";
import { UserContext } from "../../../components/context/user.context";

import FormInput from '../../../components/formInput/FormInput'
import './Sign-in-styles.scss'
import Button from "../../../components/Button/Button";
import { FcGoogle } from 'react-icons/fc';

const defaultInputFields = {
  email: ' ',
  password:' ',

}

const SignIn = () => {
  const [inputFields, setInputFields] = useState(defaultInputFields)

  const {email, password}= inputFields;

const {setCurrentUser} = useContext(UserContext)

  const resetInputFields = () => { setInputFields(defaultInputFields) }

  const signInWithGoogle= async ()=> {
    const {user} = await signInWithGooglePopup()
      await createUserDocumentFromAuth(user)
  }
  const handleSubmit = async (event) => {
    //avoid defalut behavior of form
    event.preventDefault();

    try {
     const {user} = await SignInAuthUserWithEmailAndPassword(email,password)
     
     setCurrentUser(user)
     resetInputFields()
      
    } 
    catch (error) {
       switch (error.code) {
        case 'auth/worng-password':
          alert('Incorrect pasword for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
       
        default:
          console.log(error);
          break;
       }
      } 
  }

  const handleChange = (event)=>{
    const {name,value}=event.target;

    setInputFields({...inputFields,[name]:value})
  };
  return (
    <div className="sign-in-contianer">
      <h2>Already have an account?</h2>
      <span>Sign up with Email and Password</span>
      <form  onSubmit={handleSubmit}>
      
     
        <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
        <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
        <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In <FcGoogle className="gooleIcon" /></Button>
        </div>
      </form>
    </div>
  )
} 

export default SignIn;