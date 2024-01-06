import {useState } from 'react'
import Button from '../button/button.component';
import FormInput from '../input-form/input-form.component';
import "./sign-in.styles.scss"
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInuserWithEmailAndPassword,
  } from '../../utils/firebase/firebase.utils';


const defaultSignInVar = {  
    email:"",
    password:''
}


const SignInForm = () => {
    const resetFormFields = () =>
    {
     setSignInVar(defaultSignInVar);
    }

    const [signInVar,setSignInVar] =useState(defaultSignInVar);
    const {email,password} = signInVar
    


    const onChangeHandler = (e)=>{
        const{name,value} = e.target;
        setSignInVar ({...signInVar,[name]:value})
        console.log(signInVar)
    }   

    const signInWithGoogle = async () => {
     await signInWithGooglePopup();
         
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();        
        try{
            const {user} = await signInuserWithEmailAndPassword(email,password)
            resetFormFields();
        }catch(e){

        }
    }



    return ( 
        <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Sign ip with your email amd password</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Email" type="email" onChange={onChangeHandler} name="email" value={email} required/>
            <FormInput label="Password" type="password" onChange={onChangeHandler} name="password" value={password} required/>
            <div className='buttons-container'>
                <Button type="submit" children={'Sign In'} />
                <Button onClick={signInWithGoogle} children={'Google'} buttonType={"google"} />
            </div>
        </form>
    </div>
     );
}
 
export default SignInForm;