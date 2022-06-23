
import { createAuthUserWithEmailAndPassword ,createUserDocumentFromAuth } from "../../utils/firebase/Firebase.utils";
import { useState } from "react";
import FormInput from '../../components/formInput/FormInput'
import './Sign-up-styles.scss'
import Button from "../../components/Button/Button";

const defaultInputFields = {
  displayName: ' ',
  email: ' ',
  password:' ',
  confirmPassword: ' '
}

const SignUp = () => {
  const [inputFields, setInputFields] = useState(defaultInputFields)

  const {displayName, email, password, confirmPassword}= inputFields;

  console.log(inputFields);

  const resetInputFields = () => { setInputFields(defaultInputFields) }
  const handleSubmit = async (event) => {
    //avoid defalut behavior of form
    event.preventDefault();

    if(password !== confirmPassword) { alert('! password do not match'); return}
    try {
      const {user}= createAuthUserWithEmailAndPassword(email,password);
      await createUserDocumentFromAuth(user,{displayName})
      resetInputFields();
      console.log({user});
    } catch (error) {
      console.log(error.code);
      if(error.code === 'auth/email-already-in-use'){
        alert("email already exsits ")
      } else
      console.log('error while creating user',error);
    }
  }

  const handleChange = (event)=>{
    const {name,value}=event.target;

    setInputFields({...inputFields,[name]:value})
  };
  return (
    <div className="sign-up-contianer">
      <h2>Don't have an account?</h2>
      <span>Sign up with Emain and Password</span>
      <form  onSubmit={handleSubmit}>
      
        <FormInput label="Display Name" type="text" onChange={handleChange} name="displayName" value={displayName}   required/>
        <FormInput label="Email" type="email" onChange={handleChange} name="email" value={email} required/>
        <FormInput label="Password" type="password" onChange={handleChange} name="password" value={password} required/>
        <FormInput label=" Confirm Password" type="password" onChange={handleChange} name="confirmPassword" value={confirmPassword} required/>
        <Button buttonType='google' type="submit">Sign Up</Button>
      </form>
    </div>
  )
} 

export default SignUp;