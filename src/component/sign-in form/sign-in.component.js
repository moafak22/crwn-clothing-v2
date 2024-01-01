import {useState} from 'react'
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
    const [signInVar,setSignInVar] =useState(defaultSignInVar);
    const {email,password} = signInVar
    const onChangeHandler = (e)=>{
        const{name,value} = e.target;
        setSignInVar ({...signInVar,[name]:value})
        console.log(signInVar)
    }   

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log("000000000000000000000")
    
        
        try{
            const res = await signInuserWithEmailAndPassword(email,password)
            console.log (res)

           
        }catch(e){
        }
    }



    return ( 
        <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <spam>Sign ip with your email amd password</spam>
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