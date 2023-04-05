import React, { useState } from 'react'
let isspeak = 1;
export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("success", "Text has captilized")
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("success", "Text has been copied")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        let sss = document.getElementById("sss");
        if (isspeak) {
            window.speechSynthesis.speak(msg);
            isspeak = 0;
            sss.innerHTML = "Stop";
        }
        else {
            window.speechSynthesis.cancel();
            isspeak = 1;
            sss.innerHTML = "Speak";
        }
    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("success", "text has transformed to lower case")
    }
    const handleOnChange = (event) => {
        // console.log("on Change")
        setText(event.target.value)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("success", "Extra spaces has been removed")
    }
    const countRend = () => {
        let arr = text.split(" ");
        let count = arr.length;
        if (arr[count - 1] === "") {
            count--;
        }
        return count;
    }
    // text = "new text" -->wrong way to change he state
    // setText("")    -->correct way to change the state

    return (
        <>
            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3 my-3">
                    <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white' }} id="myBox" value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3" id="sss" onClick={speak}>Speak</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Removes Extra Spaces</button>
            </div>
            <div className="container my-3">
                <h1>Your text summary</h1>
                <p> {countRend()} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>preveiw</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
