import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import NotFound from './Components/NotFound';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import AddReview from './Components/AddReview';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/myPortfolio' element={<MyPortfolio/>}/>
        <Route path='/addReview' element={<AddReview/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>

      <ToastContainer/>
    </div>
  );
}

export default App;
