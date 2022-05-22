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
import Dashboard from './Components/Dashboard/Dashboard';
import RequireAuth from './Shared/RequireAuth';
import AddReview from './Components/Dashboard/AddReview';
import AddTool from './Components/Dashboard/AddTool';
import ToolDetail from './Components/ToolDetail';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        {/* // normal routes */}
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/myPortfolio' element={<MyPortfolio />} />
        <Route path='/tool/:id' element={<ToolDetail />} />
        <Route path='*' element={<NotFound />} />

        {/* // dashboard nested routes */}
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<AddReview />} />
          <Route path='addTool' element={<AddTool />} />
        </Route>
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
