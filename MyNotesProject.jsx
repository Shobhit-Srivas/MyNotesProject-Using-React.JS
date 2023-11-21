import React, { useState, useRef, useCallback } from "react";
import "./MyNotesProject.css";

function MyNotesProject() {
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const copyContent = useCallback(() => {
    textRef.current?.select();
    window.navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <>
      <div className="textarea">
        <h1>Enter the text to analyze below</h1>
        <textarea
          placeholder="Enter any text"
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
          ref={textRef}
        ></textarea>
      </div>
      <div className="mybutton">
        <button
          onClick={() => {
            setText(text.toString().toUpperCase());
          }}
        >
          Convert to Uppercase
        </button>
        <button
          onClick={() => {
            setText(text.toString().toLowerCase());
          }}
        >
          Convert to Lowercase
        </button>
        <button onClick={copyContent}>Copy Text</button>
        <button
          onClick={() => {
            setText("");
          }}
        >
          Clear Text
        </button>
      </div>
      <div className="preview">
        <h2 style={{ fontFamily: "arial" }}>Your text summary</h2>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2 style={{ fontFamily: "arial" }}>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

export default MyNotesProject;
