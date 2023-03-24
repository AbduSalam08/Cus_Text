import React, { useState } from "react";
import Summary from "./Summary";
import "./textbox.css";

function TextBox(props) {
  const [inputText, setInputText] = useState({
    textValue: "",
  });

  // Actual textbox value
  let fieldValue = document.querySelector(".field");

  // Getting input from textarea and storing in state
  const handleChange = (e) => {
    setInputText({ textValue: e.target.value });
  };

  // To Uppercase
  const toUpper = () => {
    //trimming the selection value from the current value of textbox
    let fieldValueTrimmed = fieldValue.value.substr(
      fieldValue.selectionStart,
      fieldValue.selectionEnd - fieldValue.selectionStart
    );

    //Replacing the selection value in the textbox
    setInputText({
      textValue: inputText.textValue.replace(
        inputText.textValue.match(fieldValueTrimmed),
        fieldValueTrimmed.toUpperCase()
      ),
    });
  };

  // To Lowercase
  const toLower = () => {
    let fv_Trimmed = fieldValue.value.substr(
      fieldValue.selectionStart,
      fieldValue.selectionEnd - fieldValue.selectionStart
    );

    setInputText({
      textValue: inputText.textValue.replace(
        inputText.textValue.match(fv_Trimmed),
        fv_Trimmed.toLowerCase()
      ),
    });
  };

  // To Remove extra space
  const removeExtraSpace = () => {
    let fv_Trimmed = fieldValue.value.split(/[ ]+/); //using regex

    setInputText({
      textValue: fv_Trimmed.join(" "),
    });
  };

  //clear textbox
  const handleClear = () => {
    setInputText({ textValue: "" });
  };

  //copy text
  const handleCopy = () => {
    let txtValue = fieldValue.textContent;
    navigator.clipboard.writeText(txtValue);
    props.toastHandler("Text copied !", "primary", "show");
  };

  return (
    <div>
      <div className="container my-5 wrap">
        {/* inputs */}
        <div className="inputs">
          {/* header */}
          <div className="header">
            <h5>Customise your text</h5>
          </div>

          {/* textarea */}
          <textarea
            cols="30"
            rows="8"
            placeholder="Enter here"
            className="field mt-3"
            onChange={handleChange}
            value={inputText.textValue}
          ></textarea>

          {/* button section */}
          <div className="btnSection mt-2">
            <button
              className="toUp atBtn btn"
              disabled={inputText.textValue.trim().length === 0}
              onClick={toUpper}
            >
              ABC
            </button>
            <button
              className="toL atBtn btn"
              disabled={inputText.textValue.trim().length === 0}
              onClick={toLower}
            >
              abc
            </button>
            <button
              className="rSpace atBtn btn"
              disabled={inputText.textValue.trim().length === 0}
              onClick={removeExtraSpace}
            >
              A__Z
            </button>
            <button
              className="btn border-0 copy-icon"
              disabled={inputText.textValue.trim().length === 0}
              onClick={handleCopy}
            >
              <i className="ion-ios-copy"></i>
            </button>
            <button
              className="clear atBtn btn"
              disabled={inputText.textValue.trim().length === 0}
              onClick={handleClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
      <Summary inputValue={inputText.textValue} />
    </div>
  );
}

export default TextBox;
