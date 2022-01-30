import React,{useState} from 'react';

export default function Textform(props) {
    const handleUpClick = ()=>{
       let newText =  text.toUpperCase();
         setText(newText);
    }
    const change = (event)=>{
         console.log("change");
         setText(event.target.value);
    }
    const [text, setText] = useState('Enter Text here');

  return(
      <>
      <h1>{props.heading} </h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={change} id="exampleFormControlTextarea1" rows="15"></textarea>
  </div>
   
   <div>
       <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
   </div>
   </>
  ) 
}
