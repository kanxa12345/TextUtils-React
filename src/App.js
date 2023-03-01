import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react'
import Alert from "./components/Alert";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState("light");
  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }
  const toggleMode = (cls) =>{
    removeBodyClasses();
    document.body.classList.add('bg-'+ cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor= "#343a40";
      showAlert("Dark mode has been enabled", "success")
      // document.title = "TextUtils - Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled", "success")
      // document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
     {/* <BrowserRouter> */}
        <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
           {/* <Routes>
            <Route exact path="/About" element = {<About mode={mode}/>}>
              </Route>
           <Route exact path="/" element = { <TextForm showAlert={showAlert} heading="Try Textutils - Word counter, character counter" mode={mode}/>}>
              </Route>
           </Routes> */}
            <TextForm showAlert={showAlert} heading="Try Textutils - Word counter, character counter" mode={mode}/>
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
