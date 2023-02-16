import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";
import { BrowserRouter, Switch, Route, Link, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const [mode, setMode] = useState("light");
  const modeToggle = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= "#343a40";
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
     <BrowserRouter>
        <Navbar title="TextUtils" aboutText="About" mode={mode} modeToggle={modeToggle}/>
        <Alert alert={alert}/>
        <div className="container my-3">
           <Routes>
            <Route exact path="/About" element = {<About/>}>
              </Route>
           <Route exact path="/" element = { <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>
              </Route>
           </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
