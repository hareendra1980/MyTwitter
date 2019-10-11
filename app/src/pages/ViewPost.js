import React from "react";
import "../Styles/pages/viewPost.css";
import "../Styles/fontawarsome/css/all.css";

import { connect } from "react-redux";
import { deletePost } from "../actions";
import { favorPost } from "../actions";

const ViewPost = ({ dispatch, postKey, post, renderFavor }) => {
  return (
    <div >
      <div key={postKey} className="post-container">
        {post.text}
        <div>
          {post.favor ? (
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(favorPost(post.id, post.favor));
              }}
              className="button-fav"
            >
              <i class="fas fa-heart"></i>
            </button>
          ) : (
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(favorPost(post.id, post.favor));
              }}
              className="button-fav"
            >
              <i class="far fa-heart"></i>
            </button>
          )}
          {!!!renderFavor && (
            <button
              onClick={e => {
                e.preventDefault();
                dispatch(deletePost(post.id));
              }}
              className="button-div"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default connect()(ViewPost);
