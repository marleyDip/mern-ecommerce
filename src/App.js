import { Routes, Route } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Product from './components/Product/Product';
import Shipping from './components/Shipping/Shipping';
import Register from './components/Register/Register';
import PrivateOutlet from './components/PrivateOutlet/PrivateOutlet';
import AuthProvider from './context/AuthProvider';
import Payment from './components/Payment/Payment';
import Order from './components/Order/Order';


function App ()
{
  return (

    <AuthProvider>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/product/:id" element={ <Product /> } />
        <Route path="/cart" element={ <Cart /> } />


        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />

        <Route path='/' element={ <PrivateOutlet /> }>
          <Route path="shipping" element={ <Shipping /> } />
          <Route path="Payment" element={ <Payment /> } />
          <Route path="order" element={ <Order /> } />
          <Route path="profile" element={ <Profile /> } />
          <Route path="dashboard" element={ <Dashboard /> } />
        </Route>

        <Route path="*" element={ <NotFound /> } />
      </Routes >
    </AuthProvider>

  );
}

export default App;