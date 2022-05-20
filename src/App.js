import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/home.component';
import Navigation from './routes/Navigation/Navigation.component';
import Shop from './routes/Shop/shop.component';
import SignIn from './routes/Sign-In/sign-in.component';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
    
  );
}

export default App;
