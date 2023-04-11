import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick= ()=>{
        //console.log("LowerCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick= ()=>{
        //console.log("Clear was clicked" + text);
        let newText="";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange= (event)=>{
       // console.log("On Change")
        setText(event.target.value);
    }
    const handleOnChange2= (event)=>{
        // console.log("On Change")
         setPatt(event.target.value);
     }
     const handleCopy= ()=>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied to Clipboard","success");
     }
    const handleSearchClick= ()=>{
        let newText=text.match(patt);
        console.log(newText);
        document.getElementById('searc').innerHTML=newText;
        if(newText[0]==="")
        {
            props.showAlert("Text Not Found","danger");
        }
        else{
            props.showAlert("Text Found","success");
        }
        //var index=text.lastIndexOf(patt);
        //let newText2=text;
        //if (index >= 0) { 
             //newText2=text.substring(0,index) + "<span style='background-color:yellow'>" + text.substring(index,index+patt.length) + "</span>" + text.substring(index + patt.length);
   // }
    //setText(newText2);
}
const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));

}
    const [text,setText]=useState('');
    const [patt,setPatt]=useState('');
  return (
    <>
    <div className="container">
    <h3 style={{color:props.mode==="dark"?"white": "black"}} className="mb-4">{props.heading}</h3>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text' style={{backgroundColor:props.mode==="dark"? "#1a203d" : "white",color:props.mode==="dark"?"white": "black"}}></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSearchClick}>Search Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>CopyText</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white": "black"}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text:"Enter text to get preview"}</p>
        <h3>Search</h3>
        <input className="form-control me-2" value={patt} onChange={handleOnChange2}type="search" placeholder="Search" aria-label="Search"/>
        <p id='searc'></p>
    </div>
    </>
  )
}
