import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { NavigationContainer, NavLinksContainer, NavLinks, LogoContainer, NavLink } from './navigation.styles.jsx';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';

export default function Navigation() {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext);


  return (
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
        <CrwnLogo className='logo' />
      </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ? (
              <NavLink as='span' onClick={ signOutUser }>
                SIGN OUT
              </NavLink>
            )  : (
              <NavLink to='/auth'>
                SIGN IN 
              </NavLink>
            )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen &&  <CartDropDown />}
      </NavigationContainer>
      <Outlet/>
    </Fragment>
    
  )
}
