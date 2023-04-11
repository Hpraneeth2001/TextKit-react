import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }
  const toggleMode= ()=>{
    if(mode==='light')
    {
      setMode('dark');
      showAlert("Dark mode Enabled","success");
      document.body.style.backgroundColor = "#042743";
      document.title="TextKit- DarkMode";
     // setInterval(()=>{
     //   document.title="TextUtils is Amazing"
     // },2000);
     // setInterval(()=>{
      //  document.title="Install TextUtils Now"
      //},1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled","success");
      document.title="TextKit- LightMode";
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextKit" aboutText="About TextKit" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
            <Routes>
              <Route exact path="/" element={<TextForm heading="Try-TextKit For word counter character counter lower case to Uppercase Uppercase to lowercase" mode={mode} showAlert={showAlert}/>}/>
              <Route exact path="/about" element={<About mode={mode}/>}/>
            </Routes>
            </div>
    </Router>

{/*<About/>*/}

{/*<Navbar/>*/}
    </>
    
  );
}

export default App;
