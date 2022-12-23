import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar'
import './App.css';
import Home from './pages/home';
import Add from './pages/add';
import Edit from './pages/edit';
import Import from './pages/Import';

const App = () => {
  return (
    <div className="App">
      <ToastContainer/>  
      <Navbar/>
      {/* toastify is used to add notifications to your app */}
      <Routes> 
        <Route  path = "/" element = {<Home/>} />
        <Route  path = "/Add" element={<Add />} />
        <Route  path = "/Import" element = { <Import />} />
        <Route  path = "/edit/:id" element = { <Edit />} /> 
      </Routes>
    </div>
  );
}

export default App;
