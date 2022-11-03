
import React from 'react';
import './App.css';

//I'll import the basics for the use of react-router-dom here...
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Importing components....
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//Importing containers....
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Login from './Containers/Login/Login';
import Profile from './Containers/Profile/Profile';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        {/* Our whole app is going to be contained here */}

        <Header />

        <Routes>

          {/* Anything contained here will be switchable, it will swap and change */}

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          
        </Routes>

        <Footer />


      </BrowserRouter>

    </div>
  );
}

export default App;
