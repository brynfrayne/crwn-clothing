import { useState } from 'react';
import './sign-in-form.styles.JSX';
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { 
    signInUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth 
 } from '../../utils/firebase/firebase.utils'
import { SignInContainer } from './sign-in-form.styles.JSX';
import { ButtonsContainer } from './sign-in-form.styles.JSX';

export default function SignInForm() {
  const defaultFormFields = {
      email:'',
      password:''
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;


  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          await signInUserWithEmailAndPassword(
              email,
              password
          );
            resetFormFields();
      } catch(error) {
          switch(error.code) {
              case 'auth/wrong-password':
                  alert('incorrect password for email');
                  break;
              case 'auth/user-not-found':
                  alert('no user associated with this email');
                  break;  
              default:
                  console.log(error);    
          } 
      }
    }
    
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value})
      }

    return (
    <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
            <FormInput
                label='Email'
                type='email'
                required
                onChange={handleChange}
                name='email'
                value={email}
            />

            <FormInput
                label='Password'
                type='password'
                required
                onChange={handleChange}
                name='password'
                value={password}
            />
            
            <ButtonsContainer>
                <Button type='submit'>sign in</Button>
                <Button type='button' onClick={signInWithGoogle} buttonType={'google'}>Google Sign in</Button>
            </ButtonsContainer>
            

        </form>
    </SignInContainer>
  )
}
