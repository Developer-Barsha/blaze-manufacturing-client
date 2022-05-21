import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/myPortfolio' element={<MyPortfolio/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>

      <ToastContainer/>
    </div>
  );
}

export default App;
