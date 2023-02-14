import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Donations from './components/Home/Donations/Donations';
import MyEvents from './components/MyEvents/MyEvents';
import Blogs from './components/Blogs/Blogs';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/donations' element={<Donations/>}/>
          <Route path='/events' element={<MyEvents/>}/>
          <Route path='/blogs' element={<Blogs/>}/>



          <Route path='*' element={<NotFound/>}/>
        
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
