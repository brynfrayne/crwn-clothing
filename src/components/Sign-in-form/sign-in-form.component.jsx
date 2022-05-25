import { useState, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import './sign-in-form.styles.scss';
import Button from '../button/button.component'
import FormInput from '../form-input/form-input.component'
import { 
    signInUserWithEmailAndPassword,
    signInWithGooglePopup,
    createUserDocumentFromAuth 
 } from '../../utils/firebase/firebase.utils'

export default function SignInForm() {
  const defaultFormFields = {
      email:'',
      password:''
  }
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
      event.preventDefault();

      try {
          const { user } = await signInUserWithEmailAndPassword(
              email,
              password
          );
          setCurrentUser(user);
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
        const { user } = await signInWithGooglePopup();
        const userDocRef = createUserDocumentFromAuth(user)
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]:value})
      }

    return (
    <div className='sign-up-container'>
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
            
            <div className='buttons-container'>
            <Button type='submit'>sign in</Button>
            <Button type='button' onClick={signInWithGoogle} buttonType={'google'}>Google Sign in</Button>
            </div>
            

        </form>
    </div>
  )
}