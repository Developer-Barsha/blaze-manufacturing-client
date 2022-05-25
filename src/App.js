import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blogs from './Components/Blogs';
import Navbar from './Shared/Navbar';
import Footer from './Shared/Footer';
import MyPortfolio from './Components/MyPortfolio/MyPortfolio';
import NotFound from './Components/NotFound';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import Dashboard from './Components/Dashboard/Dashboard';
import RequireAuth from './Shared/RequireAuth';
import RequireAdmin from './Shared/RequireAdmin';
import AddReview from './Components/Dashboard/AddReview';
import AddTool from './Components/Dashboard/AddTool';
import ToolDetail from './Components/ToolDetail';
import MyProfile from './Components/Dashboard/MyProfile';
import Welcome from './Components/Dashboard/Welcome';
import MakeAdmin from './Components/Dashboard/MakeAdmin';
import MyOrders from './Components/Dashboard/MyOrders';
import ManageUsers from './Components/Dashboard/ManageUsers';
import Payment from './Components/Dashboard/Payment';

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
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/purchase/:id' element={<RequireAuth><ToolDetail /></RequireAuth>} />

        {/* // dashboard nested routes */}
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<Welcome/>} />
          <Route path='addReview' element={<RequireAuth><AddReview /></RequireAuth>} />
          <Route path='addTool' element={<RequireAdmin><AddTool /></RequireAdmin>} />
          <Route path='myProfile' element={<RequireAuth><MyProfile /></RequireAuth>} />
          <Route path='myOrders' element={<RequireAuth><MyOrders /></RequireAuth>} />
          <Route path='makeAdmin' element={<RequireAdmin><MakeAdmin /></RequireAdmin>} />
          <Route path='manageUsers' element={<RequireAdmin><ManageUsers /></RequireAdmin>} />
          <Route path='payment/:id' element={<RequireAuth><Payment /></RequireAuth>} />
        </Route>

        {/* // 404 route */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </div>
  );
}

export default App;
