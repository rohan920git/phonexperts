import logo from './logo.svg';
import './App.scss';
import SignUp from './component/user/SignUp';
import Login from './component/user/Login';
import Navbar from './component/common/Navbar.jsx';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import Cards from './component/products/Cards.jsx';
import Home from './component/screens/Home';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        {/* <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/createuser' element={<SignUP/>}></Route> */}
      </Routes>
     </Router>
    </div>
  );
}

export default App;
