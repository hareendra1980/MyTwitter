import React from "react";
import "../Styles/atomicComponents/textArea.css";

const TextArea = props => {
  return (
    <div className="text-container">
      <textarea
        rows={props.rows}
        cols={props.cols}
        onChange={props.handleChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
// should apply prop types
