// import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React from 'react'
// let name = "ankit"
function App() {
  const [mode, setDarkMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  function showAlert(type, msg) {
    setAlert({
      type: type,
      message: msg
    })
    setTimeout(() => {
      setAlert(null)
    }, 1800);
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("success", "Light mode has enabled")

    }
    else {
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("success", "Dark mode has enabled")
    }
  }
  return (
    <>
      <Navbar title="Ankit" about="About us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the text to analysis" mode={mode} />
        <About />
      </div>
    </>

  );
}

export default App;
