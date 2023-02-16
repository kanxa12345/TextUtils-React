import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        if(text.length>0){
            let newText = text.toUpperCase();
            setText(newText)
            props.showAlert("Converted to uppercase", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleLoClick = () =>{
        if(text.length>0){
            let newText = text.toLowerCase();
            setText(newText)
            props.showAlert("Converted to lowercase", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleClearText = () =>{
        if(text.length>0){
            let newText = ""
            setText(newText)
            props.showAlert("Text cleared", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleCapitalize = () =>{
        if(text.length>0){
            const arr = text.split(" ");
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
            }
            const newText = arr.join(" ");
            setText(newText)
            props.showAlert("Capitalized text", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleCorrectText = () =>{
        if(text.length>0){
            let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
            setText(newText)
            props.showAlert("Text corrected", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleCopy = () =>{
        if(text.length>0){
            let box = document.getElementById("myBox");
            box.select();
            navigator.clipboard.writeText(box.value);
            props.showAlert("Copied to clipboard", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleExtraSpaces = () =>{
        if(text.length>0){
            let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
        }
        else{
            props.showAlert("Please type something first", "warning");
        }
    }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" value ={text} onChange={handleOnChange} id="myBox" rows="6" style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Change to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Change to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize text</button>
            <button className="btn btn-primary mx-2" onClick={handleCorrectText}>Correct text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className="container my-1" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length - 1} words and {text.length} characters</p>
            <p>{(0.008 * (text.split(" ").length - 1))} Minutes to read</p> 
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
        </>
    )
}
