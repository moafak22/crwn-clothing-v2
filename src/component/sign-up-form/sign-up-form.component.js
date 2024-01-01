import { async } from '@firebase/util';
import { createUserWithEmailAndPassword } from 'firebase/auth';
    import {useState} from 'react'
import { createAuthuserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../input-form/input-form.component';
import "./sign-up-form.styles.scss"
const defaultSignUpVal = {
    displayName:"",
    email:"",
    password:"",
    confirmpassword:""
}



const SignUpForm = () => {

    
const [formField,setFormField] = useState(defaultSignUpVal);

const {displayName,email,password,confirmpassword} = formField;

const resetFormFields = () =>
{
    setFormField(defaultSignUpVal);
}

const handleSubmit = async(e)=>{
    e.preventDefault();

    if (password !== confirmpassword)
       { alert("password do not match confirm password")
        return;}

    try{
        const {user} = await createAuthuserWithEmailAndPassword(email,password)
        await createUserDocumentFromAuth (user,{displayName});
        resetFormFields();
    }catch(e){
        console.log("00000000000" + e)
    }


}

const onChangeHandler = (e)=>{
 const{name,value} = e.target;
 setFormField ({...formField,[name]:value})
 console.log(formField)

 
}

    return ( 
        
        <div className='sign-up-container'>
            <h2>Do not have an account?</h2>
            <spam>Sign up with your email amd password</spam>
            <form onSubmit={handleSubmit}>
                <FormInput label="DisplayName" type="text" onChange={onChangeHandler} name="displayName" value={displayName} required/>
                <FormInput label="Email" type="email" onChange={onChangeHandler} name="email" value={email} required/>
                <FormInput label="Password" type="password" onChange={onChangeHandler} name="password" value={password} required/>
                <FormInput label="Confirm Password" type="password" onChange={onChangeHandler} name="confirmpassword" value={confirmpassword} required/>
                <Button type="submit" children={'Sign Up'} />
            </form>
        </div>
     );
}
 
export default SignUpForm;