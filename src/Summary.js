import React from "react";
import "./summary.css";

function Summary({ inputValue }) {
  return (
    <div className="container wrap ">
      <div className="header">
        <h5>Text summary</h5>
      </div>
      <div className="summaryCont mt-4">
        <div className="preview">
          <h5>Preview</h5>
          <p>{inputValue || "No text found !"}</p>
        </div>
        <div className="tChar">
          <h5>Total characters</h5>
          <p>{inputValue.length}</p>
        </div>
        <div className="tWords">
          <h5>Total Words</h5>
          <p>
            {
              inputValue.split(" ").filter((e) => {
                return e.length != " " || 0;
              }).length
            }
          </p>
        </div>
        <div className="tSpaces">
          <h5>Total spaces</h5>
          <p>{inputValue.split(" ").length - 1}</p>
        </div>
        <div className="wpm">
          <h5>Reading time (mins)</h5>
          <p>
            {0.008 *
              inputValue.split(" ").filter((e) => {
                return e.length != 0;
              }).length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Summary;
