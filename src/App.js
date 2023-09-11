
import './App.css';
import React from 'react';
import Home from './component/Home'
import Main from './component/Main';
import Courses from './component/Courses';
import Test from './component/Test';
import About from './component/About';
// import Navbar from './component/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Router>
  
 <Routes>
  <Route path='/' element={<Main/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/con' element={<Home/>}/>
  <Route path='/cor' element={<Courses/>}/> 
  <Route path='/rev' element={<Test/>}/> 
 
 </Routes>
</Router>
    
    </React.Fragment>
  );
};

export default App;
