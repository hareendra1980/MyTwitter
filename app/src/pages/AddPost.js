import React from "react";
import "../Styles/pages/addPost.css";

import { connect } from "react-redux";
import { addPost } from "../actions";

const AddPost = ({ dispatch }) => {
  let input;

  return (
    <div className="header-container">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addPost(input.value));
          input.value = "";
        }}
      >
        <textarea
          
          id="exampleFormControlTextarea1"
          rows="2"
          cols="60"
          ref={node => (input = node)}
          
        />
        <button type="submit" >
          Post
        </button>
      </form>
    </div>
  );
};

export default connect()(AddPost);
