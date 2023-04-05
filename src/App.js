// import logo from './logo.svg';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React from 'react'
// let name = "ankit"
function App() {
  // setInterval(() => {
  //   document.title = 'textUtils';
  // }, 1000);
  // setInterval(() => {
  //   document.title = 'textUtils amazing';
  // }, 2000);
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
  function toggleColor(colorss) {
    console.log("color");
    if (colorss === 'red') {
      setDarkMode('danger');
      document.body.style.backgroundColor = 'orangered'
      showAlert("success", "red mode has enabled")
    }
    else if (colorss === 'blue') {
      setDarkMode('primary');
      document.body.style.backgroundColor = 'skyblue'
      showAlert("primary", "blue mode has enabled")
    }
    else if (colorss === 'green') {
      setDarkMode('success');
      document.body.style.backgroundColor = 'lightgreen'
      showAlert("success", "green mode has enabled")
    }
    else if (colorss === 'dark') {
      setDarkMode('dark');
      document.body.style.backgroundColor = 'grey'
      showAlert("success", "dark mode has enabled")
    }
  }
  // const toggleMode = () => {

  //   if (mode === 'dark') {
  //     setDarkMode('light');
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("success", "Light mode has enabled")

  //   }
  //   else {
  //     setDarkMode('dark');
  //     document.body.style.backgroundColor = 'grey'
  //     showAlert("success", "Dark mode has enabled")
  //   }
  // }
  return (
    <>

      <Navbar title="Ankit" about="About us" mode={mode} toggleColor={toggleColor} />
      <Alert alert={alert} toggleColor={toggleColor} />
      <div className="container">
        {/* <Routes>      
            <Route path='/About' element={<About />} />
            <Route path='/' element={<TextForm showAlert={showAlert} toggleColor={toggleColor} heading="Enter the text to analysis" mode={mode} />} />
          </Routes> */}
        {/* <About /> */}
        <TextForm showAlert={showAlert} toggleColor={toggleColor} heading="Enter the text to analysis" mode={mode} />
      </div>

    </>

  );
}

export default App;
