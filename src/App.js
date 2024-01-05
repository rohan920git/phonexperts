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
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/product/:id' element={<Product></Product>}></Route>
        {/* <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/createuser' element={<SignUP/>}></Route> */}
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
  
     </Router>
    </div>
    </Provider>
  );
}

export default App;
