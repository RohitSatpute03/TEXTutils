import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,  // Use Routes instead of Switch
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Dark mode on or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(": Dark mode has been activated", "success");
      document.title = "TextUtils Dark Mode"
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(": Dark mode is off", "success");
      document.title = "TextUtils Light Mode"
    } 
  };

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text: " mode={mode} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
