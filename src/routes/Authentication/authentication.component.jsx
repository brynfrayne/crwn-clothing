import SignUpForm from '../../components/Sign-up-form/sign-up-form.component';
import SignInForm from '../../components/Sign-in-form/sign-in-form.component';
import './authentication.styles.jsx';
import { AuthenticationContainer } from './authentication.styles.jsx';

export default function Authentication() {

    return (
    <AuthenticationContainer>
        <SignInForm/>
        <SignUpForm/>
    </AuthenticationContainer>
  )
}
