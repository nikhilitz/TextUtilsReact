import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

export default function Textarea(props) {
    const handleOnClickCopy=()=>{
      console.log("copied");
      let element=document.getElementById("exampleFormControlTextarea1");
      element.select();
      navigator.clipboard.writeText(element.value);
      props.showAlert("Text copied ", "success");

    }
    const handleOnChange=(e)=>{
        console.log("handled");
        setText(e.target.value);
    }
    const handleOnClickUp=()=>{

       console.log("To upper case");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to uppercase ", "success");


        
    }
    const handleOnClickLow=()=>{

        console.log("To lower case");
         let newText=text.toLowerCase();
         setText(newText);
         props.showAlert("Text converted to lowercase ", "success");

         
     }
     const handleOnClickClear=()=>{
        console.log("Cleared text");
        setText("");
        props.showAlert("Text cleared ", "success");

     }
    const [text,setText]=useState("");
    let wordSize=text.split(" ").length;
    if(text===""){
        wordSize=0;
    }
  return (
    <>
      
      <div className="mb-3 container" style={{color:props.mode==="dark" ? "white":"#042743"}} >
      <h1>{props.heading}</h1>
       
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="10"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark" ? "white":"#042743"}}
        ></textarea>
        <button className="btn btn-primary " onClick={handleOnClickUp}>Convert to upper case</button>
        <button className="btn btn-primary mx-3" onClick={handleOnClickLow}>Convert to low case</button>
        <button className="btn btn-primary mx-3" onClick={handleOnClickClear}>Clear text</button>
        <button className="btn btn-primary mx-3" onClick={handleOnClickCopy}>Copy text</button>
      </div>
      <div className="container" style={{color:props.mode==="dark" ? "white":"#042743"}} >
        <h2>Your text summary</h2>
        <p>total words {wordSize} and characters {text.length}</p>
        <p>time to read {0.08*text.split(" ").length} sec</p>
        {/* reading time to read one word is 0.08 sec */}
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
  );
}
