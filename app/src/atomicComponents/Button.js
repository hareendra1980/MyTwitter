import React from "react";
import PropTypes from "prop-types";
import "../Styles/atomicComponents/button.css";
import "../Styles/fontawarsome/css/all.css";

const Button = props => {
  return (
    <div className="button-container">
      {props.type === "text" ? (
        <button value={props.type} onClick={props.handleClick}>
          {props.text}
        </button>
      ) : null}
      <div>
        {props.type === "icon" && props.iconType === "close" ? (
          <button>
            <i class="far fa-window-close"></i>
          </button>
        ) : null}
      </div>
      <div>
        {props.type === "icon" && props.iconType === "favor" ? (
          <button>
            <i class="far fa-heart"></i>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Button;
// should apply prop types
