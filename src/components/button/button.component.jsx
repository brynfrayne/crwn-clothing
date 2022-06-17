import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from './button.styles';


export const buttonTypeClasses = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton = (buttonType = buttonTypeClasses.base) => 
  ({
    [buttonTypeClasses.base]: BaseButton,
    [buttonTypeClasses.google]: GoogleSignInButton,
    [buttonTypeClasses.inverted]: InvertedButton,
  }[buttonType]);

export default function Button({ children, buttonType, ...otherProps }) {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
        {children}
    </CustomButton>
  )
}
