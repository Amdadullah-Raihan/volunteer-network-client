import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MyEvents from './components/MyEvents/MyEvents';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';
import Donations from './components/Donations/Donations'
import AddEvent from './components/Dashboard/AddEvent';
import VolunteerRegistration from './components/VolunteerRegistration/VolunteerRegistration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import PrivateDashboard from './components/PrivateRoute/PrivateDashboard';
import Event from './components/Event/Event';

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/donations' element={<Donations />} />
          <Route path='/events' element={<MyEvents />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/volunteer-registration' element={<VolunteerRegistration />} />
          <Route path='/login'element={<Login/>}/>
          {/* <Route path='/events/:_id' element={<Event/>} /> */}

          {/* private routes  starts*/}
          <Route path='/events/:_id' element={<PrivateRoute><Event/></PrivateRoute>}/>

          <Route path='/dashboard/*' element={<PrivateDashboard><Dashboard /></PrivateDashboard>} />
            
          
         
          {/* private routes ends*/}




          <Route path='*' element={<NotFound />} />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
