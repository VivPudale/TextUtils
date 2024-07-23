import React, { useState } from "react";

export default function Textform(props) {
  // write a comment
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success");
  };

  const handleLowerClick = () => {
    // console.log("Uppercase is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success");
  };

  const handleClear = () => {
    // console.log("Uppercase is clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Textbox cleared!", "success");
  };

  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    text.setSelectionRange(0, 999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "#01021a" : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#373737",
              color: props.mode === "light" ? "#01021a" : "white",
            }}
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Change to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerClick}
        >
          Change to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClear}
        >
          Clear Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my1"
          onClick={handleExtraSpaces}
        >
          Remove extra spaces
        </button>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#01021a" : "white",
        }}
      >
        <h2>Your text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          Time taken to read{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words is{" "}
          {0.008 *
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
      </div>
      <div
        className="container"
        style={{
          color: props.mode === "light" ? "#01021a" : "white",
        }}
      >
        <h3> Preview </h3>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </>
  );
}
