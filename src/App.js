import logo from './logo.svg';
import './App.scss';
import SignUp from './component/user/SignUp';
import Login from './component/user/Login';

import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Cards from './component/products/Cards.jsx';
import Home from './component/screens/Home';
import Profile from './component/screens/Profile';
import Product from './component/products/Product';
import { Provider } from 'react-redux';
import store from './redux/store';
import Cart from './component/screens/Cart';
import Allrpoducts from './component/screens/Allrpoducts';
import About from './component/screens/About';
import Addproduct from './component/screens/Addproduct';
import Order from './component/screens/OrderHistory';
import OrderNow from './component/products/OrderNow';
import PaymentSuccess from './component/screens/PaymentSuccess';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Router>
  
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/cart/' element={<Cart></Cart>}>
        
        </Route>
        <Route path='/completeorder' element={<OrderNow></OrderNow>}>
          </Route>
        <Route path='/product/:id' element={<Product></Product>}></Route>
        {/* <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/createuser' element={<SignUP/>}></Route> */}
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/products' element={<Allrpoducts></Allrpoducts>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addproduct' element={<Addproduct></Addproduct>}></Route>
        <Route path='/order' element={<OrderNow></OrderNow>}></Route>
        <Route path='/paymentsuccess' element={<PaymentSuccess></PaymentSuccess>}></Route>
        <Route path='/orderhistory' element={<Order></Order>}></Route>
        
      </Routes>
  
     </Router>
    </div>
    </Provider>
  );
}

export default App;
