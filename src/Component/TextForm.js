import React, {useState} from "react"



export default function TextForm(props) {

 const handleUpClick = () =>{
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Converted To UpperCase","success")

 }
 const handleloClick = () =>{
   let newText = Text.toLowerCase();
   setText(newText)
   
   props.showAlert("Converted To LowerCase","success")

}
const handleClearClick = () =>{
   let newText = '';
   setText(newText);
   
   props.showAlert("Cleared the Text","success")

}

 const handleOnChange = (event) =>{
    console.log("OnChange")
    setText(event.target.value)
}
const handleCopy=()=>{
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    
    props.showAlert("Copied to ClipBoard","success")
}
const handleExtraSpaces = ()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    
    props.showAlert("Remove Extra Spaces","success")

}


const [Text, setText] = useState('');
    return (
        <>
        <div >
           <div className=" container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}} > 
        <h1>{props.heading}  </h1>
             <textarea className="form-control" value={Text} id="mybox" style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} rows="7"></textarea>
           </div>
           <button className=" btn btn-primary mx-1"  onClick={handleUpClick}>
               Convert To UpperCase
           </button>
           <button className="btn btn-primary mx-1" onClick={handleloClick}>
               Convert To LowerCase
           </button>
           <button className="btn btn-primary mx-1" onClick={handleCopy}> CopyTaxt </button>
           <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>
           
           <button className="btn btn-primary mx-1" onClick={handleClearClick}> Clear Text </button>
      

      </div>
      <div className="container my-4" style={{color: props.mode==='dark'?'white':'#042743'}}>
          <h1>Your Text Summery</h1>
          <p>{Text.split(" ").length} words and {Text.length} charactors</p>
          
          <p> {0.008 * Text.split(" ").length }Minutes to read</p>
          <h2>Preview</h2>
          <p>{Text.length>0?Text:"Enter something in the textbox to Preview it here"}</p>
      </div>
      </>



    )
}
