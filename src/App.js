import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Textarea from "./components/Textarea";
import { useState } from "react";
import Alert from "./components/Alert";
import  {BrowserRouter, Route, Routes,Link } from "react-router-dom"



function App() {
  const [alert,setalert]=useState(null);
  const [mode,setmode]=useState("light")
  let showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);

    },2000)

  }
  const togglemode=()=>{
    if(mode==="dark"){
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode has been enabled","success");
      // document.body.style.color="black";
      document.title="TextUtils-Light mode";


    }
    else{
      setmode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark mode has been enabled","success");
      document.title="TextUtils-Dark mode";
    }
  }
  return (
    // yeh sab jsx hai

    <>
    <BrowserRouter>
    <Navbar title="itsme" mode={mode} togglemode={togglemode}/>
    <Alert alert={alert}/>

    <Routes>
      <Route path="/About" element={<About/>}></Route>
      <Route path="/" element={<Textarea heading="Enter text to analyze" mode={mode} showAlert={showAlert}/>}></Route>
    </Routes>
      <div className="container my-5">
      {/* bootstrap  class h jo ki inbuilt cdn se 
      container ka css de rha jiske wajah se text area center me aa gya in a div */}
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
