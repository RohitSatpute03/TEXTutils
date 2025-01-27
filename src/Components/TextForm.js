import React, { useState } from 'react';


export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to upper case!", "success")
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to lower case!", "success")
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert(": You cleared the text!", "danger")
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState('');

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black', // Text color updates based on mode
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black', // Text color inside textarea
            }}
            value={text}
            id="exampleFormControlTextarea1"
            rows="9"
          ></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === 'dark' ? 'white' : 'black', // Text color for summary
        }}
      >
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
      </div>
    </>
  );
}
