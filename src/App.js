import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Shop from './routes/Shop/shop.component';
import Authentication from './routes/Authentication/authentication.component';
import Checkout from './routes/Checkout/checkout.component';
import { useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe =  onAuthStateChangedListener((user) => {
     if(user) {
         createUserDocumentFromAuth(user);
     }   
     dispatch(setCurrentUser(user));
    });

    return unsubscribe;
 }, []);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        <Route path='checkout' element={<Checkout/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
