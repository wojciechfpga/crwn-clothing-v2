import Home from './routes/home-route/home.component';
import { Routes } from 'react-router';
import { Route } from 'react-router';
import './categories.styles.scss';
import Shop from './components/shop/shop.component';
import Navigation from './routes/navigation-route/navigation.component';
import SignIn from './components/signin/sigin.component';
import Checkout from './routes/checkout/checkout.component';
const App = () => {


  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
